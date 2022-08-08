import React from 'react'
import {Link} from 'react-router-dom'
function Footer() {
  return (
    <div>
      <section id="footerSec">
        <footer className="footer fixed-bottom text-center bg-light">
          <div className="text-center p-3">
            &copy; 2022 Copyright <Link className='link-dark' to="/"> Tariff Manager</Link>
          </div>
        </footer>
      </section>
    </div>
  );
}

export default Footer
