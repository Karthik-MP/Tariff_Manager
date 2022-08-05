import React from 'react'
import {Link} from 'react-router-dom'
function Userhome() {
  return (
    <div>
        <nav class="navbar navbar-expand-lg  navbar-dark bg-primary">
	<div class="container-fluid">
		<Link class="navbar-brand" to="/userheader">Tariff Manager</Link>
		<button class="navbar-toggler" type="button" data-toggle="collapse"
			data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
			aria-expanded="false" aria-label="Toggle navigation">
			<span class="navbar-toggler-icon"></span>
		</button>
		<div class="collapse navbar-collapse" id="navbarSupportedContent">
			<ul class="navbar-nav">
				<li class="nav-item"><Link class="nav-link"
					to="/employee/addexpense">Add Expenses</Link></li>
					<li class="nav-item"><Link class="nav-link"
					to="/employee/profile">Profile</Link></li>
					<li class="nav-item"><Link class="nav-link"
					to="/bankdetails">Add BankAccount</Link></li>
				<li class="nav-item"><Link to="/" class="nav-link">Logout</Link>
				</li>
			</ul>
		</div>
	</div>
</nav>
    </div>
  )
}

export default Userhome