import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'


function Venues() {

  const [isLoading, setIsLoading] = useState(true);
  const [venues, setVenues] = useState([]);
  const [venueToDelete, setVenueToDelete] = useState(null);

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
    finally {
      setIsLoading(false);
    }
  }
  useEffect(() => {
    fetchVenues();
  }, []);

  const handleDeleteVenue = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8000/deleteVenue", {vId: venueToDelete });
      console.log(response.data.message);
      // alert()
      fetchVenues();
    }
    catch (err) {
      console.log("Error in deleting venue", err)
    }
    finally {
      setVenueToDelete(null);
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

                        <button type="button" className="btn btn-icon btn-outline-danger mx-1"
                          onClick={() => setVenueToDelete(venue._id)}
                          data-bs-toggle="modal"
                          data-bs-target="#confirmDeleteModal"
                        >
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
      <div className="modal fade" id="confirmDeleteModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Confirm Deletion</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <p>Are you sure you want to delete this venue?</p>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
              <button type="button" className="btn btn-danger" onClick={handleDeleteVenue} data-bs-dismiss="modal">Delete</button>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Venues
