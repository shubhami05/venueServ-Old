import React, {useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

function Sidebar() {
 
  let location = useLocation();
  
  // useEffect(()=>{
  //   console.log(location);
  // },[location]);



  return (
    <>
      <aside id="layout-menu" className="layout-menu menu-vertical menu bg-menu-theme">
        <div className="app-brand demo">
          <Link to='/'  >
            <div>
              <div className="app-brand-text demo menu-text fw-bolder  text-capitalize d-flex justify-content-center ms-2">VenueServ</div>
              <div className="text-primary app-brand-text text-bold menu-text d-flex justify-content-center text-capitalize ms-2">Admin Panel</div>
            </div>
          </Link>
          <a href='/' className="layout-menu-toggle menu-link text-large ms-auto d-block d-xl-none">
            <i className="bx bx-chevron-left bx-sm align-middle" />
          </a>
        </div>
        <div className="menu-inner-shadow" />
        <ul className="menu-inner py-1">
          {/* Dashboard */}
          <li className={`menu-item ${location.pathname==="/"?"active":""}`} >
            <Link to='/' className="menu-link" >
              <i className="menu-icon tf-icons bx bx-home-circle" />
              <div data-i18n="Analytics">Dashboard</div>
            </Link>
          </li>
          {/* Tables  */}
          <li className={`menu-item ${location.pathname==="/venues"?"active":""}`}>
            <Link to='/venues'  className="menu-link">
              <i className="menu-icon tf-icons bx bx-collection" />
              <div data-i18n="Tables">Venues</div>
            </Link>
          </li>
          <li className={`menu-item ${location.pathname==="/booking"?"active":""}`}>
            <Link to='/booking'  className="menu-link">
              <i className="menu-icon tf-icons bx bx-list-ul" />
              <div data-i18n="Tables">Bookings</div>
            </Link>
          </li>
          <li className={`menu-item ${location.pathname==="/ownersdata"?"active":""}`}>
            <Link to='/ownersdata' className="menu-link">
              <i className="menu-icon tf-icons bx bx-group" />
              <div data-i18n="Tables">Venue Owners Data</div>
            </Link>
          </li>
          <li className={`menu-item ${location.pathname==="/userdata"?"active":""}`}>
            <Link to='/userdata' className="menu-link">
              <i className="menu-icon tf-icons bx bx-group" />
              <div data-i18n="Tables">Normal Users Data</div>
            </Link>
          </li>
          <li className={`menu-item ${location.pathname==="/contactdata"?"active":""}`}>
            <Link to='/contactdata' className="menu-link">
              <i className="menu-icon tf-icons bx bx-phone" />
              <div data-i18n="Tables">Contact data</div>
            </Link>
          </li>

        </ul>
      </aside>
    </>

  )
}

export default Sidebar
