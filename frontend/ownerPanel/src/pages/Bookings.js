import React from 'react'

function Bookings() {
  return (
    <div className='h-100'>
      {/*/ Navbar*/}
      {/*Content wrapper*/}
      <div className="content-wrapper">
        {/* Content */}
        <div className="container-xxl flex-grow-1 container-p-y">
          <h4 className="fw-bold py-3 mb-4">Bookings</h4>
          {/*Striped Rows*/}
          <div className="card">
            <h5 className="card-header">Manage Bookings</h5>
            <div className="table-responsive text-nowrap">
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th>Book-id</th>
                    <th>Full Name</th>
                    <th>Mobile NO.</th>
                    <th>Event Type</th>
                    <th>Date</th>
                    <th>Event Session</th>
                    <th>Food Type</th>
                    <th>No.of Guest</th>
                    <th>Status</th>
                    <th>Edit</th>
                  </tr>
                </thead>
                <tbody className="table-border-bottom-0">
                  <tr>
                    <td><strong>1</strong></td>
                    <td><strong>Mansi Kathiriya</strong></td>
                    <td>9978803551</td>
                    <td>Birthday</td>
                    <td>20/02/2024</td>
                    <td>Morning-Lunch</td>
                    <td>Only Veg</td>
                    <td>250</td>
                    <td><span className="badge bg-label-warning me-1">Pending</span></td>
                    <td>
                      <div className="dropdown">
                        <button type="button" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                          <i className="bx bx-dots-vertical-rounded" />
                        </button>
                        <div className="dropdown-menu">
                          <span className="dropdown-item mouse-hover-pointer"><i className="bx bx-check me-1" />Accept</span>
                          <span className="dropdown-item mouse-hover-pointer"><i className="bx bx-x me-1" />Reject</span>
                          
                        </div>
                      </div>
                    </td>
                  </tr>
                 
                </tbody>
                {/* <td><span class="badge bg-label-success me-1">Accepted</span></td>
                  <td>
                    <div class="dropdown">
                      <button type="button" class="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                        <i class="bx bx-dots-vertical-rounded"></i>
                      </button>
                      <div class="dropdown-menu">
                        <a class="dropdown-item" href="javascript:void(0);"
                          ><i class="bx bx-edit-alt me-1"></i>Edit</a
                        >
                        <a class="dropdown-item" href="javascript:void(0);"
                          ><i class="bx bx-trash me-1"></i> Delete</a
                        >
                      </div>
                    </div> */}
              </table>
            </div>
          </div>
        </div>
      </div>
      {/* Content wrapper */}
    </div>

  )
}

export default Bookings
