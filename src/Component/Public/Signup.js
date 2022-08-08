import React from 'react'
import { Formik,Form,ErrorMessage, Field } from 'formik'
import * as yup from 'yup'
import './css/Login.css'
import {Link} from 'react-router-dom'
import Customselect from './Customselect'
import {ToastContainer,toast} from 'react-toastify'
import * as myaxios from './Services/LoginSignUpServices'
import Navbar from '../Navbar'
function Signup() {
   const options = [
     {label:"Employee",value: "ROLE_EMPLOYEE" },
     { label:"Manager", value: "ROLE_MANAGER" },
   ];
       const validationSchema= yup.object({
        email: yup.string().email("Invalid email").required("Email is Required"),
        name: yup.string().max(15, "Name should not be exceed 15 characters").required("Name is Required"),
        mobileNumber: yup.string().matches("^[0-9]{10}$", "Mobile number should be 10 digits").required("Mobile Number is Required"),
        role: yup.string().required("Role is Required"),
        password: yup.string().max(8, "Password should not exceed 8 characters").required("Password is Required"),
        confirmpassword: yup.string().oneOf([yup.ref('password')], "Password should be matched").required("Confirm Password is Required")
    })
    const handleOnSubmit = async (value) => {
        try {
            await myaxios.signup(value);
                toast.success("SIGNUP SUCCESSFULL", { position: "top-center", autoClose: 2000 });
                setTimeout(() => { window.location.replace('/public/login'); }, 2000);
        } catch (err) {
            toast.error("SIGNUP FAILED !", { position: "top-center", autoClose: 2000 })
        }
    }
    return (    
        <div>
            <Navbar/>
            <div className='text-center mt-5'>
                <h1 className='mb-5'>Signup</h1>
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
            <Form className='d-flex justify-content-center'>
                <div className="col-4">
                    <div className="mb-3">
                        <Field  type="email" name="email" placeholder="Enter email" className="form-control"  />
                        <ErrorMessage component="div" className='error' name="email" />
                    </div>
                    <div className="mb-3">
                        <Field type="text" name="name" placeholder="Enter name" className="form-control" />
                        <ErrorMessage component="div" className="error" name="name" />
                    </div> 
                    <div className="mb-3">
                        <Field type="text" name="mobileNumber" placeholder="Enter mobile number" className="form-control" />
                        <ErrorMessage component="div" className="error" name="mobileNumber" />
                    </div>
                    <div className="mb-3">
                        <Customselect options={options} value={formik.values.role}  onChange={value=>formik.setFieldValue('role',value.value)}/>
                        <ErrorMessage component="div" className='error' name="role" />
                    </div>
                    <div className="mb-3">
                        <Field type="password" name="password" placeholder="Enter Password" className="form-control"  />
                        <ErrorMessage component="div" className='error' name="password" />
                    </div>
                    <div className="mb-3">
                        <Field type="password" name="confirmpassword" placeholder="Enter ConfirmPassword" className="form-control" />
                        <ErrorMessage component="div" className='error' name="confirmpassword" />
                    </div>
                    <button type="submit" className='btn btn-success' >SignUp</button>
                    <h6 className="mt-2">
                        <p>Already a User? <Link className='link-dark' to="/public/login">Login</Link></p>
                    </h6>
                </div>
                <ToastContainer/>
            </Form>)}
            </Formik>
        </div>
    </div>
    )
}
export default Signup