import mongoose, { Schema, Document } from 'mongoose';
import { IUser } from './User';

// Define the Booking interface
export interface IBooking extends Document {
    date: Date;
    timeSlot: string;
    userId: string;  // Reference to the user who made the booking
}

// Define the Booking schema
const BookingSchema: Schema = new Schema({
    date: { type: Date, required: true },
    timeSlot: { type: String, required: true }, // e.g., '10:00 AM'
    userId: { type: String, required: true },
});

// Create the Booking model
export const Booking = mongoose.model<IBooking>('Booking', BookingSchema);