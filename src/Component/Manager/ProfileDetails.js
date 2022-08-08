import React,{useState,useEffect} from 'react'
import * as services from './Services/ManagerServices'
// import { ToastContainer,toast} from 'react-toastify'
function Profile() {
  const [users,setUsers]=useState([])
  useEffect(() => {
   getUser();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const getUser = async () => {
  const response =await services.getProfile();
    setUsers(response.data)
    console.log(response.data)
    console.log(users)
  }
  return (
    <div className="container text-center col-4">
      {users.map((element)=>{
        return (
          <div className="row">
            <div className="col-lg-12">
              <h1>User Profile</h1>
              <div className="card mb-4">
                <div className="card-body">
                  <div className="row">
                    <div className="col-sm-3"><p className="mb-0">User Name</p></div>
                    <div className="col-sm-9"><p className="text-muted mb-0">{element.username}</p></div>
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
                    <div className="col-sm-3">
                      <p className="mb-0">Designation</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">{element.role}</p>
                    </div>
                  </div>
                  <hr/>
                  <button className="align-item-start btn btn-warning" data-bs-toggle="modal" data-bs-target="#EditProfileModal">Edit Profile</button>
                </div>
              </div>
            </div>
          </div>
        )
      })}
    {/* Model  */}
		<div className="modal fade" id="EditProfileModal" tabIndex="-1" aria-labelledby="EditProfileModalLabel" aria-hidden="true">
			<div className="modal-dialog">
			<div className="modal-content">
				<div className="modal-header">
				<h5 className="modal-title" id="EditProfileModalLabel">Edit Profile</h5>
				<button type="button" src="Manager/EditProfile" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
				</div>
				<div className="modal-body">
					<form action="/Manager/UpdateProfile" method="post">
						<div className="mb-3">
							<input type="email" className="form-control" placeholder="email" name="email" value={users.email} disabled/>
            </div>
            <div className="mb-3">
							<input type="text" className="form-control" placeholder="Username" name="username" value={users.username} />
            </div>
            <div className="mb-3">
							<input type="text" className="form-control" placeholder="Mobile Number" name="mobileNumber" value={users.mobileNumber} />
            </div>
						  <div className="modal-footer">
						  <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
						  <button type="submit" className="btn btn-primary">Save changes</button>
						  </div>
						</form>
				</div>
			</div>
			</div>
		</div>
    </div>
  )
}
export default Profile
