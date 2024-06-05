import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import axios from 'axios';
import toast from 'react-hot-toast';
import { Audio } from 'react-loader-spinner'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { Rating } from 'react-simple-star-rating'



export default function Venuecard() {
  const navigate = useNavigate();
  const [isAuth, setAuth] = useState(false);
  const [isLoading, setIsLoading] = useState(false)
  const [minDate, setMinDate] = useState('');
  const [currentVenue, setCurrentVenue] = useState({})
  const params = useParams()
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [rating, setRating] = useState(0)
  const [errors, setErrors] = useState({});
  const [latestReview, setLatestReview] = useState({})
  const [reviewAvailable,setReviewAvailable] = useState(false)



  const [booking, setBooking] = useState({
    ownerId: null,
    venueId: null,
    venueName: '',
    eventType: '',
    date: '',
    eventSession: '',
    foodType: '',
    numberOfGuests: '',
    fullname: '',
    contact: ''
  })
  const [review, setReview] = useState({
    userId: null,
    venueId: null,
    rating: '',
    review: '',
    date: new Date()
  })

  useEffect(() => {
    setReview((prevData) => ({
      ...prevData,
      rating: rating
    }))
  }, [rating])

  useEffect(() => {
    fetchSessionData();
    setLatestDate();
    fetchVenueData(params.id);
    fetchLatestReview(params.id);
    //eslint-disable-next-line
  }, []);
  const fetchVenueData = async (id) => {
    try {
      setIsLoading(true);
      const response = await axios.post("http://localhost:8000/fetchSingleVenueData", { id });
      if (response.status === 200) {
        console.log(response)
        setCurrentVenue(response.data.venueData);
        setBooking((prevBooking) => ({
          ...prevBooking,
          ownerId: response.data.venueData.userId,
          venueId: response.data.venueData._id,
          venueName: response.data.venueData.name
        }));
        setReview((prevData) => ({
          ...prevData,
          venueId: response.data.venueData._id
        }))
      }
      else {
        toast.error("Venue is not founded!");
        navigate('/bookings');
      }
    }
    catch (error) {
      toast.error("Something went wrong");
      console.log("Error in venue card page", error);
    }
    finally {
      setIsLoading(false);
    }
  }
  const fetchSessionData = async () => {
    try {
      setIsLoading(true)
      // const loggedInUser = sessionStorage.getItem('loggedInUser');
      const response = await axios.post("http://localhost:8000/session");
      console.log(response);
      setAuth(response.data.sessionData.isAuth)
      setReview((prevData) => ({
        ...prevData,
        userId: response.data.sessionData.session._id
      }))
    }
    catch (error) {
      console.log("SESSION ERROR IN ADD VENUE PAGE: ", error);
    }
    finally {
      setIsLoading(false);
    }
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setBooking((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setIsLoading(true)
      if (isAuth) {
        const response = await axios.post("http://localhost:8000/bookingSend", booking);
        if (response.status === 200) {
          toast.success("Venue owner will contact you shortly!");
          navigate("/Mybooking");
        }
        else {
          toast.success(response.data.error)
        }
      }
      else {
        toast.error("Please Login first!");
        navigate('/Login');
      }
    }
    catch (err) {
      toast.error("Something Went Wrong!");
      console.log("Venue card error: ", err)
    }
    finally {
      setIsLoading(false);
    }
  };
  const setLatestDate = async () => {
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const dd = String(today.getDate()).padStart(2, '0');
    setMinDate(`${yyyy}-${mm}-${dd}`);

    // const today = new Date().toISOString().split('T')[0];
    // document.getElementById("date-picker").setAttribute("min",today);
  };
  // Catch Rating value
  const handleRating = (rate) => {
    setRating(rate);
    setErrors({ ...errors, rating: '' });
  };
  const handleChangeInReview = (e) => {
    const { name, value } = e.target;
    setReview((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setErrors({ ...errors, [name]: '' });
  };
  const handleSubmitInReview = async (e) => {
    e.preventDefault();

    let validationErrors = {};
    if (!rating) {
      validationErrors.rating = 'Rating is required';
    }
    if (!review.review) {
      validationErrors.review = 'Review is required';
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    try {
      setIsLoading(true)
      if (isAuth) {
        console.log(review)
        const response = await axios.post("http://localhost:8000/reviewSend", review);
        if (response.status === 200) {
          toast.success("Review is submitted successfully!");
          handleClose();
          window.location.reload(false);
        }
        else {
          toast.error(response.data.error)
        }
      }
      else {
        toast.error("Please Login first!");
        handleClose();
        navigate('/Login');
      }
    }
    catch (err) {
      toast.error("Something Went Wrong!");
      console.log("Review card error: ", err)
    }
    finally {
      setIsLoading(false);
    }
  }
  const fetchLatestReview = async (vId) => {
    try {
      setIsLoading(true);
      const response = await axios.post("http://localhost:8000/showReview", { vId });
      if (response.status === 200) {
        setLatestReview(response.data.reviewData[0]);
        setReviewAvailable(true)
      }
      else {
        setLatestReview({})
        setReviewAvailable(false)
      }
    }
    catch (error) {

      console.log("Error in venue card page", error);
    }
    finally {
      setIsLoading(false);
    }
  }
  const calculateDateDifference = (pastDate) => {
    const today = new Date();
    const past = new Date(pastDate);

    // Calculate the difference in milliseconds
    const diffInMilliseconds = today - past;

    // Convert milliseconds to days
    const diffInDays = Math.floor(diffInMilliseconds / (1000 * 60 * 60 * 24));

    return diffInDays;
  };
  const renderStars = (validRating) => {
    const totalStars = 5;

    const filledStars = Array.from({ length: validRating }, (_, index) => (
      <i key={index} className="text-theme2 fa-solid fa-star" />
    ));
    const emptyStars = Array.from({ length: totalStars - validRating }, (_, index) => (
      <i key={index + validRating} className="text-theme2 fa-regular fa-star" />
    ));


    return (
      <span className="stars">
        {filledStars.concat(emptyStars)}
      </span>
    );
  };
  const daysDifference = calculateDateDifference(latestReview.date);



  if (isLoading) {
    return (
      <div className='h-100 w-100 d-flex align-items-center justify-content-center'>
        <Audio
          height="40"
          width="40"
          radius="9"
          color="#f89646"
          ariaLabel="loading"
          wrapperStyle
          wrapperClass
        />
      </div>
    )
  }
  return (
    <>
      <div className='container'>
        <div className="row">
          <div className="col-lg-9 col-md-12 venue-details d-flex flex-column ">
            <h3 className="text-uppercase text-secondary-emphasis my-4">{currentVenue.name}, {currentVenue.city}</h3>
            <span className="venue-location fs-6">
              <i className="fa-solid fa-location-dot" /> {currentVenue.address}
              {/* <a href="/" className="text-decoration-none text-theme2 text-theme2-hover">&nbsp;<i className="fa-solid fa-map"> </i> View on map</a> */}
            </span>
            <span className="venue-review">
              <span className="rating">3.5 </span>
              <i className="fa-solid fa-star" /> Rates & reviewed by
              <span className="reviews"> 99 guests,</span>
              <Link to={`/Reviews/${currentVenue._id}`} className="text-decoration-none text-theme2 text-theme2-hover">&nbsp;<i className="fa-solid fa-comments " />&nbsp;
                See all reviews
              </Link>
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
                <h5><i className="fa-solid fa-phone" /> {currentVenue.mobile}
                </h5>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-lg-9 col-md-12  d-flex flex-column">
            <div className="venue-image">
              <div id="carouselExample" className="carousel slide">
                <div className="carousel-inner object-fit-contain" style={{ aspectRatio: '16/9' }}>
                  <Carousel autoPlay stopOnHover verticalSwipe infiniteLoop>
                    {currentVenue.photos ? (
                      currentVenue.photos.map((photo, index) => (
                        <div key={index}>
                          <img src={require(`../images/venuePics/${photo}`)} alt='venue' key={index} />
                        </div>
                      ))
                    ) : (
                      <div key='0'>
                        <p>No images found</p>
                      </div>
                    )
                    }
                  </Carousel>
                </div>
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
                        <td><i className="fa-solid fa-car" /> Car parking :</td>
                        <td>
                          <> {`${currentVenue.carParking === 'yes' ? "Available" : "Not available"}`}</>
                        </td>
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
                          <>{`${currentVenue.outsideFood === 'yes' ? "Allowed" : "Not Allowed"}`}</>
                        </td>
                      </tr>
                      <tr>
                        <td><i className="fa-solid fa-bed" /> Rooms :</td>
                        <td> {currentVenue.rooms}</td>
                      </tr>
                      <tr>
                        <td><i className="fa-solid fa-users" /> Capacity :</td>
                        <td> {currentVenue.peopleCapacity} people</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="latest-review-container">
              <div className='row'>
                <div className='col-lg-9 col-md-12 d-flex gap-2'>
                  <h5>Latest Review:</h5>
                  <Link to={`/Reviews/${currentVenue._id}`} className="text-decoration-none text-theme2 text-theme2-hover"><i className="fa-solid fa-comments" />&nbsp;
                    See all reviews
                  </Link>
                </div>
                <div className='col-lg-3 col-md-12 d-flex justify-content-end pe-4'>
                  <button className='button-explore rounded-1 fw-semibold ' onClick={handleShow}>
                    Write a Review
                  </button>
                </div>

              </div>
              <div>

                <Modal
                  show={show}
                  onHide={handleClose}
                  backdrop="static"
                  keyboard={false}
                >
                  <Modal.Header closeButton>
                    <Modal.Title>Review for {currentVenue.name}</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <>
                      <Rating
                        onClick={handleRating}
                      /* Available Props */
                      />
                      {errors.rating && <p className="text-danger">{errors.rating}</p>}
                      <hr />


                      <FloatingLabel controlId="floatingTextarea2" label="Write your review">
                        <Form.Control
                          as="textarea"
                          name='review'
                          placeholder="Leave a review here"
                          style={{ height: '100px' }}
                          onChange={handleChangeInReview}
                        />
                        {errors.review && <p className="text-danger">{errors.review}</p>}
                      </FloatingLabel>

                    </>
                  </Modal.Body>
                  <Modal.Footer>
                    <button className='btn1 rounded-1 fw-semibold' onClick={handleClose}>
                      Close
                    </button>
                    <button className='btn2 rounded-1 fw-semibold' onClick={handleSubmitInReview} >Submit</button>
                  </Modal.Footer>
                </Modal>
              </div>
              {
                reviewAvailable ? (<div className="review-card card m-3">
                  <div className="text-body-secondary card-header person-name">
                    <i className="fa-solid fa-user" />
                    &nbsp;{latestReview.email}
                  </div>
                  <div className="card-body text-body-secondary">
                    <span className="stars">
                      {renderStars(latestReview.rating)}

                    </span>
                    {/* <span className="rating"> {props.rating} </span> */}
                    <p className="review-body ">
                      {latestReview.review}
                    </p>
                    <span className="text-muted">{daysDifference === 0 ? 'Today' : daysDifference === 1 ? daysDifference + ' day ago' : daysDifference + ' days ago'} </span>
                  </div>
                </div>) : (<div> No any Review</div>)
              }

            </div>
          </div>
          <div className="col-lg-3 col-md-12">
            <div className="form-container bg-body-tertiary">
              <form className="p-4" onSubmit={handleSubmit}>
                <p className="fs-4">Please fill in the details</p>
                <input className="form-control mt-3" type='text'
                  value={booking.eventType}
                  name='eventType'
                  onChange={handleChange}
                  placeholder="Enter event type"
                  required />


                <input className="form-control mt-3" id="date-picker" type="date"
                  name="date"
                  onChange={handleChange}
                  value={booking.date}
                  placeholder="Event Date"
                  min={minDate}
                  required />

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

                <button type="submit" className="fw-semibold text-uppercase mt-3 button-explore rounded-1 w-100">
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

              <div className='  d-flex flex-column align-items-left justify-content-center'>
                <h5>Why choose VenueServ?</h5>
                <span>&gt; 100% Verified Venues</span>
                <span>&gt; Online Booking</span>
                <span>&gt; Every sharpen Details </span>
                <span>&gt; People Ratings &amp; Reviews</span>
              </div>

            </div>
          </div>
        </div>
      </div>

    </>
  )
}


