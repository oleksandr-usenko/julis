import axios from "axios";
import { HTTP, SERVER_BASE } from "../utilities/http.ts";

let isRefreshing = false;
let failedQueue: any[] = [];

let accessToken = localStorage.getItem("accessToken");

function setAuthHeader(token: string) {
  HTTP.defaults.headers.common["Authorization"] = `${token}`;
}

if (accessToken) setAuthHeader(accessToken);
const processQueue = (error: any, token: string | null = null) => {
  failedQueue.forEach((prom) => {
    if (error) {
      prom.reject(error);
    } else {
      prom.resolve(token);
    }
  });
  failedQueue = [];
};

HTTP.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      if (isRefreshing) {
        return new Promise((resolve, reject) => {
          failedQueue.push({
            resolve: (token: string) => {
              originalRequest.headers["Authorization"] = token;
              resolve(HTTP(originalRequest));
            },
            reject: (err: any) => reject(err),
          });
        });
      }

      isRefreshing = true;

      return new Promise(async (resolve, reject) => {
        try {
          const res = await axios.post(
            SERVER_BASE + "/api/auth/refresh",
            {},
            { withCredentials: true },
          );

          const newToken = res.data.accessToken;

          localStorage.setItem("accessToken", newToken);
          setAuthHeader(newToken);
          processQueue(null, newToken);

          originalRequest.headers["Authorization"] = newToken;
          resolve(HTTP(originalRequest));
        } catch (err) {
          processQueue(err, null);
          reject(err);
        } finally {
          isRefreshing = false;
        }
      });
    }

    return Promise.reject(error);
  },
);
