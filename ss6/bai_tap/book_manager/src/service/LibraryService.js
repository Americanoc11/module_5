import axios from "axios";
axios.defaults.baseURL = 'http://localhost:8080';
export const getAll = async () => {
    try {
        const result = await axios.get('/bookList')
        return result.data
    } catch (error) {
        console.log('error')
    }
}
export const save = async (book) => {
    try {
        await axios.post('/bookList', book)
    } catch (error) {
        console.log('error')
    }
}
export const getById = async (id) => {
    try {
        const result = await axios.get(`/bookList/${id}`)

        return result.data
    } catch (error) {
        console.log('error')
    }
}
export async function deleteById(id,newBook) {
    const result = await axios.delete(`/bookList/${id}`,newBook)

    return result.data

} 
