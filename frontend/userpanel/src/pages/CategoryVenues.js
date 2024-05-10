import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Audio } from 'react-loader-spinner'

function CategoryVenues() {
  const params = useParams();
  // const navigate = useNavigate();
  const [cities, setCities] = useState([]);
  const [venues, setVenues] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchVenues(params.category);
    console.log(params.category);
    // eslint-disable-next-line
  }, []);

  const fetchVenues = async (category) => {

    try {

      axios.post('http://localhost:8000/showCategoryVenues', { category })
        .then((response) => {
          if (response.status === 200) {
            setVenues(response.data.venueData);
            const uniqueCities = [...new Set((response.data.venueData).map(venue => venue.city))];
            setCities(uniqueCities);
            setIsLoading(false);
            setLoading(false);
            console.log(venues);
          }
          else {
            setVenues(null);
            // alert("No any venues listed by you!");
            setIsLoading(false);
            setLoading(false);
          }

        })
    }
    catch (error) {
      console.log("error in fetching venues data: ", error)

    }
  }
  // async function fetchAllCities() {
  //   try {
  //     const response = await axios.post(`http://localhost:8000/myvenues`);
  //     const venueData = response.data.venueData;
  //     const uniqueCities = [...new Set(venueData.map(venue => venue.city))];
  //     setCities(uniqueCities);
  //     setLoading(false);
  //   } catch (error) {
  //     console.log("Error fetching cities:", error);
  //   }
  // }

  function LocationButton(props) {
    return (
      <Link to={`/Venues/${params.category}/${props.city}`} className="mx-3 border-none text-theme2 text-theme2-hover d-flex align-items-center" >
        <i className="fa-solid  fa-location-dot" />
        <p className=" mx-2 text-capitalize my-auto">{props.city}</p>
      </Link>
    )
  }
  // function VenueCard(props) {
  //   return (
  //     <div className="venue-card mb-2 row bg-body-tertiary border-0">
  //       <div className="col-lg-4 col-md-12 col-sm-12 ">
  //         <img src={require(`../images/venuePics/${props.photo}`)} style={{ aspectRatio: '3/2' }} className="h-100 w-100" alt='img' />
  //       </div>
  //       <div className="col-lg-8 col-md-12 col-sm-12 ">
  //         <div className="row d-flex justify-content-between">
  //           <div className="col-lg-8 col-md-8 col-sm-8 col-xs-8 mt-2">
  //             <div className="d-flex flex-column">
  //               <h4 className="text-capitalize fs-5">{props.name}</h4>
  //               <span className='text-capitalize'><i className=" fa-solid fa-location-dot" /> {props.city}</span>
  //               <span><i className="fa-solid fa-user" /> {props.capacity}</span>
  //               <span><i className="fa-solid fa-car" /> {props.parking} </span>
  //               <span><i className="fa-solid fa-star" /> 3.5 / 5 rated by 99 Guests</span>
  //               <span className="text-success mt-2">6969 people enquired this venue</span>
  //             </div>
  //           </div>
  //           <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4 d-flex flex-column justify-content-between">
  //             <div className="d-flex flex-column align-items-end mt-2 me-2">
  //               <span className="text-muted text-small">Price starts with</span>
  //               <h4>$ {props.price}</h4>
  //             </div>
  //             <button  className=" fs-6 btn my-2 fw-semibold text-uppercase bg-theme2 text-white">  
  //             <Link to="/VenueCard" state={ props}>Check out</Link>
  //             </button>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   )

  // }

  return (
    <>
      <div>
        <div className=" container">
          <div className="row container-fluid">
            <h3 className="fw-semibold text-uppercase mt-2 fw-bold">{(params.category).replace('-', ' ')}</h3>
            <p className='fw-medium'>Here are some Banquet Halls which are listed in our site by various individual venue owners. They all are verified and certified venues but be careful to avoid any kind of scam or fruad. </p>
          </div>
          <div className="row">
            <div className="col-lg-3 col-md-12 bg-body-tertiary">
              <div className="d-flex flex-column">
                <span className="fs-5 fw-medium text-decoration-underline">Filter venues</span>
                <span className="fs-5 mt-0">Localities</span>
                {/* <form className="py-2">
                  <input className="px-1" type="text" placeholder="Search Localities " />
                </form> */}
                <div className="city-list">
                  {loading ? (
                    <p><Audio
                      height="40"
                      width="40"
                      radius="9"
                      color="#f89646"
                      ariaLabel="loading"
                      wrapperStyle
                      wrapperClass
                    /></p>
                  ) : (cities && cities.length > 0) ? (
                    cities.map(cityName => <LocationButton key={cityName} city={cityName} />)
                  ) : (
                    <p>No cities available.</p>
                  )}
                </div>
              </div>
            </div>
            <div className="col-lg-8 col-md-12 mx-2 ">

              {isLoading ? (
                <p className='h-100 w-100 d-flex align-items-center justify-content-center'>
                  <Audio
                    height="40"
                    width="40"
                    radius="9"
                    color="#f89646"
                    ariaLabel="loading"
                    wrapperStyle
                    wrapperClass
                  />
                </p>
              ) : (venues && venues.length > 0) ? (
                venues.map((venue) => {
                  return (
                    <div className="venue-card mb-2 row bg-body-tertiary border-0">
                      <div className="col-lg-4 col-md-12 col-sm-12 ">
                        <img src={require(`../images/venuePics/${venue.photos?.filename}`)} style={{ aspectRatio: '3/2' }} className="h-100 w-100" alt='img' />
                      </div>
                      <div className="col-lg-8 col-md-12 col-sm-12 ">
                        <div className="row d-flex justify-content-between">
                          <div className="col-lg-8 col-md-8 col-sm-8 col-xs-8 mt-2">
                            <div className="d-flex flex-column">
                              <h4 className="text-capitalize fs-5">{venue.name}</h4>
                              <span className='text-capitalize'><i className=" fa-solid fa-location-dot" /> {venue.city}</span>
                              <span><i className="fa-solid fa-user" /> {venue.peopleCapacity}</span>
                              <span><i className="fa-solid fa-car" /> {(venue.carParking === 'yes') ? ("Available") : ("Not available")} </span>
                              <span><i className="fa-solid fa-star" /> 3.5 / 5 rated by 99 Guests</span>
                              <span className="text-success mt-2">6969 people enquired this venue</span>
                            </div>
                          </div>
                          <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4 d-flex flex-column justify-content-between">
                            <div className="d-flex flex-column align-items-end mt-2 me-2">
                              <span className="text-muted text-small">Price starts with</span>
                              <h4>$ {venue.price}</h4>
                            </div>
                            <button className=" fs-6 btn my-2 fw-semibold text-uppercase bg-theme2 ">
                              <Link to="/VenueCard" state={{ venue }} className='text-white'>Check out</Link>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                })
              ) : (
                <p>No {params.category} available.</p>
              )}
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default CategoryVenues