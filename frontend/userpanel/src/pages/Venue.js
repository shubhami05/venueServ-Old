import React from 'react'
import { Link } from 'react-router-dom'

function Venue() {
  return (
    <>

      <section className="furniture_section layout_padding long_section   bg-body-tertiary">
        <div className=" container">
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
            <VenueBox url="images/f2.png" name="Banquet Halls"/>
            <VenueBox url="images/f2.png" name="Party Plots"/>
            <VenueBox url="images/f2.png" name="Resort & Villas"/>
            <VenueBox url="images/f2.png" name="Hotel Venues"/>
            <VenueBox url="images/f2.png" name="Beach Venues"/>
            <VenueBox url="images/f2.png" name="Garden Restaurant"/>
            
           
           
          </div>
        </div>
      </section>

    </>
  )
}


function VenueBox(props) {
  return (
    <div className="col-md-6 col-lg-4">
      <div className="box bg-white">
        <div className="img-box">
          <img src={props.url} alt="This is image" />
        </div>
        <div className="detail-box">
          <h5>
            {props.name}
          </h5><Link to='/Banquethalls'>
            <button type="button" className="button-explore">
              Explore Now
            </button>
          </Link>
          {/* <div className="price_box">
            <h6 className="price_heading"> */}
              {/* <span>$</span> 100.00 */}
            {/* </h6>
            <a href> */}
              {/* Buy Now */}
            {/* </a>
          </div> */}
        </div>
      </div>
    </div>
  )
}
export default Venue