import { Schema, Document, model } from 'mongoose';

// Define the User interface
export interface IUser {
    name: string;
    email: string;
    password: string; // hashed password
}

// Define the User schema
const UserSchema: Schema = new Schema<IUser>({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
});

// Create the User model
export const User = model<IUser>('User', UserSchema);