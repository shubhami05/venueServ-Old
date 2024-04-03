import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { Link } from 'react-router-dom'

function Venues() {

  const [venues, setVenues] = useState([]);

  const fetchVenues = () => {
    try {
      axios.post('http://localhost:8000/myvenues').then((response) => {
        setVenues(response.data.venueData);
        console.log(response.data.venueData);
      })
    }
    catch (error) {
      console.log("error in fetching venues data: ", error)

    }
  }
  useEffect(() => {
    fetchVenues();
  }, []);

  const handleDeleteVenue = async (e, vId) => {
    e.preventDefault();
    console.log(vId);
    try {
      const response = await axios.post("http://localhost:8000/deleteVenue", { vId });
      console.log(response.data.message);
      // alert()
      fetchVenues();
    }
    catch (err) {
      console.log("Error in deleting venue", err)
    }
  }



  return (
    <div className="h-100">
      <div className="content-wrapper">
        {/* Content */}
        <div className="container-xxl flex-grow-1 container-p-y">
          <h4 className="fw-bold py-3 mb-4">Your Venues</h4>

          {/* Striped Rows */}
          <div className="card">
            <div className='d-flex justify-content-between align-items-center '>
              <h5 className="card-header">Manage Venues</h5>
              <Link to='/addnewvenue' className=' col-lg-2 col-md-2 col-sm-2 h-25'>
                <button className="btn btn-primary">
                  <i className='tf-icons bx bx-plus'></i> Add New Venue
                </button>
              </Link>
            </div>

            <div className="table-responsive text-nowrap">
              <table className="table table-striped">
                <thead>
                  <tr>

                    <th>Actions</th>
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
                  </tr>
                </thead>
                <tbody className="table-border-bottom-0">
                  {venues.map((venue) => {
                    return <tr key={venue._id}>
                      
                      <td>
                        
                            <span className="mouse-hover-pointer"><i className="bx bx-edit-alt me-1" /></span>
                            <span className="mouse-hover-pointer" onClick={(e) => { handleDeleteVenue(e, venue._id) }}><i className="bx bx-trash me-1" /> </span>
                        
                      </td>
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
                      <td>{venue.outsideFood}</td>
                      <td>{venue.foodFacility}</td>
                      <td>{venue.peopleCapacity}</td>
                      <td>{venue.carParking}</td>
                      <td>{venue.rooms}</td>
                      <td>{venue.halls}</td>
                     
                    </tr>
                  })}

                </tbody>
              </table>
            </div>
          </div>
        </div>
        {/* / Content */}

        {/* / Footer */}
        <div className="content-backdrop fade" />
      </div>
    </div>

  )
}

export default Venues
