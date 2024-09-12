import {HTTP} from "../utilities/http.ts";

export const getBookings = async () => {
    return await HTTP.get(`/api/bookings`);
}

export const test = async () => {
    return await HTTP.get(`/api/bookings/2024-09-10`);
}