import React from 'react'
import { Link } from 'react-router-dom'
import Venue from './Venue'
import Contact from './Contact';
import HelloPage from './HelloPage';
import testimonialData from '../data/testimonialData';



function Home() {
  return (
    <>

      <div>
        <HeroSection />
        <Venue />
        <Testimonial />
        <Contact />
      </div>

    </>
  )
}

function HeroSection() {
  return (<>
    <HelloPage />
    <section className=" slider_section long_section">
      <div id="customCarousel" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="container ">
              <div className="row">
                <div className="col-md-5">
                  <div className="detail-box">
                    <h1>
                      FIND YOUR PERFECT <br />
                      Event VENUES
                    </h1>
                    <p>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus quidem maiores perspiciatis, illo
                      maxime voluptatem a itaque suscipit.
                    </p>
                    <div className="btn-box">
                      <Link to='/Contact' className="btn1 rounded-1 text-decoration-none">
                        Contact Us
                      </Link>
                      <Link to="/Venue" className="btn2 rounded-1 text-decoration-none">
                      Find Venues
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-md-7">
                  <div className="img-box">
                    <img src="images/slider-img.png" alt="Slider" />
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
        {/* <ol className="carousel-indicators">
        <li data-target="#customCarousel" data-slide-to={0} className="active" />
        <li data-target="#customCarousel" data-slide-to={1} />
        <li data-target="#customCarousel" data-slide-to={2} />
      </ol> */}
      </div>
    </section>
  </>

  );
}

function Testimonial() {

  return (
    <section className="client_section layout_padding-bottom">
      <div className="container">
        <div className="heading_container">
          <h2>Testimonials</h2>
        </div>
        <div id="carouselExample2Controls" className="carousel slide" data-ride="carousel">
          <div className="carousel-inner">
            {testimonialData.map((testimonial, index) => (
              <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}>
                <div className="row">
                  <div className="col-md-11 col-lg-10 mx-auto">
                    <div className="box">
                    <div className="img-box">
                        <img src={testimonial.image} onError={(e) => { e.target.src = '/images/client.jpg' }} alt='client' />
                      </div>
                      <div className="detail-box">
                        <div className="name">
                          <i className="fa fa-quote-left" aria-hidden="true" />
                          <h6>{testimonial.name}</h6>
                        </div>
                        <p>{testimonial.content}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="carousel-control-container d-flex gap-2 justify-content-center">
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample2Controls" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExample2Controls" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
    </section>

    
  );
}


export default Home