import axios from 'axios';
import React, { useState, useEffect } from 'react';
import toast from 'react-hot-toast';
import { Audio } from 'react-loader-spinner';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap CSS is imported

function Mybooking() {
  const [bookings, setBookings] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [userId, setUserId] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    fetchSessionData();
    // eslint-disable-next-line
  }, []);

  const fetchSessionData = async () => {
    try {
      const response = await axios.post("http://localhost:8000/session");
      if (response.data) {
        await fetchBookings(response.data.sessionData.session._id);
        setUserId(response.data.sessionData.session._id)
      }
    } catch (error) {
      console.log("SESSION ERROR IN BOOKING PAGE: ", error);
      toast.error("Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  const fetchBookings = async (userId) => {
    try {
      const response = await axios.post("http://localhost:8000/showUserBookings", { userId });
      if (response.status === 200) {
        setBookings(response.data.bookingData);
      }
    } catch (error) {
      console.log("error:", error.status);
      // toast.error("No any booking available!");
    }
  };

  const isVenueExist = async (id) => {
    try {
      setLoading(true);
      const response = await axios.post("http://localhost:8000/fetchSingleVenueData", { id });
      if (response.data.venueData) {
        return true;
      } else {
        toast.error("Venue does not exist currently!");
        return false;
      }
    } catch (error) {
      console.log(error);
      toast.error("Venue is not available now!");
      return false;
    } finally {
      setLoading(false);
    }
  };
  const handleCancelBooking = async (bookingId) => {
    try {
      const response = await axios.post(`http://localhost:8000/deleteBooking`, { bId: bookingId });
      if (response.status === 200) {
        toast.success(response.data.message);
        fetchBookings(userId);
        window.location.reload(false)
      }
    } catch (error) {
      toast.error(error.message);
    }
    finally {
      setLoading(false)
    }
  }

  const handleVenueNavigation = async (venueId) => {
    const venueExists = await isVenueExist(venueId);
    if (venueExists) {
      navigate(`/VenueCard/${venueId}`);
    }
  };



  if (isLoading) {
    return (
      <div className='h-100 w-100 d-flex align-items-center justify-content-center'>
        <Audio height="40" width="40" radius="9" color="#f89646" ariaLabel="loading" wrapperStyle wrapperClass />
      </div>
    );
  }

  return (
    <section className='furniture_section long_section bg-body-tertiary'>
      <div className="container">
        <div className='py-3'>
          <h2 className="fw-bold fs-2">MY BOOKINGS</h2>
          <hr className="my-4" />
        </div>

        <div className="row">
          {bookings.length > 0 ? (
            bookings.map((booking, index) => {
              const bookingDate = new Date(booking.date);
              const currentDate = new Date();
              const isFutureBooking = bookingDate > currentDate;

              return (
                <div className="col-lg-4 col-md-6 col-sm-12 mb-4" key={index}>
                  <div className="card h-100 card-shadow">
                    <img src="images/OIP.jpg" className="card-img-top" alt="img not found" />
                    <div className="card-body">
                      {isFutureBooking ? (
                        <span className={booking.status ? "badge bg-success" : "badge bg-warning"}>{booking.status ? "ACCEPTED" : "PENDING"}</span>
                      ) : (
                        <span className="badge bg-secondary">Expired</span>
                      )}
                      <h5 className="card-title my-2 text-capitalize" style={{ cursor: 'pointer' }} onClick={(e) => handleVenueNavigation(e, booking.venueId)}>
                        {booking.venueName}
                      </h5>
                      <p className="card-text"><i className="fa-solid fa-users" /> {booking.numberOfGuests} Guests</p>
                      <p className="card-text"><i className="fa-solid fa-calendar" /> {booking.date}</p>
                      <p className="card-text"><i className="fa-solid fa-clock" /> {booking.eventSession}</p>
                      <p className="card-text"><i className="fa-solid fa-utensils" /> {booking.foodType}</p>
                      {isFutureBooking ? (<button className="rounded-1 button-explore mt-2" onClick={()=>handleCancelBooking(booking._id)}>Cancel booking</button>) : (<></>)}
                    </div>
                  </div>
                </div>
              );
            })) : (
              <div className=' my-5 d-flex align-items-center justify-content-center'>No any booked venue</div>
          )}
        </div>
      </div>
    </section>
  );
}

export default Mybooking;
