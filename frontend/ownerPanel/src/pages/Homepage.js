import React from 'react'


function Homepage() {
    return (
        <>
            <div className="content-wrapper">
                {/* Content */}
                <div className="container-xxl flex-grow-1 container-p-y">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 order-1">
                            <div className="row">
                                <div className="col-lg-4 col-sm-6 col-md-4 col-12 mb-4">
                                    <div className="card">
                                        <div className="card-body">
                                            <div className="card-title d-flex align-items-start justify-content-between">
                                                <div className="avatar flex-shrink-0">
                                                    <img src="../assets/img/icons/unicons/location.png  " alt="Venues" className="rounded" />
                                                </div>
                                            </div>
                                            <span className="fw-semibold d-block mb-1">Your Venues</span>
                                            <div className="d-flex align-items-baseline">
                                                <h3 className="card-title mb-2">99 </h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-sm-6 col-md-4 col-12 mb-4">
                                    <div className="card">
                                        <div className="card-body">
                                            <div className="card-title d-flex align-items-start justify-content-between">
                                                <div className="avatar flex-shrink-0">
                                                    <img src="../assets/img/icons/unicons/booking.png" alt="Credit Card" className="rounded" />
                                                </div>
                                            </div>
                                            <span className="fw-semibold d-block mb-1">Overall Bookings</span>
                                            <div className="d-flex align-items-baseline">
                                                <h3 className="card-title mb-2">4,679 </h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                               
                                <div className="col-lg-4 col-sm-6 col-md-4 col-12 mb-4">
                                    <div className="card">
                                        <div className="card-body">
                                            <div className="card-title d-flex align-items-start justify-content-between">
                                                <div className="avatar flex-shrink-0">
                                                    <img src="../assets/img/icons/unicons/LoginedUsers.png" alt="Credit Card" className="rounded" />
                                                </div>
                                            </div>
                                            <span className="fw-semibold d-block mb-1">Satisfied Customer</span>
                                            <div className="d-flex align-items-baseline">
                                                <h3 className="card-title mb-2">4,679 </h3>
                                                <small className="text-success fw-semibold"><i className="bx bx-up-arrow-alt" />+28.42%</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {/* Order Statistics */}
                        <div className="col-md-6 col-lg-6 col-xl-4 order-0 mb-4">
                            <div className="card h-100">
                                <div className="card-header d-flex align-items-center justify-content-between pb-0">
                                    <div className="card-title mb-0">
                                        <h5 className="m-0 me-2">Rating Statistics</h5>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <div className="d-flex justify-content-between align-items-center mb-2">
                                        <div className="d-flex flex-column mb-1">
                                            <div className='d-flex align-items-baseline mt-2'>
                                                <p className="me-2 fs-2 fw-semibold">3.5</p><span className='text-secondary'>Average Rating</span>
                                            </div>
                                            <span className='mb-2'>Top Rated Venues</span>
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
                                                    <h6 className="mb-0">Venue 1 Name</h6>
                                                </div>
                                                <div className="user-progress">
                                                    <small className="fw-semibold">4.9</small>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="d-flex mb-4 pb-1">
                                            <div className="avatar flex-shrink-0 me-3">
                                                <span className="avatar-initial rounded bg-label-info"><i className="bx bx-home-alt" /></span>
                                            </div>
                                            <div className="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                                                <div className="me-2">
                                                    <h6 className="mb-0">Venue 1 Name</h6>
                                                </div>
                                                <div className="user-progress">
                                                    <small className="fw-semibold">4.9</small>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="d-flex mb-4 pb-1">
                                            <div className="avatar flex-shrink-0 me-3">
                                                <span className="avatar-initial rounded bg-label-info"><i className="bx bx-home-alt" /></span>
                                            </div>
                                            <div className="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                                                <div className="me-2">
                                                    <h6 className="mb-0">Venue 1 Name</h6>
                                                </div>
                                                <div className="user-progress">
                                                    <small className="fw-semibold">4.9</small>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="d-flex mb-4 pb-1">
                                            <div className="avatar flex-shrink-0 me-3">
                                                <span className="avatar-initial rounded bg-label-info"><i className="bx bx-home-alt" /></span>
                                            </div>
                                            <div className="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                                                <div className="me-2">
                                                    <h6 className="mb-0">Venue 1 Name</h6>
                                                </div>
                                                <div className="user-progress">
                                                    <small className="fw-semibold">4.9</small>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="d-flex mb-4 pb-1">
                                            <div className="avatar flex-shrink-0 me-3">
                                                <span className="avatar-initial rounded bg-label-info"><i className="bx bx-home-alt" /></span>
                                            </div>
                                            <div className="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                                                <div className="me-2">
                                                    <h6 className="mb-0">Venue 1 Name</h6>
                                                </div>
                                                <div className="user-progress">
                                                    <small className="fw-semibold">4.9</small>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="d-flex mb-4 pb-1">
                                            <div className="avatar flex-shrink-0 me-3">
                                                <span className="avatar-initial rounded bg-label-info"><i className="bx bx-home-alt" /></span>
                                            </div>
                                            <div className="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                                                <div className="me-2">
                                                    <h6 className="mb-0">Venue 1 Name</h6>
                                                </div>
                                                <div className="user-progress">
                                                    <small className="fw-semibold">4.9</small>
                                                </div>
                                            </div>
                                        </li>

                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-6 col-xl-4 order-0 mb-4">
                            <div className="card h-100">
                                <div className="card-header d-flex align-items-center justify-content-between pb-0">
                                    <div className="card-title mb-0">
                                        <h5 className="m-0 me-2">Booking Statistics</h5>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <div className="d-flex justify-content-between align-items-center mb-2">
                                    <div className="d-flex flex-column mb-1">
                                            <div className='d-flex align-items-baseline mt-2'>
                                                <p className="me-2 fs-2 fw-semibold">6969</p><span className='text-secondary'>Total Bookings</span>
                                            </div>
                                            <span className='mb-2'>Top Booked Venues</span>
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
                        <div className="col-md-6 col-lg-6 col-xl-4 order-1 mb-4">
                            <div className="card h-100">
                                <div className="card-header">
                                    <ul className="nav nav-pills" role="tablist">
                                        <li className="nav-item">
                                            <button type="button" className="btn btn-primary" role="tab" data-bs-toggle="tab" data-bs-target="#navs-tabs-line-card-income" aria-controls="navs-tabs-line-card-income" aria-selected="true">
                                                Bookings
                                            </button>
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
                                                    <small className="text-muted d-block">Overall Bookings</small>
                                                    <div className="d-flex align-items-center">
                                                        <h6 className="mb-0 me-1">6969</h6>
                                                    </div>
                                                </div>
                                            </div>
                                            <div id="incomeChart" />
                                            <div className="d-flex justify-content-center pt-4 gap-2">
                                                <div className="flex-shrink-0">
                                                    <div id="expensesOfWeek" />
                                                </div>
                                                <div>
                                                    <p className="mb-n1 mt-1">Bookings This Month</p>
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
                {/* / Content */}

                <div className="content-backdrop fade" />
            </div>


        </>
    )
}

export default Homepage
