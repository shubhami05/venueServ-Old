import React from 'react'
import { Link } from 'react-router-dom'

function Banquethalls() {
  return (
    <>
      <div>
        <div className="container">
          <div className="row">
            <h3 className="fw-semibold">Banquet Halls</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda sequi molestias, quibusdam alias quae
              voluptatibus veritatis impedit unde quaerat nemo placeat debitis aperiam cumque quisquam beatae. Repudiandae
              suscipit iusto magnam!</p>
          </div>
          <div className="row">
            <div className="col-lg-3 col-md-12  filter-body">
              <div className="d-flex flex-column">
                <span className="fs-5">Filter venues</span>
                <span className="fs-5 mt-0">Localities</span>
                <form className="py-2">
                  <input className="px-1" type="text" placeholder="Search Localities " />
                </form>
                <div className="city-list">
                  <div className="text-theme2">
                    <i className="fa-solid fa-location-dot " />
                    <p  className="text-theme2">Ahemdabad</p>
                  </div>
                  <div className="text-theme2">
                    <i className="fa-solid fa-location-dot " />
                    <p  className="text-theme2">Surat</p>
                  </div>
                  <div className="text-theme2">
                    <i className="fa-solid fa-location-dot " />
                    <p className="text-theme2">Mumbai</p>
                  </div>
                  <div className="text-theme2">
                    <i className="fa-solid fa-location-dot " />
                    <p className="text-theme2">Hydrabad</p>
                  </div>
                  <div className="text-theme2">
                    <i className="fa-solid fa-location-dot " />
                    <p className="text-theme2">Banglore</p>
                  </div>
                  <div className="text-theme2">
                    <i className="fa-solid fa-location-dot " />
                    <p className="text-theme2">Pune</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-8 col-md-12 mx-2 ">
              <div className="venue-card mb-2 row">
                <div className="col-lg-4 col-md-12 col-sm-12">
                  <img src="images/OIP.jpg" className="w-100" />
                </div>
                <div className="col-lg-8 col-md-8 col-sm-12 ">
                  <div className="row">
                    <div className="col-lg-8 col-md-8 col-sm-12 mt-2">
                      <div className="d-flex flex-column">
                        <h4 className="fs-5">Ahemdabad One Venue</h4>
                        <span><i className="fa-solid fa-location-dot" /> Ahemdabad, Gujarat</span>
                        <span><i className="fa-solid fa-star"> </i> 3.5 / 5 rated by 99 Guests</span>
                        <span><i className="fa-solid fa-users" /> 600 People  <i className="fa-solid fa-car" /> 40</span>
                        <span className="text-success mt-2">6969 people enquired this venue</span>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12">
                      <div className="d-flex flex-column mt-2">
                        <span className="text-muted text-small">Menu starts with</span>
                        <h4>$ 555</h4>
                      </div>
                      <Link to='/Venuecard'>
                        <p className="btn bg-theme2 text-white">Check Now</p>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="venue-card mb-2 row">
                <div className="col-lg-4 col-md-4 col-sm-12">
                  <img src="images/OIP.jpg" className="w-100" />
                </div>
                <div className="col-lg-8 col-md-8 col-sm-12 ">
                  <div className="row">
                    <div className="col-lg-8 col-md-8 col-sm-12 mt-2">
                      <div className="d-flex flex-column">
                        <h4 className="fs-5">Ahemdabad One Venue</h4>
                        <span><i className="fa-solid fa-location-dot" /> Ahemdabad, Gujarat</span>
                        <span><i className="fa-solid fa-star"> </i> 3.5 / 5 rated by 99 Guests</span>
                        <span><i className="fa-solid fa-users" /> 600 People  <i className="fa-solid fa-car" /> 40</span>
                        <span className="text-success mt-2">6969 people enquired this venue</span>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12">
                      <div className="d-flex flex-column mt-2">
                        <span className="text-muted text-small">Menu starts with</span>
                        <h4>$ 555</h4>
                      </div>
                      <Link to='/Venuecard'><p className="btn bg-theme2 text-white">Check Now</p></Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="venue-card row">
                <div className="col-lg-4 col-md-4 col-sm-12">
                  <img src="images/OIP.jpg" className="w-100" />
                </div>
                <div className="col-lg-8 col-md-8 col-sm-12 ">
                  <div className="row">
                    <div className="col-lg-8 col-md-8 col-sm-12 mt-2">
                      <div className="d-flex flex-column">
                        <h4 className="fs-5">Ahemdabad One Venue</h4>
                        <span><i className="fa-solid fa-location-dot" /> Ahemdabad, Gujarat</span>
                        <span><i className="fa-solid fa-star"> </i> 3.5 / 5 rated by 99 Guests</span>
                        <span><i className="fa-solid fa-users" /> 600 People  <i className="fa-solid fa-car" /> 40</span>
                        <span className="text-success mt-2">6969 people enquired this venue</span>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12">
                      <div className="d-flex flex-column mt-2">
                        <span className="text-muted text-small">Menu starts with</span>
                        <h4>$ 555</h4>
                      </div>
                      <Link to='/Venuecard'>
                        <button className="btn bg-theme2 text-white">Check Now</button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Banquethalls