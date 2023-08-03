import axios from "axios";

axios.defaults.baseURL = "http://localhost:8080";

export const getAllEmployee = async () => {
    try {
        const res = await axios.get("/employees")
        return res.data
    } catch (error) {
        console.log("error");
    }
}
export const createEmployee = async (params) => {
    try {
        const res = await axios.post("/employees", params)

    } catch (error) {

    }
}