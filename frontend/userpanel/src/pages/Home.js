import React from 'react'
import { Link } from 'react-router-dom'
import Venue from './Venue'
import Contact from './Contact';
import HelloPage from './HelloPage';

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
                      <Link to='/Contact' className="btn1">
                        Contact Us
                      </Link>
                      <Link to="/Venue" className="btn2">
                        Venue
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
          <h2>
            Testimonial
          </h2>
        </div>
        <div id="carouselExample2Controls" className="carousel slide" data-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="row">
                <div className="col-md-11 col-lg-10 mx-auto">
                  <div className="box">
                    <div className="img-box">
                      <img src="images/client.jpg" alt=" not found" />
                    </div>
                    <div className="detail-box">
                      <div className="name">
                        <i className="fa fa-quote-left" aria-hidden="true" />
                        <h6>
                          Siaalya 1
                        </h6>
                      </div>
                      <p>
                        It is a long established fact that a reader will be
                        distracted by the readable cIt is a long established fact
                        that a reader will be distracted by the readable c
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="row">
                <div className="col-md-11 col-lg-10 mx-auto">
                  <div className="box">
                    <div className="img-box">
                      <img src="images/client.jpg" alt=" not found" />
                    </div>
                    <div className="detail-box">
                      <div className="name">
                        <i className="fa fa-quote-left" aria-hidden="true" />
                        <h6>
                          Siaalya 2
                        </h6>
                      </div>
                      <p>
                        It is a long established fact that a reader will be
                        distracted by the readable cIt is a long established fact
                        that a reader will be distracted by the readable c
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="row">
                <div className="col-md-11 col-lg-10 mx-auto">
                  <div className="box">
                    <div className="img-box">
                      <img src="images/client.jpg" alt=" not found" />
                    </div>
                    <div className="detail-box">
                      <div className="name">
                        <i className="fa fa-quote-left" aria-hidden="true" />
                        <h6>
                          Siaalya 3
                        </h6>
                      </div>
                      <p>
                        It is a long established fact that a reader will be
                        distracted by the readable cIt is a long established fact
                        that a reader will be distracted by the readable c
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel_btn-container">
            <button className="carousel-control-prev" data-slide="prev">
              <i className="fa fa-long-arrow-left" aria-hidden="true" />
              <span className="sr-only">Previous</span>
            </button>
            <button className="carousel-control-next" data-slide="next">
              <i className="fa fa-long-arrow-right" aria-hidden="true" />
              <span className="sr-only">Next</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}


export default Home