import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

function Sidebar() {

  let location = useLocation();
  const [sidebar, setSidebar] = useState(false);
  const [nav, setNav] = useState(false);
  const toggleSidebar = () => {
    setSidebar(!sidebar)
  }
  const closeSidebar = ()=>{
    setSidebar(false)
  }
  useEffect(() => {
    setSidebar(false)
  }, [location]);



  return (
    <div onScroll={closeSidebar} className='d-md-block min-vh-100 w-auto' style={{ zIndex: 12 }}>
      <div className='menu-icon-container d-block d-xl-none position-absolute  mt-3 pt-1 ms-4 ps-2 '  >

          <span onClick={toggleSidebar} className="layout-menu-toggle menu-link text-large ms-auto mt-2 ">
          {sidebar ? (
            <i className="bx bx-chevron-left bx-sm " />
          ) : (
            <i className="bx bx-menu bx-sm "/>
          )}
        </span>

      </div>

      <aside className={`menu-vertical menu bg-menu-theme min-vh-100 ${sidebar ? 'd-block position-absolute pt-3' : 'd-none d-xl-block position-relative '}`}>
        <div className={`app-brand py-3 `}>
          <Link to='/'>
            <div className='ms-1'>
              <div className="app-brand-text text-black demo fw-bolder text-capitalize d-flex justify-content-center ms-2">VenueServ</div>
              <div className="text-primary app-brand-text text-bold menu-text d-flex justify-content-center text-capitalize ms-2">Admin Panel</div>
            </div>
          </Link>

        </div>
        <div className="menu-inner-shadow" />
        <ul className="menu-inner py-1">
          {/* Dashboard */}
          <li className={`menu-item ${location.pathname === "/" ? "active" : ""}`} >
            <Link to='/' className="menu-link" >
              <i className="menu-icon tf-icons bx bx-home-circle" />
              <div data-i18n="Analytics">Dashboard</div>
            </Link>
          </li>
          {/* Tables  */}
          <li className={`menu-item ${location.pathname === "/venues" ? "active" : ""}`}>
            <Link to='/venues' className="menu-link">
              <i className="menu-icon tf-icons bx bx-collection" />
              <div data-i18n="Tables">Venues</div>
            </Link>
          </li>
          <li className={`menu-item ${location.pathname === "/booking" ? "active" : ""}`}>
            <Link to='/booking' className="menu-link">
              <i className="menu-icon tf-icons bx bx-list-ul" />
              <div data-i18n="Tables">Bookings</div>
            </Link>
          </li>
          <li className={`menu-item ${location.pathname === "/ownersdata" ? "active" : ""}`}>
            <Link to='/ownersdata' className="menu-link">
              <i className="menu-icon tf-icons bx bx-group" />
              <div data-i18n="Tables">Venue Owners Data</div>
            </Link>
          </li>
          <li className={`menu-item ${location.pathname === "/userdata" ? "active" : ""}`}>
            <Link to='/userdata' className="menu-link">
              <i className="menu-icon tf-icons bx bx-group" />
              <div data-i18n="Tables">Normal Users Data</div>
            </Link>
          </li>
          <li className={`menu-item ${location.pathname === "/contactdata" ? "active" : ""}`}>
            <Link to='/contactdata' className="menu-link">
              <i className="menu-icon tf-icons bx bx-phone" />
              <div data-i18n="Tables">Contact data</div>
            </Link>
          </li>

        </ul>
      </aside>
    </div>

  )
}

export default Sidebar
