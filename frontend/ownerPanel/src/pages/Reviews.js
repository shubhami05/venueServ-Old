import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Reviews() {
    const [reviewsData, setReviewsData] = useState([])
    const [isLoading, setLoading] = useState(true)
    const [reviewMessage,setReviewMessage] = useState(null)
    const [reviewUser,setReviewUser] = useState(null)

    useEffect(() => {
        fetchSessionData();

        // eslint-disable-next-line
    }, [])

    const fetchSessionData = async () => {
        try {
            const response = await axios.post("http://localhost:8000/session");
            if (response.data) {
                fetchReviews(response.data.sessionData.session._id)
            }
        } catch (error) {
            console.log("SESSION ERROR IN BOOKING PAGE: ", error);
        }
    };
    const fetchReviews = async (ownerId) => {
        try {
            const response = await axios.post("http://localhost:8000/showReviewOwner", { ownerId });
            if (response.status === 200) {
                setReviewsData(response.data.reviewData)
                console.log(response.data.reviewData)
            }
        } catch (error) {
            console.log("No bookings available!");
        } finally {
            setLoading(false);
        }
    };


    return (
        <div className='h-100'>
            <div className="content-wrapper">
                {/* Content */}
                <div className="container-xxl flex-grow-1 container-p-y">
                    <h4 className="fw-bold py-3 mb-4">Rating & Reviews</h4>
                    {/* Striped Rows */}
                    {isLoading ? (
                        <div className='h-75 d-flex justify-content-center align-items-center'>
                            <div className="spinner-grow text-primary" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                        </div>
                    ) : (
                        <div className="card">
                            <h5 className="card-header">Reviews</h5>
                            <div className="table-responsive text-nowrap">
                                <table className="table table-striped">
                                    <thead>
                                        <tr>
                                            
                                            <th>Email</th>
                                            <th>Venue name</th>
                                            <th>Rating</th>
                                            <th>Review</th>
                                        </tr>
                                    </thead>
                                    <tbody className="table-border-bottom-0">
                                        {
                                            reviewsData.length > 0 ? 
                                                reviewsData.map((review,index) => (
                                                    <tr>
                                                        <td><strong>{review.email}</strong></td>
                                                        <td>{review.venueName}</td>
                                                        <td>{review.rating}</td>
                                                        <td>
                                                            <button type="button" class="btn btn-outline-primary mx-1"
                                                                onClick={() => {
                                                                    setReviewMessage(review.review)
                                                                    setReviewUser(review.email)
                                                                }} 
                                                                data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                                                                <i className="bx bx-book-reader" /> Read
                                                            </button>
                                                        </td>
                                                    </tr>
                                                )
                                            ) : (
                                                <tr><td colSpan={5}>No any reviews available</td></tr>
                                            )
                                        }


                                    </tbody>
                                </table>
                            </div>
                        </div>
                    )}
                </div>
                {/* / Content */}
                <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h1 class="modal-title fs-5" id="staticBackdropLabel">{reviewUser}</h1>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                {reviewMessage}
                                
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
