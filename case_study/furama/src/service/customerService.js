import axios from "axios";

axios.defaults.baseURL = 'http://localhost:8080';
export const getAllCustomer = async () => {
    try {
        const res = await axios.get('/customers')
        return res.data
    } catch (error) {
        console.log(error.message);
    }
}
