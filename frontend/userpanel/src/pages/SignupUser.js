import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

function SignupUser() {
    const navigate = useNavigate();
    const [signupData, setSignupData] = useState({
        email: '',
        mobile: '',
        password: '',
        role: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setSignupData((prevData) => ({
            ...prevData,
            [name]: value,

        }))
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(signupData);
        try {
            const response = await axios.post("http://localhost:8000/signup", signupData);
            console.log(response);
            if (response.status === 200) {
                navigate("/Login");
            } else {
                console.log("Signup owner error!");
            }

        } catch (err) {
            console.log("Error in submitting signup : ", err);
        }
    }


    return (
        <section className="contact_section  long_section">
            <div className="container">
                <div className="row ">
                    <div className="col-md-6">
                        <div className="form_container">
                            <div className="heading_container text-uppercase">
                                <h2>
                                    signup & LIST YOUR VENUES!
                                </h2>
                                <h6 className='text-secondary'> as a venue-OWNER</h6>
                            </div>
                            <form onSubmit={handleSubmit} >

                                <div>
                                    <input type="email" placeholder="Email address" name='email' value={signupData.email} onChange={handleInputChange} required />
                                </div>
                                <div>
                                    <input type="number" placeholder="Mobile number" name='mobile' value={signupData.mobile} onChange={handleInputChange} required />
                                </div>
                                <div className='d-flex justify-content-end'>
                                    <input type="password" placeholder="Password" name='password' value={signupData.password} onChange={handleInputChange} required />
                                </div>
                                <div >
                                    <select className='dropdownMenu' name='role' value={signupData.role} onChange={handleInputChange} required>
                                        <option value="">Select your role</option>
                                        <option value="finder" >Venue Finder</option>
                                        <option value="owner">Venue Owner</option>
                                    </select>
                                </div>
                                <div className='text-dark d-flex flex-lg-row flex-wrap mb-2'>
                                    <div className=' text-dark'>Already have an account? &nbsp;
                                    </div>
                                    <div >

                                    <Link to="/Login"> Login now!</Link>
                                    </div>
                                </div>
                                <div className="btn_box">
                                    <button type='submit'>
                                        Signup
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="d-flex justify-content-center align-items-center col-md-6 my-5 object-fit-cover">
                        <img src="images/about-img.png" width="100%" alt='image' />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SignupUser
