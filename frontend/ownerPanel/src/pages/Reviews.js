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
                                            <button type="button" class="btn btn-outline-primary mx-1"
                                                // onClick={() => {
                                                //     setContactMessage(contact.message)
                                                //     setContactUser(contact.name)
                                                // }} 
                                                data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                                                <i className="bx bx-book-reader" /> Read
                                            </button>
                                        </td>
                                    </tr>

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                {/* / Content */}
                    <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h1 class="modal-title fs-5" id="staticBackdropLabel">Name</h1>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    {/* {...} */}
                                    .......
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Close</button>
                                </div>
                            </div>
                        </div>
                    </div>

                <div className="content-backdrop fade" />
            </div>

        </div>
    )
}

export default Reviews
