import express from 'express';
import { Booking } from '../models/Booking';

const router = express.Router();

// POST /api/book
router.post('/book', async (req, res) => {
    const { userId, date, timeSlot } = req.body;
    console.log(req.body);

    try {
        const existingBooking = await Booking.findOne({ date, timeSlot });
        if (existingBooking) {
            return res.status(400).json({ message: 'Time slot already booked' });
        }

        const newBooking = new Booking({ userId, date, timeSlot });
        await newBooking.save();
        res.status(201).json(newBooking);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Error creating booking' });
    }
});

router.get("/bookings", async (req, res) => {
    try {
        const bookings = await Booking.find();
        debugger;
        res.json(bookings);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch bookings' });
    }
});

export default router;