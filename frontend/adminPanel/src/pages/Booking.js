import React from 'react'
// import { Link } from 'react-router-dom'

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
              <th>Actions</th>
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
                
              </tr>
            </thead>
            <tbody className="table-border-bottom-0">
              
              <tr>
                <td>
                  <button type="button" className="btn btn-icon btn-outline-danger mx-1">
                    <i className="bx bx-trash-alt" />
                  </button>
                </td>
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

              </tr>
              <tr>
                <td>
                  <button type="button" className="btn btn-icon btn-outline-danger mx-1">
                    <i className="bx bx-trash-alt" />
                  </button>
                </td>
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

              </tr>
              <tr>
                <td>
                  <button type="button" className="btn btn-icon btn-outline-danger mx-1">
                    <i className="bx bx-trash-alt" />
                  </button>
                </td>
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
