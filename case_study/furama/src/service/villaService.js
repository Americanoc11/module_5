import axios from "axios";
axios.defaults.baseURL = 'http://localhost:8080';
export const getAllVilla = async () => {
    try {
        const res = await axios.get('/villas');
        return res.data
    } catch (error) { console.log(error.message); }
}