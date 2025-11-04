const axiosInstance = axios.create({
    baseURL: "https://terasdata.onrender.com",
    timeout: 10000,
    headers: { "Content-Type": "application/json" }
})

export default axiosInstance