import React,{useEffect} from 'react'
import { useState } from 'react'
import * as services from './EmployeeServices/EmployeeServices'
function UserProfile(props) {
	const [profile,setProfile]=useState([])
	  const getData=async()=>{
		const res=await services.getprofile();
		setProfile(res.data)
		console.log(res.data)
		console.log(profile)
	  }
	  useEffect(()=>{	
		getData();
	  },[])
  return(
		<div className="container text-center col-4" style={{backgroundColor:'lightblue'}}>
		  {profile.map((element)=>{
			return (
			  <div className="row">
				<div className="col-lg-12">
				  <h1>User Profile</h1>
				  <div className="card mb-4">
					<div className="card-body">
					  <div className="row">
						<div className="col-sm-3"><p className="mb-0">User Name</p></div>
						<div className="col-sm-9"><p className="text-muted mb-0">{element.name}</p></div>
					  </div>
					  <hr/>
					  <div className="row">
						<div className="col-sm-3">
						  <p className="mb-0">Email</p>
						</div>
						<div className="col-sm-9">
						  <p className="text-muted mb-0">{element.email}</p>
						</div>
					  </div>
					  <hr/>
					  <div className="row">
						<div className="col-sm-3">
						  <p className="mb-0">Mobile</p>
						</div>
						<div className="col-sm-9">
						  <p className="text-muted mb-0">{element.mobileNumber}</p>
						</div>
					  </div>
					  <hr/>
					  <div className="row">
						<div className="col-sm-4">
						  <p className="mb-0">Designation</p>
						</div>
						<div className="col-sm-7">
						  <p className="text-muted mb-0">{element.role}</p>
						</div>
					  </div>
					  <hr/>
					</div>
				  </div>
				</div>
			  </div>
			)
		  })}
				</div>
	  )
}
export default UserProfile