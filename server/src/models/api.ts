/*
import {app, bookTimeSlot} from "../server";
import {Booking} from "./Booking";

app.get("/api/bookings", async (req, res) => {
    try {
        const bookings = await Booking.find();
        res.json(bookings);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch bookings' });
    }
});

app.get('/api/bookings/:date', async (req, res) => {
    try {
        const bookings = await Booking.find({ date: req.params.date });
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch bookings' });
    }
});

app.post('/api/book', async (req, res) => {
    console.log(req);
    debugger;
    await bookTimeSlot(req.userId, req.date, req.timeSlot);
});
*/
