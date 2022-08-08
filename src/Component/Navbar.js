import React from 'react'
import {Link} from 'react-router-dom'
import {ToastContainer,toast} from 'react-toastify'
function Navbar() {
  const handleLogout=()=>{
    sessionStorage.setItem("token",false);
    sessionStorage.setItem("role",false);
    toast.success("Logout SUCCESSFULL", { position: "top-center", autoClose: 2000 });
    setTimeout(() => { window.location.replace('/'); }, 1000);
  }
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">Tariff  Manager</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {sessionStorage.getItem('role')==="ROLE_MANAGER" &&
                  <>
                    <li className="nav-item">
                      <Link className="nav-link" aria-current="page" to="/manager/profile">Profile</Link>
                    </li>
                  </>
              }
              {sessionStorage.getItem('role')==="ROLE_EMPLOYEE" &&
                  <>
                    <li className="nav-item">
                      <Link className="nav-link" aria-current="page" to="/employee/profile">Profile</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/employee/addexpense">Add Expense</Link>
                    </li> 
                    <li className="nav-item">
                      <Link className="nav-link" to="/employee/bankdetails">Add Bank Details</Link>
                    </li> 
                  </>
              }
              </ul>
          <div className="d-flex">
          <button className="btn btn-ligh" onClick={handleLogout}>Logout</button>
          </div>
        </div>
      </div>
      <ToastContainer/>
    </nav>
  )
}
export default Navbar
