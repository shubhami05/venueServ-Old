import React from 'react'
import { Link } from 'react-router-dom'

function Booking() {
  return (
  // <div className="content-wrapper">
   

  <div className="container-xxl flex-grow-1 container-p-y">
    <h4 className="fw-bold py-3 mb-4">Bookings</h4>
 
    {/* Striped Rows */}
    <div className="card">
      <h5 className="card-header">Manage Bookings</h5>
      <div className="table-responsive text-nowrap">
        <table className="table table-striped">
          <thead>
            <tr>
              <th>U-id</th>
              <th>User's Name</th>
              <th>Contact NO.</th>
              <th>Venue Name</th>
              <th>Venue Type</th>
              <th>Venue Address</th>
              <th>Price</th>
              <th>Date</th>
              <th>Session</th>
              <th>No.of Guest</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody className="table-border-bottom-0">
            <tr>
              <td><strong>101</strong></td>
              <td><strong>Shubham Italiya</strong></td>
              <td>997884845</td>
              <td>Falanu thiknu</td>
              <td>Banquet hall</td>
              <td>Surat</td>
              <td>$500</td>
              <td>31/02/2024</td>
              <td>Morning-Lunch</td>
              <td>600</td>
              <td><span className="badge bg-label-success me-1">Accepted</span></td>
              <td>
                <div className="dropdown">
                  <button type="button" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                    <i className="bx bx-dots-vertical-rounded" />
                  </button>
                  <div className="dropdown-menu">
                    <a className="dropdown-item"><i className="bx bx-edit-alt me-1" />Edit</a>
                    <a className="dropdown-item"><i className="bx bx-trash me-1" /> Delete</a>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td><strong>101</strong></td>
              <td><strong>Shubham Italiya</strong></td>
              <td>997884845</td>
              <td>Falanu thiknu</td>
              <td>Banquet hall</td>
              <td>Surat</td>
              <td>$500</td>
              <td>31/02/2024</td>
              <td>Morning-Lunch</td>
              <td>600</td>
              <td><span className="badge bg-label-warning me-1">Pending</span></td>
              <td>
                <div className="dropdown">
                  <button type="button" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                    <i className="bx bx-dots-vertical-rounded" />
                  </button>
                  <div className="dropdown-menu">
                    <a className="dropdown-item" ><i className="bx bx-edit-alt me-1" />Edit</a>
                    <a className="dropdown-item" ><i className="bx bx-trash me-1" /> Delete</a>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
  // </div>
  )
}

export default Booking
