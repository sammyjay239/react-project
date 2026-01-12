
// src/utils/api.js
import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:5000/api", // adjust if backend is deployed elsewhere
    withCredentials: true,
});

// Attach token to headers if it exists
api.interceptors.request.use((config) => {
    const token = localStorage.getItem("token");
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

export default api;



// import axios from "axios";

// const API = axios.create({
//   baseURL: "http://localhost:5000/api", // ✅ correct backend URL
//   withCredentials: true, // if you're using cookies/auth
// });

// export default API;
