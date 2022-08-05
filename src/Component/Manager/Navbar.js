import React from 'react'
import {Link} from 'react-router-dom'
function Navbar() {
  // async function
  return (
    <nav className="navbar navbar-expand-lg bg-light">
    <div className="container-fluid">
      <Link className="navbar-brand" to='/'>Tariff Manager</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className='collapse navbar-collapse'>
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/Profile">Profile</Link>
          </li>
      </ul>
      </div>
      <div className="d-flex justify-content-end" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link" to="/Logout">Logout</Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  )
}

export default Navbar
