import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function LoginUser() {

  const navigate = useNavigate();
  const [loginData,setLogindata] = useState({
    email:'',
    password:''
  });

const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLogindata((prevData) => ({
        ...prevData,
        [name]: value,
    }))
}
const handleSubmit = async (e) =>{
    e.preventDefault();
    console.log(loginData);
    try {
      const response = await axios.post("http://localhost:8000/login",loginData);
        console.log(response);
        if (response.status === 200) {
            alert("LOGIN SUCCESSFULLY!");
            navigate("/HelloPage");

        } else {
            alert("user not found!!");
        }
        
    } catch (err) {
        console.log("Error in submitting login form : ",err)
    }
}

  return (
    <section className="contact_section  long_section">
      <div className="container">
        <div className="row ">
          <div className="d-flex justify-content-center align-items-center col-md-6 my-5 object-fit-cover">
            <img src="images/about-img.png" width="100%" />
          </div>
          <div className="col-md-6">
            <div className="form_container">
              <div className="heading_container text-uppercase">
                <h2>
                  Login Now!
                </h2>
              </div>
              <form action onSubmit={handleSubmit}>

                <div>
                  <input type="text" name='email' placeholder="Email address or Mobile number" onChange={handleInputChange} value={loginData.email} required />
                </div>
                <div className='d-flex justify-content-end'>
                  <input type="password" name='password' placeholder="Password" onChange={handleInputChange} value={loginData.password} required />
                </div>
                <p className=' text-dark d-flex'>Don't have an account? &nbsp;
                  <div className='d-flex flex-column'>
                    <Link to="/SignupUser">Signup now!</Link>
                  </div>
                </p>
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

export default LoginUser
