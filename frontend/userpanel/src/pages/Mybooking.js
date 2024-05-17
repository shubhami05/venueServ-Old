import axios from 'axios';
import React, { useState ,useEffect} from 'react'
import { toast } from 'react-toastify';

function Mybooking() {

  const [bookings, setBookings] = useState([]);
  const [isLoading, setLoading] = useState(true);

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
      console.log(error)
    }
    finally {
      setLoading(false);
    }
  }


  function SingleCard(props) {
    return (
      <div className="venue-card container-fluid row my-2">
        <div className="col-lg-4 col-md-4 col-sm-12">
          <img src="images/OIP.jpg" className="w-100" alt="img not found" />
        </div>
        <div className="col-lg-8 col-md-8 col-sm-12 ">
          <div className="row">
            <div className="col-lg-7 col-md-7 col-sm-7 mt-2">
              <div className="d-flex flex-column">
                <h4 className="fs-5 text-uppercase">{props.name}</h4>
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
                <br/>
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
    return <h2>Loading...</h2>
  }

  return (
    <section className='furniture_section layout_padding long_section bg-body-tertiary'>
      <div className="container">
        <div>
          <h4 className="fw-bold ">MY BOOKINGS</h4>
        </div>
        <div>
          
          <div className="col-lg-12 col-md-12">

            {
              bookings.map((booking) => {
                return <SingleCard name={booking.venueName} date={booking.date} eventSession={booking.eventSession} persons={booking.numberOfGuests} confirmation={booking.status} foodType={booking.foodType}/>
              })
            }

          </div>
        </div>
      </div>

    </section>
  )
}


export default Mybooking