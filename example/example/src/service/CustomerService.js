import axios from "axios";

axios.defaults.baseURL = "http://localhost:8080/"

export const getAllCustomer = async () => {
    try {
        const res = await axios.get("/customers")
        return res.data
    } catch (error) {
        console.log(error.message);
    }
}
export const createCustomer = async (param) => {
    try {
        const res = await axios.post("/customers", param)
        return res.data
    } catch (error) {
        console.log(error.message);
    }
}
export const getById = async (id) => {
    try {
        const res = await axios.get("/customers", id)
        return res.data
    } catch (error) {
        console.log(error.message);
    }
}
export const deleteById = async (id, newCustomer) => {
    try {
        const res = await axios.get(`/customers/:${id}`, newCustomer)
        return res.data
    } catch (error) {
        console.log(error.message);
    }
}