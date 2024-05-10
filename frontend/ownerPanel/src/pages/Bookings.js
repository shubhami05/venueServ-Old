import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { toast } from 'react-hot-toast';

function Bookings() {

  const [bookings, setBookings] = useState([]);
  const [ownerId, setOwnerId] = useState();
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
        setOwnerId(response.data.sessionData.session._id);
        fetchBookings(response.data.sessionData.session._id);
        console.log("Owner:", ownerId);
      }
    }
    catch (error) {
      console.log("SESSION ERROR IN BOOKING PAGE: ", error);
    }
  };

  const fetchBookings = async (ownerId) => {
    try {
      const response = await axios.post("http://localhost:8000/showBookings", { ownerId });
      if (response.status === 200) {
        setBookings(response.data.bookingData);
        console.log(bookings);
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

  const handleBookingStatus = async (e, bId) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8000/updateBookingStatus", { bId });
      toast.success(response.data.message);
      fetchBookings(ownerId);
    } catch (error) {
      toast.error("Something Went Wrong!");
      console.log("Updating status error : ", error);
    }
  }

  const handleDeleteBooking = async (e, bId) => {
    e.preventDefault();
    try {
      const response = await axios.post(`http://localhost:8000/deleteBooking`, { bId });
      toast.success(response.data.message);
      fetchBookings(ownerId);
    }
    catch (err) {
      toast.error("Something went wrong!");
      console.log("Error in deleting venue", err)
    }
  }

  return (
    <div className='h-100'>
      {/*/ Navbar*/}
      {/*Content wrapper*/}
      <div className="content-wrapper">
        {/* Content */}
        <div className="container-xxl flex-grow-1 container-p-y">
          <h4 className="fw-bold py-3 mb-4">Bookings</h4>
          {isLoading ? (
            <div className='h-75 d-flex justify-content-center align-items-center'>
              <div class="spinner-grow text-primary" role="status">
                <span class="visually-hidden">Loading...</span>
              </div>
            </div>
          ) : (
            <div className="card">
              <h5 className="card-header">Manage Bookings</h5>
              <div className="table-responsive text-nowrap">
                <table className="table table-striped">
                  <thead>
                    <tr>
                      <th>Action</th>
                      <th>Book-id</th>
                      <th>Full Name</th>
                      <th>Mobile NO.</th>
                      <th>Event Type</th>
                      <th>Date</th>
                      <th>Event Session</th>
                      <th>Food Type</th>
                      <th>No.of Guest</th>
                      <th>Status</th>

                    </tr>
                  </thead>
                  <tbody className="table-border-bottom-0">
                    {bookings.map((booking) => (
                      <tr key={booking._id}>
                        <td>
                          <button type='button' className="btn btn-icon btn-outline-primary mx-1" onClick={(e) => { handleBookingStatus(e, booking._id) }}>
                            <i className="bx bx-check" />
                          </button>
                          <button type="button" className="btn btn-icon btn-outline-danger mx-1" onClick={(e) => { handleDeleteBooking(e, booking._id) }}>
                            <i className="bx bx-trash-alt"></i>
                          </button>
                        </td>
                        <td><strong>{booking._id}</strong></td>
                        <td><strong>{booking.userName}</strong></td>
                        <td>{booking.userContact}</td>
                        <td>{booking.eventType}</td>
                        <td>{booking.date}</td>
                        <td>{booking.eventSession}</td>
                        <td>{booking.foodType}</td>
                        <td>{booking.numberOfGuests}</td>
                        <td>
                          {
                            booking.status === true ? (
                              <span className="badge bg-label-success me-1"> ACCEPTED</span>
                            ) : (
                              <span className="badge bg-label-warning me-1"> PENDING</span>
                            )
                          }
                        </td>


                      </tr>

                    ))}
                  </tbody>

                </table>
              </div>
            </div>
          )}
        </div>
      </div>
      {/* Content wrapper */}
    </div >

  )
}

export default Bookings
