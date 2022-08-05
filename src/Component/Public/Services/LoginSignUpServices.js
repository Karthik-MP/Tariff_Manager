import axios from 'axios'
const baseUrl = "http://localhost:8086";
export const signup = async(val) => {
    const res = await axios({
        method: 'POST',
        url: `${baseUrl}/public/register`,
        data: val
    });
    return res;
}
export const login = async(val) => {
    const res = await axios({
        method: 'post',
        url: `${baseUrl}/public/login`,
        data: val
    });
    return res;
}