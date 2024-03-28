import React from 'react'

function Contact() {
  return (
    <>
      <section className="contact_section  long_section">
        <div className="container">
          <div className="row ">
            <div className="d-flex justify-content-center align-items-center col-md-6 my-5">
              <img src="images/Contact-photo.png" width="360px" height="360px" />
            
            </div>
            <div className="col-md-6">
              <div className="form_container">
                <div className="heading_container">
                  <h2>
                    Contact Us
                  </h2>
                </div>
                <form action>
                  <div>
                    <input type="text" placeholder="Your Name" required />
                  </div>
                  <div>
                    <input type="text" placeholder="Phone Number" required />
                  </div>
                  <div>
                    <input type="email" placeholder="Email" required />
                  </div>
                  <div>
                    <input type="text" className="message-box" placeholder="Message" required />
                  </div>
                  <div className="btn_box">
                    <button>
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