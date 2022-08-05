import axios from 'axios'
const baseUrl = "http://localhost:8086/manager/";
const token = sessionStorage.getItem('token')
export const getExpenses = async() => {
    const res = await axios({
        method: 'GET',
        url: `${baseUrl}`,
        headers: {'Authorization': 'Bearer '+token}
    });
    return res;
}
export const getProfile = async() => {
    const res = await axios({
        method: 'GET',
        url: `${baseUrl}profile`,
        headers: {'Authorization': 'Bearer '+token}
    });
    return res;
}