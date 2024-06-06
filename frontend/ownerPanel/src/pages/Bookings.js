import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';

function Bookings() {
  const [bookings, setBookings] = useState([]);
  const [ownerId, setOwnerId] = useState();
  const [isLoading, setLoading] = useState(true);
  const [bookingToDelete, setBookingToDelete] = useState(null);
  const [bookingToUpdate, setBookingToUpdate] = useState(null);

  useEffect(() => {
    fetchSessionData();
     // eslint-disable-next-line
  }, []);

  const fetchSessionData = async () => {
    try {
      const response = await axios.post("http://localhost:8000/session");
      if (response.data) {
        setOwnerId(response.data.sessionData.session._id);
        fetchBookings(response.data.sessionData.session._id);
      }
    } catch (error) {
      console.log("SESSION ERROR IN BOOKING PAGE: ", error);
    }
  };

  const fetchBookings = async (ownerId) => {
    try {
      const response = await axios.post("http://localhost:8000/showBookings", { ownerId });
      if (response.status === 200) {
        setBookings(response.data.bookingData);
      }
    } catch (error) {
      console.log("No bookings available!");
    } finally {
      setLoading(false);
    }
  };

  const handleBookingStatus = async () => {
    try {
      const response = await axios.post("http://localhost:8000/updateBookingStatus", { bId: bookingToUpdate });
      toast.success(response.data.message);
      fetchBookings(ownerId);
    } catch (error) {
      toast.error("Something went wrong while updating status!");
    }
  };

  const handleDeleteBooking = async () => {
    try {
      const response = await axios.post(`http://localhost:8000/deleteBooking`, { bId: bookingToDelete });
      toast.success(response.data.message);
      fetchBookings(ownerId);
    } catch (error) {
      toast.error("Something went wrong while deleting booking!");
    }
  };

  return (
    <div className='h-100'>
      <div className="content-wrapper">
        <div className="container-xxl flex-grow-1 container-p-y">
          <h4 className="fw-bold py-3 mb-4">Bookings</h4>
          {isLoading ? (
            <div className='h-75 d-flex justify-content-center align-items-center'>
              <div className="spinner-grow text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
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
                    {bookings.length === 0 ? (
                      <tr>
                        <td className="text-center" colSpan={10}>No bookings available!</td>
                      </tr>
                    ) : (
                      bookings.map((booking) => (
                        <tr key={booking._id}>
                          <td>
                            <button
                              type='button'
                              className="btn btn-icon btn-outline-primary mx-1"
                              onClick={() => setBookingToUpdate(booking._id)}
                              data-bs-toggle="modal"
                              data-bs-target="#confirmUpdateModal"
                            >
                              <i className="bx bx-check" />
                            </button>
                            <button
                              type="button"
                              className="btn btn-icon btn-outline-danger mx-1"
                              onClick={() => setBookingToDelete(booking._id)}
                              data-bs-toggle="modal"
                              data-bs-target="#confirmDeleteModal"
                            >
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
                            {booking.status === true ? (
                              <span className="badge bg-label-success me-1">ACCEPTED</span>
                            ) : (
                              <span className="badge bg-label-warning me-1">PENDING</span>
                            )}
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Confirmation Modal for Booking Status Update */}
      <div className="modal fade" id="confirmUpdateModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Confirm Update</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <p>Are you sure you want to update the booking status?</p>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
              <button type="button" className="btn btn-primary" onClick={handleBookingStatus} data-bs-dismiss="modal">Update</button>
            </div>
          </div>
        </div>
      </div>

      {/* Confirmation Modal for Booking Deletion */}
      <div className="modal fade" id="confirmDeleteModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Confirm Deletion</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <p>Are you sure you want to delete the booking?</p>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
              <button type="button" className="btn btn-danger" onClick={handleDeleteBooking} data-bs-dismiss="modal">Delete</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Bookings;

