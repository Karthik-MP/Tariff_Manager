import React, { useEffect } from 'react'
import { Formik, Form, ErrorMessage, Field } from 'formik'
import * as yup from 'yup'
import './css/Login.css'
import {Link} from 'react-router-dom'
import { ToastContainer,toast} from 'react-toastify'
import * as myaxios from './Services/LoginSignUpServices'
import Navbar from '../Navbar'
import Footer from '../Footer'
function Login() {
  useEffect(()=>{
    if(!sessionStorage.getItem('token')===false){
      if(sessionStorage.getItem('role')==="ROLE_EMPLOYEE"){
        console.log(true)
        window.location.replace('/employee');
      }
    }
  },[])
  const initialValues = {
    email: "",
    password: "", 
}
const validationSchema = yup.object({
    email: yup.string().email("Invalid Email").required("Email is required"),
    password: yup.string().max(8, "Password should not exceed 8 characters").required("password is required"),
})
async function handleOnSubmit(val) {
  console.log(val);
  try {
    const res = await myaxios.login(val);
    if (res.data === "") {
      toast.error('INVALID CREDENTIAL');
    } else {
        toast.success('WELCOME',{position: "top-right",autoClose: 2000});
        sessionStorage.setItem('token',res.data.token)
        if(res.data.role==="ROLE_EMPLOYEE"){
          sessionStorage.setItem('role',res.data.role)
          setTimeout(() => { window.location.replace('/employee'); }, 2000);
        }
        if(res.data.role==="ROLE_MANAGER"){
          sessionStorage.setItem('role',res.data.role)
          setTimeout(() => { window.location.replace('/manager'); }, 2000);
        }
        console.log(res.data.token)
        // setTimeout(() => { window.location.replace('/userheader'); }, 2000);
      }
  } catch (error) {
    // console.log(error)
    toast.error('LOGIN FAILED');
  }
}
const onSubmit = (values, onSubmitProps) => {
 handleOnSubmit(values);
    console.log(values);
    onSubmitProps.resetForm();
}
  return (
    <div>
    <Navbar/>
      <Formik initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}>
        <div className="d-flex justify-content-center mt-5">
          <div className='text-center col-3'>
            <Form>
            <h1>Login</h1>
              <div className="mb-3">
                  <Field type="email" className="form-control" name="email" placeholder="Enter Email" /> 
                  <ErrorMessage component="div" className='error' name="email" />
              </div>
              <div className="mb-3">
                  <Field type="password" className="form-control" name="password" placeholder="Enter Password" />
                  <ErrorMessage component="div" className='error' name="password" />
              </div>
              <button type="submit" className='btn btn-success'>Login</button>  
              <h6 className="mt-3">
              <p>New User? <Link className='link-dark' to="/public/register">Signup</Link></p>
              </h6>
              <ToastContainer/>
            </Form>
        </div>
      </div>
    </Formik>
  <Footer/>
  </div>
  )
}
export default Login