import axiosInstance from "./instance.js";

async function getData() {
    try {
        const res = await axiosInstance.get("/evler")
        return res.data
    }
    catch (err) {
        console.log('Melumat gelmedi, Vip evler Xeta: ' + err);
        return []
    }
}

async function getPop() {
    try {
        const res = await axiosInstance.get("/popularAxtaris")
        return res.data
    }
    catch (err) {
        console.log('Melumat gelmedi, Pop axtaris Xeta: ' + err);
        return []
    }
}

async function getAgentlik() {
    try {
        const res = await axiosInstance.get("/agentlikler")
        return res.data
    }
    catch (err) {
        console.log('Melumat gelmedi, Agentlik data Xeta: ' + err);
        return []
    }
}

async function getSon() {
    try {
        const res = await axiosInstance.get("/evler")
        return res.data
    }
    catch (error) {
        console.log('Melumat gelmedi, Son elan data Xeta: ' + err);
        return []
    }
}

async function getYasayis() {
    try {
        const res = await axiosInstance.get("/yasayisKompleksleri")
        return res.data
    }
    catch (err) {
        console.log('Melumat gelmedi, Yasayis Kompleksleri data Xeta: ' + err);
        return []
    }
}

export { getData, getPop, getAgentlik, getSon, getYasayis }
