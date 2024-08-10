import axios from "axios";

const API_BASE_URL = "https://localhost:7160";

const userToken = localStorage.getItem("token");
const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
    Authorization: userToken ? `Bearer ${userToken.replace(/['"]+/g, "")}` : "",
  },
});

const apiService = {
  post: (endpoint, data) => {
    return api.post(endpoint, data);
  },
  get: (endpoint) => {
    return api.get(endpoint);
  },
};

export default apiService;
