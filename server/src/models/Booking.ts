import mongoose, { Document, Schema } from 'mongoose';

// Define the Booking interface
export interface IBooking extends Document {
    name: string;
    time: string;
}

// Define the schema for bookings
const BookingSchema: Schema = new Schema({
    name: { type: String, required: true },
    time: { type: String, required: true, unique: true }, // Time slot must be unique
});

// Create the Booking model
export const Booking = mongoose.model<IBooking>('Booking', BookingSchema);