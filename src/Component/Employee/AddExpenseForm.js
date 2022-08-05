import React from 'react'
import {toast,ToastContainer} from 'react-toastify'
import * as axiosemp from './EmployeeServices/EmployeeServices'
function AddExpenseForm(props) {
  const [expense, setExpense] = React.useState({
    email: "",
    billNumber: "",
    datedOn: "",
    billImage:"",
    remark: ""
});

const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(name, value);
    setExpense({ ...expense, [name]: value });
}

const handleFileChange = (e) => {
  setExpense({
   ...expense,   [e.target.name]: e.target.files[0],
  })
}

const handleSubmit = async(e) => {
    e.preventDefault();
    const config = {
      headers: {
          'content-type': 'multipart/form-data'
      }
  }
    console.log(expense);
    try {
            const res = await axiosemp.expense(expense,config);
                toast.success("Expense added Sucessfully", { position: "top-center", autoClose: 2000 });
                setTimeout(() => { window.location.replace('/userheader'); }, 2000);
            
        } catch (err) {
          console.log(err)
            toast.error("Expense adding Failed !", { position: "top-center", autoClose: 2000 })
        }
      }
    
  return (
   <div>
    
    
      <div className='text-center'>
        <h1>Add Expense</h1>
    <form onSubmit={handleSubmit} encType="multipart/form-data">
        <input type="email" name="email" placeholder="Enter Email" size="40" value={expense.email}   onChange={handleInput} required /> <br />
      
        <br />
        <input type="text" name="billNumber" placeholder="Enter billnumber" value={expense.billNumber}  onChange={handleInput} required size="40"/><br />
        <br />
        <input type="date" name="datedOn" placeholder="Enter Date" required value={expense.datedOn}  onChange={handleInput} size="40" /><br />
        <br />
        <input type="file" name="billImage" placeholder="Invoice No." required onChange={handleFileChange}  size="40"/><br />
        <br />
        <input type="text" name="remark" placeholder="Enter remark" required value={expense.remark}  onChange={handleInput} size="40" /> <br />
        
        <br />    
        <button type="submit" className='btn btn-success'>Submit</button>
        <ToastContainer/>
        
    </form>
    </div>
</div>
  )
}

export default AddExpenseForm