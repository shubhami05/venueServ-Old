
import axios from 'axios';
import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';

function LoginUser() {

  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [loginData, setLogindata] = useState({
    email: '',
    password: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLogindata((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }



  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(loginData);

    try {
      setLoading(true);

      const response = await axios.post("http://localhost:8000/login", loginData);
      // console.log(response);
      if (response.status === 200) {
        toast.loading("Logging in, Please wait...");
        const userRole = response.data.userData.session.role;
        if (userRole === 'finder') {
          // Navigate to finder app dashboard
          const timeoutId = setTimeout(() => {
            navigate('/');
            window.location.reload(false);
          }, 2000);
          timeoutId();

          return () => clearTimeout(timeoutId);
          // Clear the timeout on component unmount
        } else if (userRole === 'owner') {
          // Navigate to owner app dashboard
          window.location.href = "http://localhost:4000/";
        } else if (userRole === 'admin') {
          // Navigate to admin app dashboard
          window.location.href = "http://localhost:5000/";
        }

      } else if (response.status === 244) {
        toast.error("Invalid email or password");
      }
      else {
        toast.error("Something went wrong!!");
      }

      // window.location.reload(false);
    } catch (err) {
      console.log("Error in submitting login form : ", err)
    }
    finally {

      setLoading(false);
    }
  }


  return (
    <section className="contact_section  long_section">

      <div className="container">
        <div className="row ">
          <div className="d-flex justify-content-center align-items-center col-md-6 my-5 object-fit-cover">
            <img src="images/about-img.png" width="100%" alt='about' style={{ transform: ' scaleX(-1)' }} />
          </div>
          <div className="col-md-6">
            <div className="form_container">
              <div className="heading_container text-uppercase">
                <h2>
                  Login Now!
                </h2>
              </div>
              <form onSubmit={handleSubmit}>

                <div>
                  <input type="text" name='email' placeholder="Email address or Mobile number" onChange={handleInputChange} value={loginData.email} required />
                </div>
                <div className='d-flex justify-content-end'>
                  <input type="password" name='password' placeholder="Password" onChange={handleInputChange} value={loginData.password} required />
                </div>
                <div className='text-dark d-flex flex-lg-row flex-wrap mb-2'>
                  <div >
                    Don't have an account? &nbsp;
                  </div>
                  <div >

                    <Link to="/SignupUser" >Signup now!</Link>
                  </div>
                </div>
                <div className="btn_box">
                  {
                    loading ? (
                      <button type='submit' disabled='true'>
                        Login
                      </button>
                    ) : (
                      <button type='submit' >
                        Login
                      </button>
                    )
                  }
                </div>
              </form>
            </div>
          </div>
        </div>
      </div >
    </section >
  )
}

export default LoginUser
