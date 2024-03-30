import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

function SignupOwner() {
    const navigate = useNavigate();
    const [signupData,setSignupData] = useState({
        email:'',
        mobile:'',
        password:'',
        role:''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setSignupData((prevData) => ({
            ...prevData,
            [name]: value,
        
        }))
    }
    const handleSubmit = async (e) =>{
        e.preventDefault();
        console.log(signupData);
        try {
            const response = await axios.post("http://localhost:8000/signup",signupData);
            console.log(response);
            if (response.status === 200) {
                navigate("/Login");
            } else {
                console.log("Signup owner error!");
            }
            
        } catch (err) {
            console.log("Error in submitting signup : ");
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
                            <form onSubmit={handleSubmit} action>

                                <div>
                                    <input type="email" placeholder="Email address" name='email' value={signupData.email} onChange={handleInputChange} required />
                                </div>
                                <div>
                                    <input type="number" placeholder="Mobile number" name='mobile' value={signupData.mobile} onChange={handleInputChange} required />
                                </div>
                                <div className='d-flex justify-content-end'>
                                    <input type="
                                    " placeholder="Password" name='password' value={signupData.password} onChange={handleInputChange} required />
                                </div>
                                <div className='d-flex justify-content-end'>
                                    <select  placeholder="Select your identity" name='role' value={signupData.role} onChange={handleInputChange}>
                                        <option value="finder">Venue Finder</option>
                                        <option value="owner">Venue Owner</option>
                                    </select>
                                </div>
                                <p className=' text-dark'>Already have an account?<Link to="/Login"> Login now!</Link></p>
                                <div className="btn_box">
                                    <button type='submit'>
                                        Signup
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="d-flex justify-content-center align-items-center col-md-6 my-5 object-fit-cover">
                        <img src="images/about-img.png" width="100%" alt='image'/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SignupOwner
