import React from 'react'
import { Formik, Form, ErrorMessage, Field } from 'formik'
import * as yup from 'yup'
import './style.css'
import {Link} from 'react-router-dom'
import Footer from '../Employee/Footer'
import { ToastContainer,toast} from 'react-toastify'
import * as myaxios from './Services/LoginSignUpServices'
function Login() {
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
       
    if (res === "") {
      toast.error('INVALID CREDENTIAL');
    } else {
        toast.success('WELCOME',{position: "top-center",autoClose: 2000});
        sessionStorage.setItem('token',res.data.token)
        if(res.data.role==="ROLE_EMPLOYEE"){
          sessionStorage.setItem('role',res.data.role)
          setTimeout(() => { window.location.replace('/userheader'); }, 2000);
        }
        console.log(res.data.token)
        // setTimeout(() => { window.location.replace('/userheader'); }, 2000);
      }

  } catch (error) {
    console.log(error)
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
    <nav className="navbar navbar-expand-sm bg-primary navbar-dark">
			<div className="navbar-header">
				<h3 className="navbar-brand">Tariff Manager</h3>
			</div>
		</nav>
    <Formik initialValues={initialValues}
    validationSchema={validationSchema}
    onSubmit={onSubmit}>
      <div className='text-center'>
        <h1>Login</h1>
    <Form>
        <Field type="email" name="email" placeholder="Enter Email" size="40" /> <br />
        <ErrorMessage component="div" className='error' name="email" />
        <br />
          <Field type="password" name="password" placeholder="Enter Password" size="40" /><br />
        <ErrorMessage component="div" className='error' name="password" />
        <br />    
        <button type="submit" className='btn btn-success'>Login</button>  
        <h6 className="mt-3">
        <p>New User?<Link to="/public/register">Signup</Link></p>
        </h6>
        <ToastContainer/>
    </Form>
    </div>
</Formik>
<Footer/>
</div>
  )
}

export default Login