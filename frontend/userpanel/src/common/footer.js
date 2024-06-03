import React from 'react'
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <>
      <section className="info_section long_section">
        <div className="container">
          <div className="contact_nav">
            <a href>
              <i className="fa fa-phone" aria-hidden="true" />
              <span>
                Call : +01 123455678990
              </span>
            </a>
            <a href>
              <img href="loading" src="images/VenueservIcon.png" alt="loading" aria-hidden="true" width="50px" />
              <span>
                Venueserv
              </span>
            </a>
            <a href>
              <i className="fa fa-envelope" aria-hidden="true" />
              <span>
                Email : demo@gmail.com
              </span>
            </a>
          </div>
          <div className="info_top ">
            <div className="d-flex justify-content-center">
              <div className="info_links text-center d-flex flex-column">
                <h4>
                  QUICK LINKS
                </h4>
                <div className="info_links_menu ">
                  <Link to="/">Home</Link>
                  <Link to="/Venues ">Venues</Link>
                  <Link to="/Mybooking">My Bookings</Link>
                  <Link to="/Contact">Contact</Link>
                </div>
              </div>
            </div>
            <div className="info_form">
              <div className="social_box d-flex justify-content-center">
                <a href>
                  <i className="fa-brands fa-facebook-f" aria-hidden="true" />
                </a>
                <a href>
                  <i className="fa-brands fa-twitter" aria-hidden="true" />
                </a>
                <a href>
                  <i className="fa-brands fa-linkedin-in" aria-hidden="true" />
                </a>
                <a href>
                  <i className="fa-brands fa-instagram" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}

export default Footer;