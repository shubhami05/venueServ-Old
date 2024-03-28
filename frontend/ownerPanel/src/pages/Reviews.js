import React from 'react'

function Reviews() {
    return (
        <div className='h-100'>
            <div className="content-wrapper">
                {/* Content */}
                <div className="container-xxl flex-grow-1 container-p-y">
                    <h4 className="fw-bold py-3 mb-4">Rating & Reviews</h4>
                    {/* Striped Rows */}
                    <div className="card">
                        <h5 className="card-header">Logined Users</h5>
                        <div className="table-responsive text-nowrap">
                            <table className="table table-striped">
                                <thead>
                                    <tr>
                                        <th>Full Name</th>
                                        <th>Email</th>
                                        <th>Mobile No</th>
                                        <th>Venue Id</th>
                                        <th>Venue name</th>
                                        <th>Rating</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody className="table-border-bottom-0">
                                    <tr>
                                        <td><strong>John Abraham</strong></td>
                                        <td>abc@gmail.com</td>
                                        <td>9898989898</td>
                                        <td>123</td>
                                        <td><span className=" me-1">Not Available</span></td>
                                        <td>4</td>
                                        <td>
                                            <div className="btn btn-primary">
                                                <a className='text-white' href="javascript:void(0);"><i className="bx bx-book-reader me-1" />Read now</a>
                                            </div>
                                        </td>
                                    </tr>

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                {/* / Content */}

                <div className="content-backdrop fade" />
            </div>

        </div>
    )
}

export default Reviews
