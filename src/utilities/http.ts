import axios from "axios";

export const HTTP = axios.create({
    baseURL: 'http://localhost:3000',
});
axios.defaults.headers.post['Content-Type'] = 'application/json';
