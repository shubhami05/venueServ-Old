import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'


function Venues() {

  const [isLoading, setIsLoading] = useState(true);
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
    finally{
      setIsLoading(false);
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
    <div className="content-wrapper">
      <div className="container-xxl flex-grow-1 container-p-y">

        <h4 className="fw-bold py-3 mb-4">Venues</h4>
        {/* Striped Rows */}
        {isLoading ? (
          <div className='h-75 d-flex justify-content-center align-items-center'>
            <div className="spinner-grow text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          </div>
        ) : (
          <div className="card">
            <h5 className="card-header">All Venues</h5>

            <div className="table-responsive text-nowrap">
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th className="text-center">Actions</th>
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
                  {venues.map((venue) => (
                    <tr key={venue._id}>
                      <td>

                        <button type="button" className="btn btn-icon btn-outline-danger mx-1" onClick={(e) => handleDeleteVenue(e, venue._id)}>
                          <i className="bx bx-trash-alt" />
                        </button>
                      </td>
                      <td>
                        <strong>{venue.name}</strong>
                      </td>
                      <td>{venue.ownerName}</td>
                      <td>{venue.mobile}</td>
                      <td>{venue.type}</td>
                      <td>{venue.city}</td>
                      <td>$ {venue.price}</td>
                      <td>
                        <span className="badge bg-label-success me-1">Available</span>
                      </td>
                      <td className="text-center">{venue.outsideFood === 'yes' ? <i className="bx bx-check" /> : <i className="bx bx-x" />}</td>
                      <td className="text-center">{venue.foodFacility}</td>
                      <td className="text-center">{venue.peopleCapacity}</td>
                      <td className="text-center">{venue.carParking === 'yes' ? <i className="bx bx-check" /> : <i className="bx bx-x" />}</td>
                      <td className="text-center">{venue.rooms}</td>
                      <td className="text-center">{venue.halls}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

          </div>
        )}
      </div>

    </div>
  )
}

export default Venues
