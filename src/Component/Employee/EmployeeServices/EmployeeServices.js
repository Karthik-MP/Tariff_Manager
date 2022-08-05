
import axios from "axios";
const baseurl="http://localhost:8086/employee";
const token = sessionStorage.getItem('token')
const headers = {
    'content-type': `multipart/form-data`,
    'Authorization': 'Bearer '+token
  }
export const expense=async(val)=>{
    const res=await axios({
        method:'POST',
        url:`${baseurl}/addexpense`,
        dat:val,
        headers:headers,
        
});
return res;
}