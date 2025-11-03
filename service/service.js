import axiosInstance from "./instance";

async function getData() {
    try {
        const res = await axiosInstance.get("/evler")
        return res.data
    }
    catch (err) {
        console.log('Melumat gelmedi, Xeta: ' + err);
    }
}

export { getData };
