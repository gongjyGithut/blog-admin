import axios from "axios";

const http = axios.create({
    baseURL: "http://localhost:8085/admin/api",
    timeout: 5000
});
http.interceptors.request.use(
    config => {
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);
http.interceptors.response.use(
    response => {
        const res = response.data;
        return res;
    },
    error => {
        return Promise.reject(error);
    }
);
export default http;