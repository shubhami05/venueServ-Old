import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Ownersdata() {

  const [userdata,setUserdata] = useState([]);

  useEffect(()=>{
    axios.post("http://localhost:8000/showUsers")
    .then((resp)=>{
      setUserdata(resp.data.OwnersData);
    })
  },[])
  

  return (
    <div className="content-wrapper">

      {/* Content */}
      <div className="container-xxl flex-grow-1 container-p-y">

        <h4 className="fw-bold py-3 mb-4">Manage Venue Owners Data</h4>
        {/* Striped Rows */}
        <div className="card">
          <h5 className="card-header">Logined Venue Owners</h5>
          <div className="table-responsive text-nowrap">
            <table className="table table-striped">
              <thead>
                <tr>
                  {/* <th>Full Name</th> */}
                  <th>Email</th>
                  <th>Mobile No</th>
                  <th>Password</th>
                  {/* <th>Venues</th> */}
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody className="table-border-bottom-0">
                {
                  userdata.map((user)=>{
                    return <tr key={user._id}>
                    {/* <td><strong>John Abraham</strong></td> */}
                    <td>{user.email}</td>
                    <td>{user.mobile}</td>
                    <td><span className="me-1">{user.password}</span></td>
                    {/* <td><span className>5</span></td> */}
                    <td>
                      <div className="dropdown">
                        <button type="button" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                          <i className="bx bx-dots-vertical-rounded" />
                        </button>
                        <div className="dropdown-menu">
                          <Link className="dropdown-item" ><i className="bx bx-edit-alt me-1" />Edit</Link>
                          <Link className="dropdown-item" ><i className="bx bx-trash me-1" /> Delete</Link>
                        </div>
                      </div>
                    </td>
                  </tr>
                  })
                }

          
               
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {/* / Content */}
    </div>

  )
}

export default Ownersdata
