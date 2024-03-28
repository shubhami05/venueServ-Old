import React from 'react'

function Mybooking() {
  return (
    <section className='furniture_section layout_padding long_section bg-body-tertiary'>
      <div className="container">
        <div>
          <h4 className="fw-bold ">MY BOOKINGS</h4>
        </div>
        <div>
          <div className="col-lg-12 col-md-12">
            <SingleCard name="Ahemdabad One Venue" location="Ahemdabad, Gujarat" rating="3" persons="99" capacity="600" parking="44" inquiries="9898" confirmation="confirmed" price="555" />


          </div>
        </div>
      </div>

    </section>
  )
}
function SingleCard(props) {
  return (
    <div className="venue-card container-fluid row">
      <div className="col-lg-4 col-md-4 col-sm-12">
        <img src="images/OIP.jpg" className="w-100" alt="img not found" />
      </div>
      <div className="col-lg-8 col-md-8 col-sm-12 ">
        <div className="row">
          <div className="col-lg-7 col-md-7 col-sm-7 mt-2">
            <div className="d-flex flex-column">
              <h4 className="fs-5">{props.name}</h4>
              <span><i className="fa-solid fa-location-dot" /> {props.location}</span>
              <span><i className="fa-solid fa-star"> </i> {props.rating} / 5 rated by {props.persons} Guests</span>
              <span><i className="fa-solid fa-users" /> {props.capacity} People  <i className="fa-solid fa-car" /> {props.parking}</span>
              <span className="text-success mt-2">{props.inquiries} people enquired this venue</span>
            </div>
          </div>
          <div className="col-lg-5 col-md-5 col-sm-5">
            <div className="d-flex flex-column align-items-end mt-2">
              <div className="text-white w-50 d-flex justify-content-end">
                <span className={props.confirmation === 'confirmed' ? "badge bg-success" : "badge bg-danger"}>{props.confirmation}</span>
              </div>
              <span className="text-muted text-small">Menu starts with</span>
              <h4>$ {props.price}</h4>
            </div>
            <div className='d-flex justify-content-end'>
              <button type="button" className="button-explore ">
                Cancel booking
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Mybooking