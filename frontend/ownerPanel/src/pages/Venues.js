import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';

function Venues() {
  const [venues, setVenues] = useState([]);
  const [userId, setUserId] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [venueToDelete, setVenueToDelete] = useState(null);

  useEffect(() => {
    fetchSessionData();
     // eslint-disable-next-line
  }, []);

  const fetchVenues = async (userId) => {
    try {
      const response = await axios.post('http://localhost:8000/showMyVenues', { userId });
      if (response.status === 200) {
        setVenues(response.data.venueData);
      } else {
        toast.error("No venues listed by you!");
      }
    } catch (error) {
      toast.error("Error fetching venue data!");
    } finally {
      setIsLoading(false);
    }
  };

  const fetchSessionData = async () => {
    try {
      const response = await axios.post("http://localhost:8000/session");
      if (response.data) {
        setUserId(response.data.sessionData.session._id);
        fetchVenues(response.data.sessionData.session._id);
      }
    } catch (error) {
      toast.error("Error fetching session data!");
    }
  };

  const handleDeleteVenue = async () => {
    try {
      const response = await axios.post(`http://localhost:8000/deleteVenue`, { vId: venueToDelete });
      if(response.status === 200){
        toast.success(response.data.message);
        fetchVenues(userId);
      }
    } catch (error) {
      toast.error("Error deleting venue!");
    }
  };

  return (
    <div className="content-wrapper">
      <div className="container-xxl flex-grow-1 container-p-y">
        <h4 className="fw-bold py-3 mb-4">Your Venues</h4>
        {isLoading ? (
          <div className='h-75 d-flex justify-content-center align-items-center'>
            <div className="spinner-grow text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        ) : (
          <div className="card">
            <div className='row p-2 '>
              <h4 className="card-header col-lg-10 col-md-9 col-sm-8 col-xs-12">Manage Venues</h4>
              <Link to='/addnewvenue' className='d-flex py-2 justify-content-end col-lg-2 col-md-3 col-sm-4 col-xs-12 h-25'>
                <button className="btn btn-primary">
                  <i className='tf-icons bx bx-plus'></i> Add Venue
                </button>
              </Link>
            </div>

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
                  {venues.length === 0 ? (
                    <tr>
                      <td className="text-center" colSpan={16}>No venues listed by you!</td>
                    </tr>
                  ) : (
                    venues.map((venue) => (
                      <tr key={venue._id}>
                        <td>
                          <Link to={`/editvenue/:${venue._id}`} state={{ venue }}>
                            <button type='button' className="btn btn-icon btn-outline-primary mx-1">
                              <i className="bx bxs-edit" />
                            </button>
                          </Link>
                          <button
                            type="button"
                            className="btn btn-icon btn-outline-danger mx-1"
                            onClick={() => setVenueToDelete(venue._id)}
                            data-bs-toggle="modal"
                            data-bs-target="#confirmDeleteVenueModal"
                          >
                            <i className="bx bx-trash-alt"></i>
                          </button>
                        </td>
                        <td><strong>{venue.name}</strong></td>
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
                  )))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>

      {/* Confirmation Modal for Deleting Venue */}
      <div className="modal fade" id="confirmDeleteVenueModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Confirm Deletion</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <p>Are you sure you want to delete the venue?</p>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
              <button type="button" className="btn btn-danger" onClick={handleDeleteVenue} data-bs-dismiss="modal">Delete</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Venues;

