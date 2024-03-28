import React from 'react'
import { Link } from 'react-router-dom'
import { ReviewCard } from './Reviews'

function Venuecard() {
  return (
    <>
      <div className='container'>
       
        <div className="row container-fluid">
          <div className="container-fluid col-lg-9 col-md-12 venue-details d-flex flex-column ">
            <h3 className=" text-secondary-emphasis my-4">Venue Name, City, State</h3>
            <span className="venue-location">
              <i className="fa-solid fa-location-dot" /> Venue address is at ahemdabad
              newindia colony
              <a href="/" className="text-decoration-none text-theme2 text-theme2-hover"><i className="fa-solid fa-map"> </i>
                View on map</a>
            </span>
            <span className="venue-review">
              <span className="rating">3.5</span>
              <i className="fa-solid fa-star" />
              Rates &amp; reviewed by
              <span className="reviews">99 guests,</span>
              <Link to="/Reviews  " className="text-decoration-none text-theme2 text-theme2-hover"><i className="fa-solid fa-comments " /> See all
                reviews</Link>
            </span>
          </div>
          <div className="col-lg-3 col-md-12 container-fluid venue-contact d-flex flex-column">
            <div className="row mt-2 ">
              <div className="col col-lg-12 col-md-6 ">
                <div className="text-white w-50">
                  <span className="badge bg-success">Conform</span>
                </div>
                <span>Price Starts from</span>
                <h4>$ 500</h4>
              </div>
              <div className="col col-lg-12 col-md-6 d-flex align-items-lg-start align-items-md-end flex-column">
                <span className="fs-6 ">Talk to Venue Manager</span>
                <h5><i className="fa-solid fa-phone" /> +919877899878
                </h5>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-3 container-fluid">
          <div className="col-lg-9 col-md-12 venue-details-container d-flex flex-column">
            <div className="venue-image">
              <div id="carouselExample" className="carousel slide ">
                <div className="carousel-inner object-fit-contain" style={{ aspectRatio: '16/9' }}>
                  <div className="carousel-item active ">
                    <img className="w-100 d-block" src="https://images.unsplash.com/photo-1579625498716-f6b4502d8091?q=80&w=2533&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="VenueImage" />
                  </div>
                  <div className="carousel-item">
                    <img className="w-100 d-block" src="https://images.unsplash.com/photo-1558998708-ed5f8eaf1af1?q=80&w=2652&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="VenueImage" />
                  </div>
                  <div className="carousel-item">
                    <img className="w-100 d-block" src="https://plus.unsplash.com/premium_photo-1678916185496-99e3f8bf5819?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGJhbnF1ZXQlMjBoYWxsfGVufDB8fDB8fHww" alt="VenueImage" />
                  </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true" />
                  <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true" />
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
            <div className="venue-details my-3">
              <span className="fs-4 fw-semibold">Details:</span>
              <div className="details-table-container row">
                <div className="table-container col-lg-6 col-md-12 ">
                  <table className="table table-bordered ">
                    <thead>
                    </thead>
                    <tbody>
                      <tr>
                        <td><i className="fa-solid fa-utensils" /> Food Facility :</td>
                        <td> Veg &amp; Non-Veg Both</td>
                      </tr>
                      <tr>
                        <td><i className="fa-solid fa-utensils" /> Outside Food :</td>
                        <td><i className="fa-solid fa-xmark" /> Not allowed</td>
                      </tr>
                      <tr>
                        <td><i className="fa-solid fa-bed" /> Rooms :</td>
                        <td> 34</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="table-container col-lg-6 col-md-12">
                  <table className="table table-bordered">
                    <thead>
                    </thead>
                    <tbody>
                      <tr>
                        <td><i className="fa-solid fa-landmark" /> Total Halls :</td>
                        <td>3</td>
                      </tr>
                      <tr>
                        <td><i className="fa-solid fa-users" /> Capacity :</td>
                        <td> Upto 600 people</td>
                      </tr>
                      <tr>
                        <td><i className="fa-solid fa-car" /> Car parking :</td>
                        <td><i className="fa-solid fa-check" /> Available</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="latest-review-container">
              <h5>Latest Review:</h5>
              <ReviewCard name="Shubham italiya" time="1" rating="3" msg="Hello world!  "/>
            </div>
          </div>
          <div className="col-lg-3 col-md-12">
            <div className="form-container bg-body-tertiary">
              <form className="p-4">
                <p className="fs-4">Please fill in the details</p>
                <select className="form-select mt-3" aria-label="Default select example" required>
                  <option selected>Select Event Type</option>
                  <option value={1}>Birthday Party</option>
                  <option value={2}>Engagement</option>
                  <option value={3}>Wedding ceremony</option>
                </select>
                <input className="form-control mt-3 " type="date" name="date" placeholder="Event Date" required />
                <select className="form-select mt-3" aria-label="Default select example" required>
                  <option selected>Select Event Session</option>
                  <option value={1}>Morning - Lunch</option>
                  <option value={2}>Evening - Dinner</option>
                  <option value={3}>Full day</option>
                </select>
                <select className="form-select mt-3" aria-label="Default select example" required>
                  <option selected>Select Food Type </option>
                  <option value={1}>Only Veg</option>
                  <option value={2}>Only Non-veg</option>
                  <option value={3}>Both Veg &amp; Non-veg </option>
                </select>
                <input className="form-control mt-3 " type="text" name="guest" placeholder="No. of Guest" required />
                <input className="form-control mt-3 " type="text" name="name" placeholder="Your Full Name" required />
                <input className="form-control mt-3 " type="text" name="nobile" placeholder="Your Mobile No." required />
                <button type="submit" onclick="alert('VenueManager will review your application shortly! \nYou can check status in Booking section.')" className=" mt-3 btn bg-theme1 text-white w-100">
                  Check Availibility
                </button>
              </form>
            </div>
            <div className="venue-stats-container card border-theme2 my-3 bg-body-primary">
              <div className="card-body text-theme2 text-center">
                <h5>99 <i className="fa-solid fa-users" /></h5>
                <p className="card-text">People checked availability of this venue</p>
              </div>
            </div>
            <div className="choose-us d-flex flex-column p-4 bg-body-tertiary">
              <img className="mx-5" src="images/VenueservIcon.png" alt="VenueServ" />
              <h5>Why choose VenueServ?</h5>
              <span>&gt; 100% Verified Venues</span>
              <span>&gt; Online Booking</span>
              <span>&gt; Every sharpen Details </span>
              <span>&gt; People Ratings &amp; Reviews</span>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Venuecard