import axios from 'axios';
import React, { useState, useEffect } from 'react'
// import { Link } from 'react-router-dom'

function Dashboard() {

  const [isLoading, setIsLoading] = useState(true);

  const [usersData, setUsersdata] = useState([]);
  const [ownersData, setOwnersdata] = useState([]);
  const [venues, setVenues] = useState([]);


  useEffect(() => {
    setTimeout(() => {
      fetchUsers();
      fetchOwners();
      fetchVenues();
      setIsLoading(false);
    }, 500);
  }, [])


  const fetchUsers = () => {
    try {
      axios.post("http://localhost:8000/showUsers")
        .then((resp) => {
          setUsersdata(resp.data.FindersData);
        })
    } catch (error) {
      console.log("Error in fetching user in dashboard!");
      console.log(error);
    }
  }

  const fetchOwners = () => {
    try {
      axios.post("http://localhost:8000/showUsers")
        .then((resp) => {
          setOwnersdata(resp.data.OwnersData);
        })
    } catch (error) {
      console.log("Error in fetching owners in dashboard!");
      console.log(error);
    }
  }
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
  return (
    <>
      {/* Content wrapper */}
      <div div className="content-wrapper" >
        <div className="container-xxl flex-grow-1 container-p-y">
          {/* Content */}

          {isLoading ? (
            <div className='h-100 d-flex justify-content-center align-items-center'>
              <div className="spinner-grow text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          ) : (
            <div className="container-xxl flex-grow-1 container-p-y">
              
                  <div className="row">
                    <div className="col-lg-3 col-sm-6 col-12 mb-4">
                      <div className="card">
                        <div className="card-body">
                          <div className="card-title d-flex align-items-start justify-content-between">
                            <div className="avatar flex-shrink-0">
                              <img src="../assets/img/icons/unicons/location.png  " alt="Venues" className="rounded" />
                            </div>
                          </div>
                          <span className="fw-semibold d-block mb-1">Total Venues</span>
                          <h3 className="card-title mb-2">
                            {venues.length}
                          </h3>
                          <small className="text-success fw-semibold"><i className="bx bx-up-arrow-alt" /> +00.00%</small>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-sm-6 col-12 mb-4">
                      <div className="card">
                        <div className="card-body">
                          <div className="card-title d-flex align-items-start justify-content-between">
                            <div className="avatar flex-shrink-0">
                              <img src="../assets/img/icons/unicons/booking.png" alt="Credit Card" className="rounded" />
                            </div>
                          </div>
                          <span className="fw-semibold d-block mb-1">Total Bookings</span>
                          <h3 className="card-title mb-2">4,679</h3>
                          <small className="text-success fw-semibold"><i className="bx bx-up-arrow-alt" /> +28.42%</small>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-sm-6  col-12 mb-4">
                      <div className="card">
                        <div className="card-body">
                          <div className="card-title d-flex align-items-start justify-content-between">
                            <div className="avatar flex-shrink-0">
                              <img src="../assets/img/icons/unicons/VenueOwners.png" alt="Credit Card" className="rounded" />
                            </div>
                          </div>
                          <span className="fw-semibold d-block mb-1">Venue Owners</span>
                          <h3 className="card-title mb-2">
                            {ownersData.length}
                          </h3>
                          <small className="text-success fw-semibold"><i className="bx bx-up-arrow-alt" /> +28.42%</small>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3  col-sm-6  col-12 mb-4">
                      <div className="card">
                        <div className="card-body">
                          <div className="card-title d-flex align-items-start justify-content-between">
                            <div className="avatar flex-shrink-0">
                              <img src="../assets/img/icons/unicons/LoginedUsers.png" alt="Credit Card" className="rounded" />
                            </div>
                          </div>
                          <span className="fw-semibold d-block mb-1">Logined Users</span>
                          <h3 className="card-title mb-2">
                            {usersData.length}
                          </h3>
                          <small className="text-success fw-semibold"><i className="bx bx-up-arrow-alt" /> +28.42%</small>
                        </div>
                      </div>
                    </div>
                
              </div>
              <div className="row">
                {/* Order Statistics */}
                <div className="col-md-6 col-lg-4 col-xl-4 order-0 mb-4">
                  <div className="card h-100">
                    <div className="card-header d-flex align-items-center justify-content-between pb-0">
                      <div className="card-title mb-0">
                        <h5 className="m-0 me-2">Venues Statistics</h5>
                      </div>
                    </div>
                    <div className="card-body">
                      <div className="d-flex justify-content-between align-items-center mb-3">
                        <div className="d-flex flex-column align-items-center gap-3 mb-4">
                          <h2 className="mt-4 mb-0">
                            {venues.length}
                          </h2>
                          <span>Total Venues</span>
                        </div>
                        {/* <div id="orderStatisticsChart"></div> */}
                      </div>
                      <ul className="p-0 m-0">
                        <li className="d-flex mb-4 pb-1">
                          <div className="avatar flex-shrink-0 me-3">
                            <span className="avatar-initial rounded bg-label-info"><i className="bx bx-home-alt" /></span>
                          </div>
                          <div className="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                            <div className="me-2">
                              <h6 className="mb-0">Banquet Halls</h6>
                            </div>
                            <div className="user-progress">
                              <small className="fw-semibold">1212</small>
                            </div>
                          </div>
                        </li>
                        <li className="d-flex mb-4 pb-1">
                          <div className="avatar flex-shrink-0 me-3">
                            <span className="avatar-initial rounded bg-label-info"><i className="bx bx-home-alt" /></span>
                          </div>
                          <div className="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                            <div className="me-2">
                              <h6 className="mb-0">Beach Venues</h6>
                            </div>
                            <div className="user-progress">
                              <small className="fw-semibold">1212</small>
                            </div>
                          </div>
                        </li>
                        <li className="d-flex mb-4 pb-1">
                          <div className="avatar flex-shrink-0 me-3">
                            <span className="avatar-initial rounded bg-label-info"><i className="bx bx-home-alt" /></span>
                          </div>
                          <div className="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                            <div className="me-2">
                              <h6 className="mb-0">Hotel Venues</h6>
                            </div>
                            <div className="user-progress">
                              <small className="fw-semibold">1212</small>
                            </div>
                          </div>
                        </li>
                        <li className="d-flex mb-4 pb-1">
                          <div className="avatar flex-shrink-0 me-3">
                            <span className="avatar-initial rounded bg-label-info"><i className="bx bx-home-alt" /></span>
                          </div>
                          <div className="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                            <div className="me-2">
                              <h6 className="mb-0">Destination Venues</h6>
                            </div>
                            <div className="user-progress">
                              <small className="fw-semibold">1212</small>
                            </div>
                          </div>
                        </li>
                        <li className="d-flex mb-4 pb-1">
                          <div className="avatar flex-shrink-0 me-3">
                            <span className="avatar-initial rounded bg-label-info"><i className="bx bx-home-alt" /></span>
                          </div>
                          <div className="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                            <div className="me-2">
                              <h6 className="mb-0">Party Plots</h6>
                            </div>
                            <div className="user-progress">
                              <small className="fw-semibold">1212</small>
                            </div>
                          </div>
                        </li>
                        <li className="d-flex mb-4 pb-1">
                          <div className="avatar flex-shrink-0 me-3">
                            <span className="avatar-initial rounded bg-label-info"><i className="bx bx-home-alt" /></span>
                          </div>
                          <div className="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                            <div className="me-2">
                              <h6 className="mb-0">Resort Venues</h6>
                            </div>
                            <div className="user-progress">
                              <small className="fw-semibold">1212</small>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4 col-xl-4 order-0 mb-4">
                  <div className="card h-100">
                    <div className="card-header d-flex align-items-center justify-content-between pb-0">
                      <div className="card-title mb-0">
                        <h5 className="m-0 me-2">Booking Statistics</h5>
                      </div>
                    </div>
                    <div className="card-body">
                      <div className="d-flex justify-content-between align-items-center mb-3">
                        <div className="d-flex flex-column align-items-center gap-3 mb-4">
                          <h2 className="mt-4 mb-0">4,679</h2>
                          <span>Total Bookings</span>
                        </div>
                        {/* <div id="orderStatisticsChart"></div> */}
                      </div>
                      <ul className="p-0 m-0">
                        <li className="d-flex mb-4 pb-1">
                          <div className="avatar flex-shrink-0 me-3">
                            <span className="avatar-initial rounded bg-label-info"><i className="bx bx-home-alt" /></span>
                          </div>
                          <div className="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                            <div className="me-2">
                              <h6 className="mb-0">Banquet Halls</h6>
                            </div>
                            <div className="user-progress">
                              <small className="fw-semibold">1212</small>
                            </div>
                          </div>
                        </li>
                        <li className="d-flex mb-4 pb-1">
                          <div className="avatar flex-shrink-0 me-3">
                            <span className="avatar-initial rounded bg-label-info"><i className="bx bx-home-alt" /></span>
                          </div>
                          <div className="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                            <div className="me-2">
                              <h6 className="mb-0">Beach Venues</h6>
                            </div>
                            <div className="user-progress">
                              <small className="fw-semibold">1212</small>
                            </div>
                          </div>
                        </li>
                        <li className="d-flex mb-4 pb-1">
                          <div className="avatar flex-shrink-0 me-3">
                            <span className="avatar-initial rounded bg-label-info"><i className="bx bx-home-alt" /></span>
                          </div>
                          <div className="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                            <div className="me-2">
                              <h6 className="mb-0">Hotel Venues</h6>
                            </div>
                            <div className="user-progress">
                              <small className="fw-semibold">1212</small>
                            </div>
                          </div>
                        </li>
                        <li className="d-flex mb-4 pb-1">
                          <div className="avatar flex-shrink-0 me-3">
                            <span className="avatar-initial rounded bg-label-info"><i className="bx bx-home-alt" /></span>
                          </div>
                          <div className="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                            <div className="me-2">
                              <h6 className="mb-0">Destination Venues</h6>
                            </div>
                            <div className="user-progress">
                              <small className="fw-semibold">1212</small>
                            </div>
                          </div>
                        </li>
                        <li className="d-flex mb-4 pb-1">
                          <div className="avatar flex-shrink-0 me-3">
                            <span className="avatar-initial rounded bg-label-info"><i className="bx bx-home-alt" /></span>
                          </div>
                          <div className="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                            <div className="me-2">
                              <h6 className="mb-0">Party Plots</h6>
                            </div>
                            <div className="user-progress">
                              <small className="fw-semibold">1212</small>
                            </div>
                          </div>
                        </li>
                        <li className="d-flex mb-4 pb-1">
                          <div className="avatar flex-shrink-0 me-3">
                            <span className="avatar-initial rounded bg-label-info"><i className="bx bx-home-alt" /></span>
                          </div>
                          <div className="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                            <div className="me-2">
                              <h6 className="mb-0">Resort Venues</h6>
                            </div>
                            <div className="user-progress">
                              <small className="fw-semibold">1212</small>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/*/ Order Statistics */}
                {/* Expense Overview */}
                <div className="col-md-6 col-lg-4 order-1 mb-4">
                  <div className="card h-100">
                    <div className="card-header">
                      <ul className="nav nav-pills" role="tablist">
                        <li className="nav-item">
                          <button type="button" className="nav-link active" role="tab" data-bs-toggle="tab" data-bs-target="#navs-tabs-line-card-income" aria-controls="navs-tabs-line-card-income" aria-selected="true">
                            Income
                          </button>
                        </li>
                        <li className="nav-item">
                          <button type="button" className="nav-link" role="tab">Expenses</button>
                        </li>
                        <li className="nav-item">
                          <button type="button" className="nav-link" role="tab">Profit</button>
                        </li>
                      </ul>
                    </div>
                    <div className="card-body px-0">
                      <div className="tab-content p-0">
                        <div className="tab-pane fade show active" id="navs-tabs-line-card-income" role="tabpanel">
                          <div className="d-flex p-4 pt-3">
                            <div className="avatar flex-shrink-0 me-3">
                              <img src="../assets/img/icons/unicons/wallet.png" alt="User" />
                            </div>
                            <div>
                              <small className="text-muted d-block">Total Balance</small>
                              <div className="d-flex align-items-center">
                                <h6 className="mb-0 me-1">$459.10</h6>
                                <small className="text-success fw-semibold">
                                  <i className="bx bx-chevron-up" />
                                  42.9%
                                </small>
                              </div>
                            </div>
                          </div>
                          <div id="incomeChart" />
                          <div className="d-flex justify-content-center pt-4 gap-2">
                            <div className="flex-shrink-0">
                              <div id="expensesOfWeek" />
                            </div>
                            <div>
                              <p className="mb-n1 mt-1">Expenses This Week</p>
                              <small className="text-muted">$39 less than last week</small>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/*/ Expense Overview */}
              </div>
            </div>
          )}

          {/* / Content */}
          {/* Footer */}
          {/* <footer className="content-footer footer bg-footer-theme">
      <div className="container-xxl d-flex flex-wrap justify-content-between py-2 flex-md-row flex-column">
        <div className="mb-2 mb-md-0 text-center">
          Created by @VenueServ
        </div>
      </div>
    </footer> */}
          {/* / Footer */}
          <div className="content-backdrop fade" />
        </div>
        {/* Content wrapper */}
        {/* / Layout page */}
        {/* Overlay */}
        <div className="layout-overlay layout-menu-toggle" />
        {/* / Layout wrapper */}
        {/* <div className="buy-now">
<a
  href="https://themeselection.com/products/sneat-bootstrap-html-admin-template/"
  target="_blank"
  className="btn btn-danger btn-buy-now"
  >Upgrade to Pro</a
>
</div> */}
      </div >
    </>

  )
}

export default Dashboard;
