import React from 'react'
import { Link } from 'react-router-dom'

function LoginFinder() {



  return (
    <section className="contact_section  long_section">
    <div className="container">
      <div className="row ">
        <div className="d-flex justify-content-center align-items-center col-md-6 my-5 object-fit-cover">
          <img src="images/about-img.png" width="100%"/>
        </div>
        <div className="col-md-6">
          <div className="form_container">
            <div className="heading_container text-uppercase">
              <h2>
                Login & Book suitable venue!
              </h2>
              <h6 className='text-secondary'> as a venue-finder</h6>
            </div>
            <form action >
            
              <div>
                <input type="text" placeholder="Email address or Mobile number" required />
              </div>
              <div className='d-flex justify-content-end'>
                <input type="password" placeholder="Password" required />
              </div>
              <p className=' text-dark'>Don't have an account?<Link to="/SignupFinder"> Signup now!</Link></p>
              <div className="btn_box">
                <button type='submit'>
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default LoginFinder
