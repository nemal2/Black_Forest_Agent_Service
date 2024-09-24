import axios from "axios";

const apiRequest = axios.create({
  baseURL: "http://44.201.50.234:8800/api",
  withCredentials: true,
});


export default apiRequest;
