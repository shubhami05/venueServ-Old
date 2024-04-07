import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { Link } from 'react-router-dom'

function Venues() {

  const [venues, setVenues] = useState([]);
  const [userId,setUserId] = useState('');

  useEffect(() => {
    fetchSessionData()
  }, []);

  
  const fetchVenues = async (userId) => {

    // fetchSessionData();
    try {
      // console.log(uId)

      axios.post('http://localhost:8000/showMyVenues', { userId })
        .then((response) => {
          if (response.status === 200) {
            setVenues(response.data.venueData);
          } else {
            alert("No any venues listed by you!");
          }
          // console.log(response.data.venueData);
        })
    }
    catch (error) {
      console.log("error in fetching venues data: ", error)

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
      const response = await axios.post("http://localhost:8000/deleteVenue", { vId });
      console.log(response.data.message);
      // alert()
      fetchVenues(userId);
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

                    <th className='text-center'>Actions</th>
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

                      <td className='text-center'>
                        <Link to={`/editvenue/:${venue._id}`} state={{ venue }}>
                          <button type='button' className="btn btn-icon btn-outline-primary mx-1">
                            <i className="bx bxs-edit" />
                          </button>
                        </Link>

                        <button type="button" className="btn btn-icon btn-outline-danger mx-1" onClick={(e) => { handleDeleteVenue(e, venue._id) }}>
                          <i className="bx bx-trash-alt"></i>
                        </button>

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
                      <td className='text-center'>
                        {
                          (venue.outsideFood === 'yes' ? <i className='bx bx-check'></i> : <i className='bx bx-x'></i>)
                        }
                      </td>
                      <td className='text-center'>{venue.foodFacility}</td>
                      <td className='text-center'>{venue.peopleCapacity}</td>
                      <td className='text-center'>
                        {
                          (venue.carParking === 'yes' ? <i className='bx bx-check'></i> : <i className='bx bx-x'></i>)
                        }</td>
                      <td className='text-center'>{venue.rooms}</td>
                      <td className='text-center'>{venue.halls}</td>

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
