import mongoose, { Schema, Document } from 'mongoose';

// Define the User interface
export interface IUser extends Document {
    name: string;
    email: string;
    password: string; // hashed password
}

// Define the User schema
const UserSchema: Schema = new Schema({
    // name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }, // Store hashed password
});

// Create the User model
export const User = mongoose.model<IUser>('User', UserSchema);