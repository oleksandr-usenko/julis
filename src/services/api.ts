import {HTTP} from "../utilities/http.ts";

export const getBookings = async () => {
    return await HTTP.get(`/api/bookings`);
}

export const test = async () => {
    return await HTTP.get(`/api/bookings/2024-09-10`);
}

type TAuthPayload = {
    email: string;
    password: string;
}

export const login = async (payload: TAuthPayload) => {
    return await HTTP.post(`/api/auth/login`, payload);
}

export const register = async (payload: TAuthPayload) => {
    return await HTTP.post(`/api/auth/register`, payload);
}