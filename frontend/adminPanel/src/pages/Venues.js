import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'


function Venues() {

  const [venues, setVenues] = useState([]);

  useEffect(() => {
    axios.post('http://localhost:8000/myvenues')
    .then((response) => {
      setVenues(response.data.venueData);
      console.log(response.data.venueData);
    })
  }, []);

  return (
    <div className="content-wrapper">
      <div className="container-xxl flex-grow-1 container-p-y">

        <h4 className="fw-bold py-3 mb-4">Venues</h4>
        {/* Striped Rows */}
        <div className="card">
          <h5 className="card-header">All Venues</h5>
          <div className="table-responsive text-nowrap">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>V-id</th>
                  <th>Venue Name</th>
                  <th>Owner Name</th>
                  <th>Contact no.</th>
                  <th>Venue Type</th>
                  <th>City</th>
                  <th>Price</th>
                  <th>Status</th>
                  <th>Outside Food</th>
                  <th>Food Type</th>
                  <th>Capacity</th>
                  <th>Car parking</th>
                  <th>Rooms</th>
                  <th>Halls</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody className="table-border-bottom-0">
                {venues.map((venue) => {
                  return <tr key={venue._id}>
                    <td><strong>{1}</strong></td>
                    <td> <strong>{venue.name}</strong></td>
                    <td>{venue.ownerName}</td>
                    <td>{venue.mobile}</td>
                    <td>
                      {venue.type}
                    </td>
                    <td>
                      {venue.city}
                    </td>
                    <td>
                      $ {venue.price}
                    </td>
                    <td><span className="badge bg-label-success me-1">Available</span></td>
                    <td className='text-center'>
                      {
                        (venue.outsideFood === 'yes' ? <i className='bx bx-check'></i> : <i className='bx bx-x'></i>)
                      }
                    </td>
                    <td  className='text-center'>{venue.foodFacility}</td>
                    <td  className='text-center'>{venue.peopleCapacity}</td>
                    <td  className='text-center'>
                      {
                        (venue.carParking === 'yes' ? <i className='bx bx-check'></i> : <i className='bx bx-x'></i>)
                      }
                    </td>
                    <td className='text-center'>{venue.rooms}</td>
                    <td className='text-center'>{venue.halls}</td>
                    <td className='text-center'>
                      <div className="dropdown">
                        <button type="button" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                          <i className="bx bx-dots-vertical-rounded" />
                        </button>
                        <div className="dropdown-menu">
                          <a className="dropdown-item" href="/"><i className="bx bx-edit-alt me-1" />Edit</a>
                          <a className="dropdown-item" href="/"><i className="bx bx-trash me-1" /> Delete</a>
                        </div>
                      </div>
                    </td>
                  </tr>
                })}

              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Venues
