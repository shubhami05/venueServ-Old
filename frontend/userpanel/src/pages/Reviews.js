import React from 'react'
import { Link } from 'react-router-dom'

function Reviews() {
  return (
    <>
      <div className="container Booking-section ">
        <div className="row ">
          <div className="container-fluid col-lg-9 col-md-12 venue-details d-flex flex-column ">
            <Link to="/Venuecard" className="text-theme2 text-theme2-hover"><h3><i className="fa-solid fa-arrow-left"  ></i> Venue Name, City, State</h3></Link>
            <span className="venue-location">
              <i className="fa-solid fa-location-dot" /> Venue address is at ahemdabad
              newindia colony &nbsp;
              <Link to="/" className="text-decoration-none text-theme2 text-theme2-hover"><i className="fa-solid fa-map">
              </i>&nbsp;View on map</Link>
            </span>
            <span className="venue-review">
              <span className="rating">3.5 </span>
              <i className="fa-solid fa-star" />
              &nbsp;Rates &amp; reviewed by&nbsp;
              <span className="reviews">99 guests </span>

            </span>
          </div>
          <div className="col-lg-3 col-md-12 venue-contact d-flex flex-column">
            <div className="row mt-3 ">
              <div className="col col-lg-12 col-md-6 ">
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
        <div className="row mt-3">
          <div className="col-lg-9 col-md-12 venue-details-container d-flex flex-column">
            <div className="rating-section">
              <h5 className="text-body-secondary">Banquet Hall Rating &amp; Reviews of VGP Golden Beach Resort</h5>
              <span className=" text-body-secondary">Want to know previous event feedback of XYZ VENUE NAME , AREANAME,
                check all BANQUET HALL rating, reviews &amp; guest experience in XYZ VENUE NAME.</span>


              <h5 className="text-body-secondary my-3"> All Reviews (69)</h5>

              <div className="all-reviews-container">
                <ReviewCard name="Shubham italiya" time="4" rating="4" msg="this is review of shubham italiya and it is good and worthy venue for wedding. this is review of shubham italiya and it is good and worthy venue for wedding.this is review of shubham italiya and it is good and worthy venue for wedding." />
                <ReviewCard name="Shubham italiya" time="4" rating="4" msg="this is review of shubham italiya and it is good and worthy venue for wedding. this is review of shubham italiya and it is good and worthy venue for wedding.this is review of shubham italiya and it is good and worthy venue for wedding." />
                <ReviewCard name="Shubham italiya" time="4" rating="4" msg="this is review of shubham italiya and it is good and worthy venue for wedding. this is review of shubham italiya and it is good and worthy venue for wedding.this is review of shubham italiya and it is good and worthy venue for wedding." />
                <ReviewCard name="Shubham italiya" time="4" rating="4" msg="this is review of shubham italiya and it is good and worthy venue for wedding. this is review of shubham italiya and it is good and worthy venue for wedding.this is review of shubham italiya and it is good and worthy venue for wedding." />
                <ReviewCard name="Shubham italiya" time="4" rating="4" msg="this is review of shubham italiya and it is good and worthy venue for wedding. this is review of shubham italiya and it is good and worthy venue for wedding.this is review of shubham italiya and it is good and worthy venue for wedding." />

              </div>
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


function ReviewCard(props) {


  return (
    <div className="review-card card m-3">
      <div className="text-body-secondary card-header person-name">
        <i className="fa-solid fa-user" />
        &nbsp;{props.name}
      </div>
      <div className="card-body text-body-secondary">
        <span className="stars">
          
          
          
          <i className="text-theme2 fa-solid fa-star" />
          <i className="text-theme2 fa-solid fa-star" />
          <i className="text-theme2 fa-solid fa-star" />
          <i className="text-theme2 fa-solid fa-star" />

          <i className="text-theme2 fa-regular fa-star" />


        </span>
        {/* <span className="rating"> {props.rating} </span> */}
        <p className="review-body ">
          {props.msg}
        </p>
        <span className="text-muted">{props.time} days ago</span>
      </div>
    </div>
  )
}

export default Reviews
export { ReviewCard }