import React, { useEffect } from 'react'
import './css/Homepage.css'
import {Link} from 'react-router-dom'
function Home() {
  useEffect(()=>{
    if(!sessionStorage.getItem('role')==="ROLE_EMPLOYEE"){
      window.location.replace("/employee")
    }else if(!sessionStorage.getItem('role')==="ROLE_MANAGER"){
      window.location.replace("/manager")
    }
  },[])

  return (
    <div className="containers">
      
     <div className='element'>
        <h1>Welcome to Tariff Manager</h1>
        <h3>New User?</h3>
        <Link className="btn btn-primary btn-lg" to="/public/register">SignUp</Link>
        <h3>Already a User?</h3>
        <Link className="btn btn-success btn-lg" to="/public/Login">Login</Link>
        </div>
        </div>
        
  )
}

export default Home