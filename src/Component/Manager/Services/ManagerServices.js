import axios from 'axios'
const baseUrl = "http://localhost:8086/manager";
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
        url: `${baseUrl}/profile`,
        headers: {'Authorization': 'Bearer '+token}
    });
    return res;
}
// export const getProfile = async() => {
//     const res = await axios({
//         method: 'GET',
//         url: `${baseUrl}/profile`,
//         headers: {'Authorization': 'Bearer '+token}
//     });
//     return res;
// }

export const updateExpenseApprove = async(expenseId) => {
    console.log(expenseId)
    const res = await axios({
        method: 'PUT',
        url: `${baseUrl}approve/${expenseId}`,
        headers: {'Authorization': 'Bearer '+token}
    });
    return res;
}
export const updateExpenseReject = async(expenseId) => {
    console.log(expenseId)
    const res = await axios({
        method: 'PUT',
        url: `${baseUrl}reject/${expenseId}`,
        headers: {'Authorization': 'Bearer '+token}
    });
    return res;
}