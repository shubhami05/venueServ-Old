import React, { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { ReviewCard } from './Reviews'
import axios from 'axios';
import toast from 'react-hot-toast';

function Venuecard() {
  const location = useLocation();
  const navigate = useNavigate();
  const [isAuth, setAuth] = useState(false);

  useEffect(() => {
    const fetchSessionData = async () => {
      try {
        // const loggedInUser = sessionStorage.getItem('loggedInUser');
        const response = await axios.post("http://localhost:8000/session");
        console.log(response);
        if (response.data) {
          setAuth(true);
        }
      }
      catch (error) {
        console.log("SESSION ERROR IN ADD VENUE PAGE: ", error);
      }
    };
    fetchSessionData();
    //eslint-disable-next-line
  }, []);

  useEffect(() => {
    setCurrentVenue(currentVenue);
  }, [])

  const [currentVenue, setCurrentVenue] = useState({
    id: location.state.venue._id,
    name: location.state.venue.name,
    address: location.state.venue.address,
    carParking: location.state.venue.carParking,
    city: location.state.venue.city,
    foodFacility: location.state.venue.foodFacility,
    halls: location.state.venue.halls,
    outsideFood: location.state.venue.outsideFood,
    peopleCapacity: location.state.venue.peopleCapacity,
    price: location.state.venue.price,
    rooms: location.state.venue.rooms,
    type: location.state.venue.type,
    photos: location.state.venue.photos,
    ownerId: location.state.venue.userId,
    ownerEmail: location.state.venue.email,
    ownerName: location.state.venue.ownerName,
    ownerContact: location.state.venue.mobile
  })


  const [booking, setBooking] = useState({
    ownerId: currentVenue.ownerId,
    venueId: currentVenue.id,
    venueName:currentVenue.name,
    eventType: '',
    date: '',
    eventSession: '',
    foodType: '',
    numberOfGuests: '',
    fullname: '',
    contact: ''
  })

  const handleChange = (e) => {

    const { name, value } = e.target;
    setBooking((prevData) => ({
      ...prevData,
      [name]: value,
    }))

  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

      if (isAuth) {
        const response = await axios.post("http://localhost:8000/bookingSend", booking);
        console.log(response);
        toast.success("Venue owner will contact you shortly!");
        navigate("/Mybooking");
      }
      else {
        toast.error("Please Login first!");
        navigate('/Login');
      }

    }
    catch (err) {
      toast.error("Something Went Wrong!");
      console.log("Venue card error: ",err)
    }
  }





  return (
    <>
      <div className='container'>

        <div className="row">
          <div className="col-lg-9 col-md-12 venue-details d-flex flex-column ">
            <h3 className="text-uppercase text-secondary-emphasis my-4">{currentVenue.name}, {currentVenue.city}</h3>
            <span className="venue-location fs-6">
              <i className="fa-solid fa-location-dot" /> {currentVenue.address}
              <a href="/" className="text-decoration-none text-theme2 text-theme2-hover">&nbsp;<i className="fa-solid fa-map"> </i> View on map</a>
            </span>
            <span className="venue-review">
              <span className="rating">3.5 </span>
              <i className="fa-solid fa-star" /> Rates & reviewed by
              <span className="reviews"> 99 guests,</span>
              <Link to="/Reviews  " className="text-decoration-none text-theme2 text-theme2-hover">&nbsp;<i className="fa-solid fa-comments " /> See all
                reviews</Link>
            </span>
          </div>
          <div className="col-lg-3 col-md-12 venue-contact d-flex flex-column">
            <div className="row mt-2 ">
              <div className=" col-lg-12 col-md-6 col-sm-6 col-xs-12 d-flex flex-column align-items-lg-start">

                <span>Price Starts from</span>
                <h4>$ {currentVenue.price}</h4>
              </div>
              <div className="col-lg-12 col-md-6 col-sm-6 col-xs-12 d-flex align-items-lg-start align-items-md-end align-items-sm-end  flex-column">
                <span className="fs-6">Talk to Venue Manager</span>
                <h5><i className="fa-solid fa-phone" /> {currentVenue.ownerContact}
                </h5>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-lg-9 col-md-12  d-flex flex-column">
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
                  <table className="table ">
                    <thead>
                    </thead>
                    <tbody>
                      <tr>
                        <td><i className="fa-solid fa-utensils" /> Food Facility :</td>
                        <td className='text-capitalize'> {(currentVenue.foodFacility === 'both') ? ("Veg & Non-veg") : (currentVenue.foodFacility)}</td>
                      </tr>
                      <tr>
                        <td><i className="fa-solid fa-landmark" /> Total Halls :</td>
                        <td>{currentVenue.halls}</td>
                      </tr>
                      <tr>
                        <td><i className="fa-solid fa-bed" /> Rooms :</td>
                        <td> {currentVenue.rooms}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="table-container col-lg-6 col-md-12">
                  <table className="table">
                    <thead>
                    </thead>
                    <tbody>
                      <tr>
                        <td><i className="fa-solid fa-utensils" /> Outside Food :</td>
                        <td>
                          {(currentVenue.outsideFood === "yes") ? (<><i className="fa-solid fa-check" /> Allowed</>) : (<><i className="fa-solid fa-xmark" /> Not Allowed</>)}
                        </td>
                      </tr>

                      <tr>
                        <td><i className="fa-solid fa-users" /> Capacity :</td>
                        <td> Upto {currentVenue.peopleCapacity} people</td>
                      </tr>
                      <tr>
                        <td><i className="fa-solid fa-car" /> Car parking :</td>
                        <td>{(currentVenue.carParking === "yes") ? (<><i className="fa-solid fa-check" /> Available</>) : (<><i className="fa-solid fa-xmark" /> Not Available</>)}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="latest-review-container">
              <h5>Latest Review:</h5>
              <ReviewCard name="Shubham italiya" time="1" rating="3" msg="Hello world!  " />
            </div>
          </div>
          <div className="col-lg-3 col-md-12">
            <div className="form-container bg-body-tertiary">
              <form className="p-4" onSubmit={handleSubmit}>
                <p className="fs-4">Please fill in the details</p>
                <select className="form-select mt-3" aria-label="Default select example"
                  value={booking.eventType}
                  name='eventType'
                  onChange={handleChange}
                  required>
                  <option value="" >Select Event Type</option>
                  <option value={'Birtday Party'}>Birthday Party</option>
                  <option value={'Engagement'}>Engagement</option>
                  <option value={'Wedding ceremony'}>Wedding ceremony</option>
                </select>

                <input className="form-control mt-3 " type="date"
                  name="date"
                  onChange={handleChange}
                  value={booking.date}
                  placeholder="Event Date" required />

                <select className="form-select mt-3" aria-label="Default select example"
                  name='eventSession'
                  onChange={handleChange}
                  value={booking.eventSession}
                  required>
                  <option value="">Select Event Session</option>
                  <option value={'Morning - Lunch'}>Morning - Lunch</option>
                  <option value={'Evening - Dinner'}>Evening - Dinner</option>
                  <option value={'Full day'}>Full day</option>
                </select>

                <select className="form-select mt-3"
                  name='foodType'
                  value={booking.foodType}
                  onChange={handleChange}
                  aria-label="Default select example" required>
                  <option value=''>Select Food Type </option>
                  <option value={'Only Veg'}>Only Veg</option>
                  <option value={'Only Non-veg'}>Only Non-veg</option>
                  <option value={'Both Veg & Non-veg'}>Both Veg &amp; Non-veg </option>
                </select>

                <input className="form-control mt-3 " type="number"
                  name="numberOfGuests"
                  onChange={handleChange}
                  value={booking.numberOfGuests}
                  placeholder="No. of Guest" required />


                <input className="form-control mt-3 " type="text"
                  name="fullname"
                  value={booking.fullname}
                  onChange={handleChange}
                  placeholder="Your Full Name" required />

                <input className="form-control mt-3 " type="text"
                  name="contact"
                  onChange={handleChange}
                  value={booking.contact}
                  placeholder="Your Mobile No." required />

                <button type="submit" className="fw-semibold text-uppercase mt-3 btn bg-theme1 text-white w-100">
                  Check availability
                </button>
              </form>
            </div>
            <div className="venue-stats-container card border-theme2 my-3 bg-body-primary">
              <div className="card-body text-theme2 text-center">
                <h5>99 <i className="fa-solid fa-users" /></h5>
                <p className="card-text">People checked availability of this venue</p>
              </div>
            </div>
            <div className="choose-us row p-3 bg-body-tertiary">

              <div className=' col-lg-12 col-sm-8 col-xs-7 d-flex flex-column align-items-left justify-content-center'>
                <h5>Why choose VenueServ?</h5>
                <span>&gt; 100% Verified Venues</span>
                <span>&gt; Online Booking</span>
                <span>&gt; Every sharpen Details </span>
                <span>&gt; People Ratings &amp; Reviews</span>
              </div>
              <img className="col-lg-12 col-sm-3 col-xs-4" src="images/VenueservIcon.png" alt="VenueServ" />
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Venuecard