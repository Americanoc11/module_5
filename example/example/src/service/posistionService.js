import axios from "axios";

axios.defaults.baseURL = "http://localhost:8080"

export const getAllPosition = async () => {
    try {
        const res = await axios.get("/position")
        return res.data
    } catch (error) {
        console.log(error.message);
    }
}