import axios from "axios";
axios.defaults.baseURL = "http://localhost:8080";
export const getAllRoom = async () => {
    try {
        const res = await axios.get("/rooms")
        return res.data;
    } catch (error) { console.log(error.message); }
}