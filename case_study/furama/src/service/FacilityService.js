import axios from "axios";

export const getFacility = async () => {
    try {
        const res = await axios.get(`http://localhost:8080/facility`)
        return res.data;
    } catch (e) {
        console.log(e);
    }
}
export const createService = async (param) => {
    try {
        await axios.post(`http://localhost:8080/facility`, param);
    } catch (e) {
        console.log(e);
    }
}
export const findAllFacilityType = async () => {
    try {
        const res = await axios.get(`http://localhost:8080/type`)
        return res.data;
    } catch (e) {
        console.log(e);
    }
}
export const findAllRoomStandard = async () => {
    try {
        const res = await axios.get(`http://localhost:8080/roomStandard`)
        return res.data;
    } catch (e) {
        console.log(e);
    }
}