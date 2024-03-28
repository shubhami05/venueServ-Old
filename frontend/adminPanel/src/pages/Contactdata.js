import React from 'react'

function Contactdata() {
  return (
    <div className="content-wrapper">

      <div className="container-xxl flex-grow-1 container-p-y">
        <h4 className="fw-bold py-3 mb-4">Contact Data</h4>
        {/* Striped Rows */}
        <div className="card">
          <h5 className="card-header">Feedback recieved from users</h5>
          <div className="table-responsive text-nowrap">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>Full Name</th>
                  <th>Mobile No</th>
                  <th>Email</th>
                  <th>Recieved at</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody className="table-border-bottom-0">
                <tr>
                  <td><strong>John Abraham</strong></td>
                  <td>9898989898</td>
                  <td>abc@gmail.com</td>
                  <td>13/12/24 15:12:00</td>
                  <td>
                    <div className="dropdown">
                      <button type="button" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                        <i className="bx bx-dots-vertical-rounded" />
                      </button>
                      <div className="dropdown-menu">
                        <a className="dropdown-item" href="/"><i className="bx bx-edit-alt me-1" />Read / Reply</a>
                        <a className="dropdown-item" href="/"><i className="bx bx-trash me-1" /> Delete</a>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td><strong>John Abraham</strong></td>
                  <td>9898989898</td>
                  <td>abc@gmail.com</td>
                  <td>13/12/24 15:12:00</td>
                  <td>
                    <div className="dropdown">
                      <button type="button" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                        <i className="bx bx-dots-vertical-rounded" />
                      </button>
                      <div className="dropdown-menu">
                        <a className="dropdown-item" href="/"><i className="bx bx-edit-alt me-1" />Read / Reply</a>
                        <a className="dropdown-item" href="/"><i className="bx bx-trash me-1" /> Delete</a>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td><strong>John Abraham</strong></td>
                  <td>9898989898</td>
                  <td>abc@gmail.com</td>
                  <td>13/12/24 15:12:00</td>
                  <td>
                    <div className="dropdown">
                      <button type="button" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                        <i className="bx bx-dots-vertical-rounded" />
                      </button>
                      <div className="dropdown-menu">
                        <a className="dropdown-item" href="/"><i className="bx bx-edit-alt me-1" />Read / Reply</a>
                        <a className="dropdown-item" href="/"><i className="bx bx-trash me-1" /> Delete</a>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td><strong>John Abraham</strong></td>
                  <td>9898989898</td>
                  <td>abc@gmail.com</td>
                  <td>13/12/24 15:12:00</td>
                  <td>
                    <div className="dropdown">
                      <button type="button" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                        <i className="bx bx-dots-vertical-rounded" />
                      </button>
                      <div className="dropdown-menu">
                        <a className="dropdown-item" href="/"><i className="bx bx-edit-alt me-1" />Read / Reply</a>
                        <a className="dropdown-item" href="/"><i className="bx bx-trash me-1" /> Delete</a>
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contactdata
