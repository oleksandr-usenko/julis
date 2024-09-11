import express, { Request, Response } from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import { Booking, IBooking } from './models/Booking';

// Create the express app
const app = express();
const PORT = 3000;

// Middleware to parse JSON
app.use(bodyParser.json());

// Connect to MongoDB (use your own connection string)
const MONGO_URI = 'mongodb+srv://olexandrusenko:TRokzNXtkU13iWOk@cluster0.8ukam.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
mongoose.connect(MONGO_URI)
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err));

// Utility function to check if a time slot is available
const isTimeSlotAvailable = async (time: string): Promise<boolean> => {
    const booking = await Booking.findOne({ time });
    return !booking;
};

// Endpoint to get available slots
app.get('/available-slots', async (req: Request, res: Response) => {
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
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});