
import axios from "axios";
const baseUrl="http://localhost:8086/employee";
const token = sessionStorage.getItem('token')
const headers = {
    'Content-Type': 'multipart/form-data',
    'Authorization': 'Bearer '+token
  }
export const expense=async(val)=>{
    const res=await axios({
        method:'POST',
        url:`${baseUrl}/addexpense`,
        dat:val,
        headers:headers,
        
});
return res;
}

export const getExpenses = async() => {
  const res = await axios({
      method: 'GET',
      url: `${baseUrl}/`,
      headers: {'Authorization': 'Bearer '+token}
  });
  return res;
}

export const getprofile=async()=>{
  const res=await axios({
      method:'get',
      url:`${baseUrl}/profile`,
      headers:{'Authorization':'Bearer '+ token}
  })
  return res;
}
export const bankaccount = async(val)=>{
  const res = await axios({
      method:'post',
      url:`${baseUrl}/employee/bankdetails`,
      data:val,
      headers:{'Authorization':'Bearer '+ token},
  });
  return res;
}
export const bankaccountupdate = async(val)=>{
  const res = await axios({
      method:'put',
      url:`${baseUrl}/employee/bankupdate`,
      data:val,
      //headers:{'Authorization':'Bearer '+ token},
  });
  return res;
}
