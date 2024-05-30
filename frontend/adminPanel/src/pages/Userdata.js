import axios from 'axios';
import React, { useEffect, useState } from 'react'

function Userdata() {

  const [isLoading, setIsLoading] = useState(true);
  const [userdata, setUserdata] = useState([]);

  useEffect(() => {
    axios.post("http://localhost:8000/showUsers")
      .then((resp) => {
        setUserdata(resp.data.FindersData);
        setIsLoading(false);
      })
  }, [])


  return (
    <div className="content-wrapper">
      {/* Content */}
      <div className="container-xxl flex-grow-1 container-p-y">


        <h4 className="fw-bold py-3 mb-4">Manage Users Data</h4>
        {/* Striped Rows */}
        {isLoading ? (
          <div className='h-75 d-flex justify-content-center align-items-center'>
            <div className="spinner-grow text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        ) : (
          <div className="card">
            <h5 className="card-header">Logined Users</h5>
            <div className="table-responsive text-nowrap">
              <table className="table table-striped">
                <thead>
                  <tr>
                    {/* <th>Full Name</th> */}
                    <th>Email</th>
                    <th>Mobile No</th>
                    <th>Password</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody className="table-border-bottom-0">
                  {
                    userdata.map((user) => {
                      return <tr key={user._id}>
                        {/* <td><strong>John Abraham</strong></td> */}
                        <td>{user.email}</td>
                        <td>{user.mobile}</td>
                        <td><span className="me-1">{user.password}</span></td>
                        {/* <td><span className>5</span></td> */}
                        <td>
                          <button type="button" className="btn btn-icon btn-outline-danger mx-1" >
                            <i className="bx bx-trash-alt" />
                          </button>
                        </td>
                      </tr>
                    })
                  }



                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
      {/* / Content */}</div>

  )
}

export default Userdata
