const axiosInstance = axios.create({
    baseURL: "https://terasdata.onrender.com",
    timeout: 20000,
    headers: { "Content-Type": "application/json" }
})

export default axiosInstance