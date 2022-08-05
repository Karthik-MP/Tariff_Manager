import React from 'react'
import {Form,ErrorMessage,Formik,Field} from 'formik'
import * as yup from 'yup'
import Customselect from './Customselect'
function BankAccountForm() {
    
    const options = [
        {label:"Savings",value: "savings" },
        {label:"Loan or Overdraft", value: "loan or overdraft"},
        {label:"NRE",value: "NRE"},
        {label:"Checking",value: "Checking"},
        {label:"Money Market",value: "Money Market"},
        {label:"Cash Credit",value: "Cash Credit"}
    
    
       
      ];
   
    const validationSchema=yup.object({
        country:yup.string().required("country is required"),
        email:yup.string().email("Invalid Email").required("email is required"),
        accountnumber:yup.string().min(9,"Invalid account number").max(18,"Invalid account number").required("accountnumber is required"),
        account:yup.string().required("Account Type is required"),
        bankname:yup.string().required("Bank name is required"),
        bankcode:yup.string(),
        bankbranch:yup.string().required(),
        ifsc:yup.string().max(11,"Invalid ifsc").min(11,"Invalid ifsc").required("IFSC code is required")

    })
  return (
    <div className="text-center">
                <h1>BankAccountForm</h1>
                <Formik
                initialValues ={{
                    country:"",
                    email:"",
                    accountnumber:"",
                    accountholder:"",
                    account:"",
                    bankname:"",
                    bankcode:"",
                    bankbranch:"",
                    ifsc:""
            
                }}
               validationSchema={validationSchema}
               onSubmit={(values, onSubmitProps) => {
                //toast.success("Signup success",{position:"top-center", autoClose:2000});
                console.log(values);
                onSubmitProps.resetForm();
        
            } }>        
             
               
             {formik => (
            <Form>
              <Field  type="text" name="country" placeholder="Enter country" className="Field"  /> <br />
                <ErrorMessage component="div" className='error' name="country" />
                <br />
                <Field  type="email" name="email" placeholder="Enter email" className="Field"  /> <br />
                <ErrorMessage component="div" className='error' name="email" />
                <br />
          
                <Field type="text" name="accountnumber" placeholder="Enter accountnumber" className="Field" /><br />
                <ErrorMessage component="div" className="error" name="accountnumber" />
                <br />  
                <Field  type="text" name="accountholder" placeholder="Enter accountholder name" className="Field"  /> <br />
                <ErrorMessage component="div" className='error' name="accountholder" />
                <br />   
                <Customselect options={options} value={formik.values.account} className={'input'} onChange={value=>formik.setFieldValue('account',value.value)}/><br/>
                <ErrorMessage component="div" className='error' name="account" /><br/>
                <Field type="text" name="bankname" placeholder="Enter Bankname" className="Field"  /><br />
                <ErrorMessage component="div" className='error' name="bankname" />
                <br />
                <Field type="text" name="bankcode" placeholder="Enter Bankcode" className="Field" /><br />
                <ErrorMessage component="div" className='error' name="bankcode" />
                <br />
                <Field type="text" name="bankbranch" placeholder="Enter Bankbranch " className="Field" /><br />
                <ErrorMessage component="div" className='error' name="bankbranch" />
                <br />
                <Field type="text" name="ifsc" placeholder="Enter ifsc code" className="Field" /><br />
                <ErrorMessage component="div" className='error' name="ifsc" />
                <br />
                <button type="submit" className='btn btn-primary' >Submit</button>
                
                
                </Form>)}
                </Formik>
               
            </div>
                

       
  )
}

export default BankAccountForm