import axios from "axios";
axios.defaults.baseURL = 'http://localhost:8080';
export const getAllHouse = async () => {
    try {
        const res = await axios.get("/houses")
        return res.data
    } catch (error) {
        console.log(error.message);
    }
}