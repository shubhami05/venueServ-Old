import axios from 'axios';
import React, { useState } from 'react'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom';

function Contact() {
  const [isLoading, setLoading] = useState(false);
  const [contactData, setContactData] = useState({
    name: '',
    mobile: '',
    email: '',
    message: ''
  })
  const navigate = useNavigate()

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContactData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.post("http://localhost:8000/session");
      const response = await axios.post("http://localhost:8000/contactSend", contactData);
      if (response.data) {
        toast.success(response.data.message)
        navigate('/')
      }
    }
    catch (error) {
      if (error.response.status === 499) {
        toast.error("Please Login first");
        navigate('/Login')
      }
      else {
        toast.error("Something went wrong!");
      }
    }
    finally {
      setLoading(false);
    }
  }

  return (
    <>
      <section className="contact_section  long_section">
        <div className="container">
          <div className="row ">
            <div className="d-flex justify-content-center align-items-center col-md-6 my-5">
              <img src="images/Contact-photo.png" alt='contact icons' width="360px" height="360px" />

            </div>
            <div className="col-md-6">
              <div className="form_container">
                <div className="heading_container">
                  <h2>
                    Contact Us
                  </h2>
                </div>
                <form onSubmit={handleSubmit}>
                  <div>
                    <input type="text" name='name'
                      onChange={handleChange} placeholder="Your Name" required />
                  </div>
                  <div>
                    <input type="text" name='mobile' onChange={handleChange} placeholder="Phone Number" required />
                  </div>
                  <div>
                    <input type="email" name='email' onChange={handleChange} placeholder="Email" required />
                  </div>
                  <div>
                    <input type="text" name='message' onChange={handleChange} className="message-box" placeholder="Message" required />
                  </div>
                  <div className="btn_box">
                    <button type='submit' className={`btn2 rounded-1 fw-semibold ${isLoading ? ("disabled") : ("active")}`}>
                      SEND
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}

export default Contact