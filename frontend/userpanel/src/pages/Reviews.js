import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'
import toast from 'react-hot-toast';
import { Audio } from 'react-loader-spinner'



export default function Reviews() {
  const params = useParams()
  const [reviews, setReviews] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [currentVenue, setCurrentVenue] = useState({})
  const [reviewAvailable, setReviewAvailable] = useState(false)


  useEffect(() => {
    fetchVenueData(params.id)
    fetchAllReview(params.id)
  }, [params.id])
  const fetchVenueData = async (id) => {
    try {
      setIsLoading(true);
      const response = await axios.post("http://localhost:8000/fetchSingleVenueData", { id });
      if (response.status === 200) {
        console.log(response)
        setCurrentVenue(response.data.venueData);
      }
      else {
        toast.error("Venue is not founded!");
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
  const fetchAllReview = async (vId) => {
    try {
      setIsLoading(true);
      const response = await axios.post("http://localhost:8000/showReview", { vId });
      if (response.status === 200) {
        setReviews(response.data.reviewData);
        setReviewAvailable(true)
      }
      else {
        setReviews([])
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
  const calculateDateDifference = (pastDate) => {
    const today = new Date();
    const past = new Date(pastDate);

    // Calculate the difference in milliseconds
    const diffInMilliseconds = today - past;

    // Convert milliseconds to days
    const diffInDays = Math.floor(diffInMilliseconds / (1000 * 60 * 60 * 24));

    return diffInDays;
  };
  const calculateAverageRating = (reviews) => {
    if (reviews.length === 0) return 0;
  
    const totalRating = reviews.reduce((sum, review) => {
      const rating = Number(review.rating);
      return sum + (isNaN(rating) ? 0 : rating);
    }, 0);
  
    const averageRating = totalRating / reviews.length;
    return averageRating.toFixed(1); // to keep two decimal places
  };
  const averageRating = calculateAverageRating(reviews);
  


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
      <div className="container Booking-section ">
        <div className="row ">
          <div className="container-fluid col-lg-9 col-md-12 venue-details d-flex flex-column ">
            <Link to={`/Venuecard/${params.id}`} className="text-theme2 text-theme2-hover text-decoration-none"><h3><i className="fa-solid fa-arrow-left"  ></i> {currentVenue.name}, {currentVenue.city}</h3></Link>
            <span className="venue-location">
              <i className="fa-solid fa-location-dot" /> {currentVenue.address} &nbsp;
              <Link to="/" className="text-decoration-none text-theme2 text-theme2-hover"><i className="fa-solid fa-map">
              </i>&nbsp;View on map</Link>
            </span>
            <span className="venue-review">
              <span className="rating">{averageRating} </span>
              <i className="fa-solid fa-star" />
              &nbsp;average rating &amp; reviewed by&nbsp;
              <span className="reviews">{reviews.length} guests </span>

            </span>
          </div>
          <div className="col-lg-3 col-md-12 venue-contact d-flex flex-column">
            <div className="row mt-3 ">
              <div className="col col-lg-12 col-md-6 ">
                <span>Price Starts from</span>
                <h4>$ {currentVenue.price}</h4>
              </div>
              <div className="col col-lg-12 col-md-6 d-flex align-items-lg-start align-items-md-end flex-column">
                <span className="fs-6 ">Talk to Venue Manager</span>
                <h5><i className="fa-solid fa-phone" /> {currentVenue.mobile}
                </h5>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-9 col-md-12 venue-details-container d-flex flex-column">
            <div className="rating-section">
              <h5 className="text-body-secondary"> Rating &amp; Reviews of {currentVenue.name},{currentVenue.city}</h5>
              <span className="text-body-secondary">Want to know feedback of previous events of {currentVenue.name} , {currentVenue.city}.
                Check all the ratingS, reviews &amp; guest experience in {currentVenue.name}.</span>

              <h5 className="text-body-secondary my-3"> All Reviews ({reviews.length})</h5>

              <div className="all-reviews-container">
                {reviewAvailable ? reviews.map((review) => {
                  const daysDifference = calculateDateDifference(review.date);
                  return (
                    <div className="review-card card m-3">
                      <div className="text-body-secondary card-header person-name">
                        <i className="fa-solid fa-user" />
                        &nbsp;{review.email}
                      </div>
                      <div className="card-body text-body-secondary">
                        <span className="stars">
                          {renderStars(review.rating)}

                        </span>
                        {/* <span className="rating"> {props.rating} </span> */}
                        <p className="review-body text-dark-emphasis">
                          {review.review}
                        </p>
                        <span className="text-secondary">{daysDifference === 0 ? 'Today' : daysDifference === 1 ? daysDifference + ' day ago' : daysDifference + ' days ago'} </span>
                      </div>
                    </div>
                  );
                }) : (<div className='w-100 d-flex justify-content-center align-items-center'>No Reviews Available</div>)}
              </div>
            </div>
          </div>
          
        </div>
      </div>

    </>
  )
}
