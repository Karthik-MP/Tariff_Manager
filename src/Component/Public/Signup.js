import React from 'react'
import { Formik,Form,ErrorMessage, Field } from 'formik'
import * as yup from 'yup'
import './style.css'
import {Link} from 'react-router-dom'
import Customselect from '../Employee/Customselect'
import Footer from '../Employee/Footer'
import {ToastContainer,toast} from 'react-toastify'
import * as myaxios from './Services/LoginSignUpServices'
function Signup() {
   const options = [
     {label:"Employee",value: "ROLE_EMPLOYEE" },
     { label:"Manager", value: "ROLE_MANAGER" },
    
   ];
 
       const validationSchema= yup.object({
        email: yup.string().email("Invalid email").required("Email is Required"),
        name: yup.string().max(15, "Name should not be exceed 15 characters").required("Name is Required"),
        mobileNumber: yup.string().matches("^[0-9]{10}$", "mobile number should be 10 digits").required("Mobile Number is Required"),
        role: yup.string().required("Role is Required"),
        password: yup.string().max(8, "Password should not exceed 8 characters").required("password is Required"),
        confirmpassword: yup.string().oneOf([yup.ref('password')], "Password should be matched").required("confirm password is Required")

    })
    const handleOnSubmit = async (value) => {
        try {
            const res = await myaxios.signup(value);
            
                toast.success("SIGNUP SUCCESSFULL", { position: "top-center", autoClose: 2000 });
                setTimeout(() => { window.location.replace('/public/login'); }, 2000);
            
        } catch (err) {
            toast.error("SIGNUP FAILED !", { position: "top-center", autoClose: 2000 })
        }
    }
   
  

    return (    
        <div>
        <nav className="navbar navbar-expand-sm bg-primary navbar-dark">
                <div className="navbar-header">
                    <h3 className="navbar-brand">Tariff Manager</h3>
                </div>
            </nav>
            <div className='text-center'>
                <h1>Signup</h1>
                <Formik
                initialValues ={{
                    email: "",
                    name: "",
                    mobileNumber: "",
                    role: "",
                    password: "",
                    confirmpassword: ""
            
                }}
               validationSchema={validationSchema}
               onSubmit={(values, onSubmitProps) => {
                handleOnSubmit(values);
                console.log(values);
                onSubmitProps.resetForm();
        
            } }> 
          
               
             
               
             {formik => (
   <Form>
              <Field  type="email" name="email" placeholder="Enter email" className="Field"  /> <br />
                <ErrorMessage component="div" className='error' name="email" />
                <br />
          
                <Field type="text" name="name" placeholder="Enter name" className="Field" /><br />
                <ErrorMessage component="div" className="error" name="name" />
                <br />     
                <Field type="text" name="mobileNumber" placeholder="Enter mobile number" className="Field" /><br />
                <ErrorMessage component="div" className="error" name="mobileNumber" />
                <br />
                <Customselect options={options} value={formik.values.role} className={'input'} onChange={value=>formik.setFieldValue('role',value.value)}/><br/>
                <ErrorMessage component="div" className='error' name="role" /><br/>
                <Field type="password" name="password" placeholder="Enter Password" className="Field"  /><br />
                <ErrorMessage component="div" className='error' name="password" />
                <br />
                <Field type="password" name="confirmpassword" placeholder="Enter ConfirmPassword" className="Field" /><br />
                <ErrorMessage component="div" className='error' name="confirmpassword" />
                <br />
                <button type="submit" className='btn btn-primary' >SignUp</button>
                <ToastContainer/>
                <h6 className="mt-2">
                <p>Already a User?<Link to="/public/login">Login</Link></p>
                </h6>
                </Form>)}
                </Formik>
                <Footer/>
                

        </div>
        </div>
       

    )
}

export default Signup