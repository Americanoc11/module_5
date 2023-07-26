import axios, { } from "axios"

axios.defaults.baseURL = "http://localhost:8080/";

export async function getListUser() {
    const res = await axios.get("/users")
    return res.data
}
export async function createUses(newUser) {
    await axios.post('/users', newUser);
}
export async function deleteById(id, newUser) {
    const res = await axios.delete(`/users/${id}`)
    return res.data
}