import React from 'react'
import {Form,ErrorMessage,Formik,Field} from 'formik'
import {toast,ToastContainer} from 'react-toastify'
import * as yup from 'yup'
import Customselect from '../Public/Customselect'
import * as services from './EmployeeServices/EmployeeServices'
import {Link} from 'react-router-dom'
function BankAccountForm() {
    
    const options = [
        {label:"Savings",value: "savings" },
        {label:"Loan or Overdraft", value: "loan or overdraft"},
        {label:"NRE",value: "NRE"},
        {label:"Checking",value: "Checking"},
        {label:"Money Market",value: "Money Market"},
        {label:"Cash Credit",value: "Cash Credit"}
    
    
       
      ];
      const handleOnSubmit = async (value) => {
  
        try {
            const res = await services.bankaccount(value);
           
                toast.success("bankdetails added successfully", { position: "top-center", autoClose: 2000 });
                setTimeout(() => { window.location.replace('/userheader'); }, 2000);
            
        } catch (err) {
            toast.error("bankdetails adding Failed !", { position: "top-center", autoClose: 2000 })
        }
    }
   
    const validationSchema=yup.object({
        
        email:yup.string().email("Invalid Email").required("email is required"),
        accountnumber:yup.string().min(9,"Invalid account number").max(18,"Invalid account number").required("accountnumber is required"),
        accountHolderName:yup.string().max(20,"should not exceed 20 characters").required("name is required"),
        accountType:yup.string().required("Account Type is required"),
        bankName:yup.string().required("Bank name is required"),
        address:yup.string().required("address is required"),
        branchName:yup.string().required(),
        ifscCode:yup.string().max(11,"Invalid ifsc").min(11,"ifsc code should be 11 digits").required("IFSC code is required")

    })
  return (
    <div className="text-center">
                <h1>BankAccountForm</h1>
                <Formik
                initialValues ={{
                    
                    email:"",
                    accountnumber:"",
                    accountHolderName:"",
                    accountType:"",
                    bankName:"",
                    address:"",
                    branchName:"",
                    ifscCode:""
            
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
          
                <Field type="text" name="accountnumber" placeholder="Enter accountnumber" className="Field" /><br />
                <ErrorMessage component="div" className="error" name="accountnumber" />
                <br />  
                <Field  type="text" name="accountHolderName" placeholder="Enter accountHolderName" className="Field"  /> <br />
                <ErrorMessage component="div" className='error' name="accountHolderName" />
                <br />   
                <Customselect options={options} value={formik.values.accountType} className={'input'} onChange={value=>formik.setFieldValue('accountType',value.value)}/><br/>
                <ErrorMessage component="div" className='error' name="accountType" /><br/>
                <Field type="text" name="bankName" placeholder="Enter Bankname" className="Field"  /><br />
                <ErrorMessage component="div" className='error' name="bankName" />
                <br />
                <Field type="text" name="address" placeholder="Enter address" className="Field" /><br />
                <ErrorMessage component="div" className='error' name="address" />
                <br />
                <Field type="text" name="branchName" placeholder="Enter Bankbranch " className="Field" /><br />
                <ErrorMessage component="div" className='error' name="branchName" />
                <br />
                <Field type="text" name="ifscCode" placeholder="Enter ifsc code" className="Field" /><br />
                <ErrorMessage component="div" className='error' name="ifscCode" />
                <br />
                <button type="submit" className='btn btn-primary' >Submit</button>
                <ToastContainer/>
                <Link to="/employee/bankedit" className='btn btn-warning'>Edit Details</Link>
                
                </Form>)}
                </Formik>
               
            </div>
                

       
  )
}

export default BankAccountForm