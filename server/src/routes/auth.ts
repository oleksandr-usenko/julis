import express from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { User} from '../models/User';

const router = express.Router();

// Sign Up Route
router.post('/register', async (req, res) => {
    const { email, password } = req.body;
    console.log(email, password);
    debugger;

    try {
        // Check if the user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create new user
        const newUser = new User({
            email,
            password: hashedPassword,
        });

        await newUser.save();

        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error signing up user' });
    }
});

const ACCESS_TOKEN_EXP = '1h';
const REFRESH_TOKEN_EXP = '7d';

function generateAccessToken(userId: string) {
    return jwt.sign({ userId }, process.env.JWT_SECRET!, { expiresIn: ACCESS_TOKEN_EXP });
}

function generateRefreshToken(userId: string) {
    return jwt.sign({ userId }, process.env.REFRESH_SECRET!, { expiresIn: REFRESH_TOKEN_EXP });
}
// Sign In Route
router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        // Find the user
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        // Compare the passwords
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        // Generate JWT token
        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET as string, { expiresIn: '1h' });
        const accessToken = generateAccessToken(user._id.toString());
        const refreshToken = generateRefreshToken(user._id.toString());

        res.cookie('refreshToken', refreshToken, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict',
            maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
        });

        res.json({ accessToken });
    } catch (error) {
        res.status(500).json({ message: error });
    }
});

router.post('/refresh', (req, res) => {
    const token = req.cookies.refreshToken;
    if (!token) return res.sendStatus(401);

    jwt.verify(token, process.env.REFRESH_SECRET!, (err: any, decoded: any) => {
        if (err) return res.sendStatus(403);

        const newAccessToken = generateAccessToken(decoded.userId);
        res.json({ accessToken: newAccessToken });
    });
});

export default router;