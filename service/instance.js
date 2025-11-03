import axios from "https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js";

const axiosInstance = axios({
    baseURL: "https://terasdata.onrender.com",
    timeout: 10000,
    headers: { "Content-Type": "application/json" }
})

export default axiosInstance