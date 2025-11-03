import axiosInstance from "./instance.js";

async function getData() {
    try {
        const res = await axiosInstance.get("/evler")
        return res.data
    }
    catch (err) {
        console.log('Melumat gelmedi, Xeta: ' + err);
        return []
    }
}

export default getData
