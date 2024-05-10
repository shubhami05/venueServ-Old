import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import toast from 'react-hot-toast';

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
           
            if (response.status === 200) {
                navigate("/Login");
                toast.success("User created successfully");
            } else if (response.status === 299) {
                toast.error("Email is already registered");
               
            } else if (response.status === 298) {
                toast.error("Mobile Number is already registered");
               
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
                                    signup Now!
                                </h2>
                            </div>
                            <form onSubmit={handleSubmit} >

                                <div>
                                    <span id='emailMsg' style={{ display: "none", transition: "0.5s ease", color: "red" }}>Email address is already registered!</span>
                                    <input type="email" id='emailBox' placeholder="Email address" name='email' value={signupData.email} onChange={handleInputChange} required />

                                </div>
                                <div>
                                    <span id='mobileMsg' style={{ display: "none", transition: "0.5s ease", color: "red" }}>Mobile number is already registered!</span>
                                    <input type="number" id='mobileBox' placeholder="Mobile number" name='mobile' value={signupData.mobile} onChange={handleInputChange} required />
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
                        <img src="images/about-img.png" width="100%" alt='not found' />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SignupUser
