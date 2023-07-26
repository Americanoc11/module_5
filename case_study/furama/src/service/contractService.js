import axios from "axios";
axios.defaults.baseURL = 'http://localhost:8080';
export const getAllContract = async () => {
    try {
        const res = await axios.get('/contracts')
        return res.data
    } catch (error) {
        console.log(error.message);
    }

}