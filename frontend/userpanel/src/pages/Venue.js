import React, { } from 'react'
import { useNavigate} from 'react-router-dom'

function Venue() {
  const navigate = useNavigate();

  function VenueBox(props) {
    return (
      <div className="col-md-6 col-lg-4">
        <div className="box bg-white">
          <div className="img-box">
            <img src={props.url} alt="Loading" />
          </div>
          <div className="detail-box">
            <h5>
              {props.name}
            </h5>
              <button type="button" className="button-explore fw-semibold rounded-1" onClick={()=>{navigate(`/Venues/${props.category}`)}}>
                Explore Now
              </button>
           
          </div>
        </div>
      </div>
    )
  }



  return (
    <>

      <section className="furniture_section layout_padding long_section  bg-body-tertiary">
        <div className="container-lg">
          <div className="heading_container">
            <h2>
              Our venues
            </h2>
            <p>
              which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be
              sure there isn't an
            </p>
          </div>
          <div className="row">
            <VenueBox url="images/f2.png" name="Banquet Halls" category="banquet-hall"/>
            <VenueBox url="images/f2.png" name="Party Plots" category="party-plot"/>
            <VenueBox url="images/f2.png" name="Resort Venues " category="resort"/>
            <VenueBox url="images/f2.png" name="Hotel Venues" category="hotel-venue"/>
            <VenueBox url="images/f2.png" name="Beach Venues" category="beach-venue"/>
            <VenueBox url="images/f2.png" name="Garden Restaurant" category="garden-restaurant"/>
          </div>
        </div>
      </section>

    </>
  )
}



export default Venue