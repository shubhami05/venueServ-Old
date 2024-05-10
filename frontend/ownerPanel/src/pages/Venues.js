import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom'

function Venues() {

  const [venues, setVenues] = useState([]);
  const [userId, setUserId] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetchSessionData()
    //eslint-disable-next-line
  }, []);


  const fetchVenues = async (userId) => {

    // fetchSessionData();
    try {
      // console.log(uId)

      const response = await axios.post('http://localhost:8000/showMyVenues', { userId })

      if (response.status === 200) {
        setVenues(response.data.venueData);
      } else {
        toast.error("No any venues listed by you!");
      }
      // console.log(response.data.venueData);

    }
    catch (error) {
      if(error.response.status === 400)
        {
          toast.error("No any venue is listed by you!");
        }
      console.log("error in fetching venues data: ", error)

    }
    finally{
      setIsLoading(false);
    }
  }

  const fetchSessionData = async () => {
    try {
      // const loggedInUser = sessionStorage.getItem('loggedInUser');
      const response = await axios.post("http://localhost:8000/session");
      console.log(response);
      if (response.data) {
        setUserId(response.data.sessionData.session._id);
        fetchVenues(response.data.sessionData.session._id);
        // console.log(response.data.sessionData.session._id);
      }
    }
    catch (error) {
      console.log("SESSION ERROR IN ADD VENUE PAGE: ", error);
    }
  };




  const handleDeleteVenue = async (e, vId) => {
    e.preventDefault();
    console.log(vId);
    try {
      const response = await axios.post(`http://localhost:8000/deleteVenue`, { vId });
      console.log(response.data.message);
      fetchVenues(userId);
    }
    catch (err) {
      if(err.response.status === 400)
        {
          toast.error("Something went wrong!");
        }
      console.log("Error in deleting venue", err)
    }
  }



  return (

    <div className="content-wrapper">
      {/* Content */}
      <div className="container-xxl flex-grow-1 container-p-y">
        <h4 className="fw-bold py-3 mb-4">Your Venues</h4>


        {/* Striped Rows */}
        {isLoading ? (
          <div className='h-75 d-flex justify-content-center align-items-center'>
            <div class="spinner-grow text-primary" role="status">
              <span class="visually-hidden">Loading...</span>
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
                  {venues.map((venue) => (
                    <tr key={venue._id}>
                      <td>
                        <Link to={`/editvenue/:${venue._id}`} state={{ venue }}>
                          <button type='button' className="btn btn-icon btn-outline-primary mx-1">
                            <i className="bx bxs-edit" />
                          </button>
                        </Link>

                        <button type="button" className="btn btn-icon btn-outline-danger mx-1" onClick={(e) => { handleDeleteVenue(e, venue._id) }}>
                          <i className="bx bx-trash-alt"></i>
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
      {/* / Content */}

      {/* / Footer */}
      <div className="content-backdrop fade" />
    </div>

  )
}

export default Venues
