import { HTTP } from "../utilities/http.ts";

export function setHTTPAuth(token: string) {
  (HTTP.defaults.headers as any) = {
    ...HTTP.defaults.headers,
    Authorization: `${token.replace(/^"(.*)"$/, "$1")}`,
  };
}

export const getBookings = async () => {
  return await HTTP.get(`/api/bookings`);
};

export const test = async () => {
  return await HTTP.get(`/api/bookings/2024-09-10`);
};

type TAuthPayload = {
  email: string;
  password: string;
};

export const login = async (payload: TAuthPayload) => {
  return await HTTP.post(`/api/auth/login`, payload, { withCredentials: true });
};

export const register = async (payload: TAuthPayload) => {
  return await HTTP.post(`/api/auth/signup`, payload);
};

export const createService = async (formData: FormData) => {
  return await HTTP.post(`/api/services`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

export const getServices = async () => {
  return await HTTP.get(`/api/services`);
};

export const uploadFile = async (file: FormData) => {
  return await HTTP.post(`/api/upload`, file);
};
