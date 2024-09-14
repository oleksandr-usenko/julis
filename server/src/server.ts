import express, { Request, Response } from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import { Booking, IBooking } from './models/Booking';
import bcrypt from 'bcrypt';
import { User } from './models/User';
import booking from "./routes/booking";
import auth from "./routes/auth";

// Create the express app
export const app = express();
const PORT = 3000;

// Middleware to parse JSON
app.use(cors());
app.use(express.json());

app.use('/api', booking);
app.use('/api/auth', auth);

// Connect to MongoDB (use your own connection string)
const MONGO_URI = 'mongodb+srv://olexandrusenko:TRokzNXtkU13iWOk@cluster0.8ukam.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
mongoose.connect(MONGO_URI)
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err));
/*

// Utility function to check if a time slot is available
const isTimeSlotAvailable = async (timeSlot: string): Promise<boolean> => {
    const booking = await Booking.findOne({ timeSlot });
    return !booking;
};


// Register a new user
async function registerUser(name: string, email: string, password: string) {
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
        name,
        email,
        password: hashedPassword
    });

    await newUser.save();
    console.log('User registered:', newUser);
}

async function getAllBookings() {
    await Booking.find();
}

export async function bookTimeSlot(userId: string, date: Date, timeSlot: string) {
    // Check if the time slot is already booked
    const existingBooking = await Booking.findOne({ date, timeSlot });
    if (existingBooking) {
        console.log('Time slot is already booked');
        return;
    }

    // Create the booking
    const newBooking = new Booking({
        date,
        timeSlot,
        user: userId
    });

    await newBooking.save();
    console.log('Booking created:', newBooking);
}

async function getBookingsForDay(date: Date) {
    const bookings = await Booking.find({ date }).populate('user', 'name email');
    return bookings;
}
*/

// Endpoint to get available slots
/*app.get('/available-slots', async (req: Request, res: Response) => {
    const allSlots = [
        '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
        '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM'
    ];

    const availableSlots = [];
    for (const slot of allSlots) {
        if (await isTimeSlotAvailable(slot)) {
            availableSlots.push(slot);
        }
    }

    res.json({ availableSlots });
});

// Endpoint to book a time slot
app.post('/book', async (req: Request, res: Response) => {
    const { name, time } = req.body;

    if (!name || !time) {
        return res.status(400).json({ message: 'Name and time are required' });
    }

    // Check if the time slot is available
    if (!(await isTimeSlotAvailable(time))) {
        return res.status(400).json({ message: 'Time slot is already booked' });
    }

    // Create a new booking
    const newBooking = new Booking({ name, time });
    await newBooking.save();

    res.json({ message: 'Booking successful', booking: newBooking });
});

// Endpoint to get all bookings
app.get('/bookings', async (req: Request, res: Response) => {
    const bookings = await Booking.find();
    res.json({ bookings });
});*/

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});