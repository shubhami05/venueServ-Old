import React, { useState, useEffect } from 'react'
import axios from 'axios'


function Booking() {
  const [bookings, setBookings] = useState([])
  const [isLoading, setIsLoading] = useState(false)


  useEffect(() => {
    fetchBookings()
  }, [])


  const fetchBookings = async () => {
    try {
      setIsLoading(true)
      const response = await axios.post("http://localhost:8000/showAdminBookings")
      if (response.status === 200) {
        setBookings(response.data.bookingData)
      }
    } catch (error) {
      console.log("Error in admin booking page", error)
    }
    finally {
      setIsLoading(false)
    }
  }


  return (
    // <div className="content-wrapper">


    <div className="container-xxl flex-grow-1 container-p-y">
      <h4 className="fw-bold py-3 mb-4">Bookings</h4>

      {
        isLoading ? (
          <div className='h-100 d-flex justify-content-center align-items-center'>
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
                    <th>Actions</th>
                    <th>User's Name</th>
                    <th>Contact NO.</th>
                    <th>Venue Name</th>
                    <th>Date</th>
                    <th>Event Type</th>
                    <th>Event Session</th>
                    <th>No.of Guest</th>
                    <th>Status</th>

                  </tr>
                </thead>
                <tbody className="table-border-bottom-0">
                  {bookings.length > 0 ? (bookings.map((booking) => (
                    <tr>
                      <td>
                        <button type="button" className="btn btn-icon btn-outline-danger mx-1">
                          <i className="bx bx-trash-alt" />
                        </button>
                      </td>
                      <td><strong>{booking.userName}</strong></td>
                      <td>{booking.userContact}</td>
                      <td>{booking.venueName}</td>
                      <td>{booking.date}</td>
                      <td>{booking.eventType}</td>
                      <td>{booking.eventSession}</td>
                      <td>{booking.numberOfGuests}</td>
                      <td>
                        {
                          booking.status ? (<span className="badge bg-label-success me-1">Accepted</span>) : (<span className="badge bg-label-warning me-1">Pending</span>)
                        }
                      </td>

                    </tr>
                  ))
                  ) : (
                    <td colSpan='9' className='text-secondary text-center  fw-semibold'>No Any Booking Data</td>
                  )}




                </tbody>
              </table>
            </div>
          </div>
        )
      }

    </div>
    // </div>
  )
}

export default Booking
