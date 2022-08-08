import React,{useState,useEffect} from 'react'
import * as services from './EmployeeServices/EmployeeServices'
import { ToastContainer,toast} from 'react-toastify'
import Navbar from '../Navbar';
import Footer from '../Footer';
function Home() {
  const [expenses, setExpenses] = useState([])
  useEffect(() => {
    getAllExpenses();
  }, []);
  async function getAllExpenses() {
    try {
      const res = await services.getExpenses();
      setExpenses(res.data)
      console.log(res.data);
    } catch (err) {
      toast.error("SIGNUP FAILED !", {
        position: "top-center",
        autoClose: 2000,
      });
    }
  }
  return (
    <>
    <Navbar/>
    <div className="container my-5">
		<div className="row gy-5">
      <h3>Expenses</h3>
      {expenses.map((expense) => {
        return (
          <div className="col-3 g-2">
					<div className="card" style={{width: "18rem"}} >
						{/* <img  src={expense.billImage} className="card-img-top" style=" width: 100%;height: 15vw;object-fit: cover;" alt={expense.billNumber}/> */}
						<div className="card-body" key={expense.expense_id}>
							<h5 className="card-title">Bill Number : {expense.billNumber}</h5>
							<div>
								<li className="list-group-item">Bill Cost :{expense.billCost}</li>
							</div>
							<div>
								<li className="list-group-item">Remark : {expense.remark}</li>
							</div>
							<div>
								<li className="list-group-item">Dated On : {expense.datedOn}</li>
							</div>
							<div>
								<li className="list-group-item">Status : {expense.status}</li>
							</div>
              
						</div>
					</div>
				</div>
        )
      })}
		</div>
	</div>
  <Footer/> 
  </>
  )
}
export default Home
