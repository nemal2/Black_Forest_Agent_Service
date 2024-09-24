import axios from "axios";
import { getToken } from "./auth"; // A helper function to retrieve the token

const apiRequest = axios.create({
  baseURL: "http://44.201.50.234:8800/api",
  withCredentials: true,
});

// Attach token to headers for every request
apiRequest.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("authToken"); // Or retrieve from context
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default apiRequest;
