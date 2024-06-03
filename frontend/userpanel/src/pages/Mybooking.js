import axios from 'axios';
import React, { useState, useEffect } from 'react'
import toast from 'react-hot-toast';
import { Audio } from 'react-loader-spinner';
import { useNavigate } from 'react-router-dom';

function Mybooking() {

  const [bookings, setBookings] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const navigate = useNavigate()

  useEffect(() => {
    fetchSessionData();
    // eslint-disable-next-line
  }, [])

  const fetchSessionData = async () => {
    try {
      // const loggedInUser = sessionStorage.getItem('loggedInUser');
      const response = await axios.post("http://localhost:8000/session");
      console.log(response);
      if (response.data) {
        await fetchBookings(response.data.sessionData.session._id);
      }
    }
    catch (error) {
      console.log("SESSION ERROR IN BOOKING PAGE: ", error);
      toast.error("Something went wrong!");
    }
    finally{
      setLoading(false)
    }
  };
  const fetchBookings = async (userId) => {
    try {
      const response = await axios.post("http://localhost:8000/showUserBookings", { userId });
      if (response.status === 200) {
        setBookings(response.data.bookingData);
        console.log(response.data.bookingData);
      }
    } catch (error) {
      console.log("error:", error.status)
      toast.error("No any booking available!");
    }
  }

  const isVenueExist = async(id)=>{
     try {
      setLoading(true);  
      const response = await axios.post("http://localhost:8000/fetchSingleVenueData",{id});
      if(response.data.venueData){
        return true;
      }
      else{
        toast.error("Venue does not exist currently!");
        return false;
      }
    } 
    catch (error) {
      console.log(error);
      toast.error("Venue is not available now!");
      return false;
    }
    finally{
      setLoading(false)
    }
  }

  const handleVenueNavigation =async (e, venueId) => {
      e.preventDefault();
      const venueExists = await isVenueExist(venueId);
      if (venueExists) {
        navigate(`/VenueCard/${venueId}`);
      }
    };


  function SingleCard(props) {
    return (
      <div className="venue-card container-fluid row my-2" >
        <div className="col-lg-4 col-md-4 col-sm-12">
          <img src="images/OIP.jpg" className="w-100" alt="img not found" />
        </div>
        <div className="col-lg-8 col-md-8 col-sm-12 ">
          <div className="row">
            <div className="col-lg-7 col-md-7 col-sm-7 mt-2">
              <div className="d-flex flex-column">
                <p style={{cursor:'pointer'}} className="link-primary" onClick={(e) => handleVenueNavigation(e, props.venueId)}>
                <h4 className="fs-5 text-uppercase">{props.name}</h4>
                </p>
                {/* <span><i className="fa-solid fa-location-dot" /> {props.location}</span> */}
                {/* <span><i className="fa-solid fa-star"> </i> {props.rating} / 5 rated by {props.persons} Guests</span> */}
                <span><i className="fa-solid fa-users" /> {props.persons} Guests</span>
                <span><i className="fa-solid fa-calendar" /> {props.date} </span>
                <span><i className="fa-solid fa-clock" /> {props.eventSession} </span>
                <span><i className="fa-solid fa-utensils" /> {props.foodType} </span>

                {/* <span className="text-success mt-2">{props.inquiries} people enquired this venue</span> */}
              </div>
            </div>
            <div className="col-lg-5 col-md-5 col-sm-5">
              <div className="d-flex flex-column align-items-end mt-2">
                <div className="text-white w-50 d-flex justify-content-end">
                  <span className={props.confirmation === true ? "badge bg-success" : "badge bg-warning "}>{props.confirmation === true ? "ACCEPTED" : "PENDING"}</span>
                </div>
                <br />
                {/* <span className="text-muted text-small">Menu starts with</span>
                <h4>$ {props.price}</h4> */}
              </div>
              <div className='d-flex justify-content-end'>
                <button type="button" className="button-explore ">
                  Cancel booking
                </button>

              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }



  if (isLoading) {
    return <div className='h-100 w-100 d-flex align-items-center justify-content-center'>
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
  }

  return (
    <section className='furniture_section long_section bg-body-tertiary'>
      <div className="container">
        <div className='py-3'>
          <h2 className="fw-bold fs-2 fs-">MY BOOKINGS</h2>
        </div>
        <div>

          <div className="col-lg-12 col-md-12">
            {
              bookings.map((booking) => {
                return <SingleCard venueId={booking.venueId} name={booking.venueName} date={booking.date} eventSession={booking.eventSession} persons={booking.numberOfGuests} confirmation={booking.status} foodType={booking.foodType} />
              })
            }

          </div>
        </div>
      </div>

    </section>
  )
}


export default Mybooking