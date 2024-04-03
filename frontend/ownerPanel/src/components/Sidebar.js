import React, {  } from 'react'
import { Link, useLocation  } from 'react-router-dom'

function Sidebar() {

    let location = useLocation();


    // const navigate = useNavigate();
 
 


    return (
        <>
            <aside id="layout-menu" className="layout-menu menu-vertical menu bg-menu-theme">
                <div className="app-brand demo">
                    <Link to='/' className="app-brand-link">
                        <div className={`menu-item ${location.pathname==="/"?"active":""}`} >
                            <div className="app-brand-text demo menu-text fw-bolder  text-capitalize d-flex justify-content-center ms-2">VenueServ</div>
                            <div className="text-primary app-brand-text text-bold menu-text d-flex justify-content-center text-capitalize ms-2">Owner Panel</div>
                        </div>
                    </Link>

                    <span className="layout-menu-toggle  menu-link text-large ms-auto d-block d-xl-none">
                        <i className="bx bx-chevron-left bx-sm align-middle" />
                    </span>
                </div>
                <div className="menu-inner-shadow" />
                <ul className="menu-inner py-1">
                    {/* Dashboard */}
                    <li className={`menu-item ${location.pathname==="/"?"active":""}`}>
                        <Link to='/' className="menu-link">
                            <i className="menu-icon tf-icons bx bx-home-circle" />
                            <div data-i18n="Analytics">Dashboard</div>
                        </Link>
                    </li>
                    {/* Tables  */}
                    <li className={`menu-item ${location.pathname==="/addnewvenue"?"active":""}`}>
                        <Link to='/addnewvenue' className="menu-link">
                            <i className="menu-icon tf-icons bx bx-plus" />
                            <div data-i18n="form">Add new Venue</div>
                        </Link>
                    </li>
                    <li  className={`menu-item ${location.pathname==="/myvenues"?"active":""}`}>
                        <Link to='/myvenues' className="menu-link">
                            <i className="menu-icon tf-icons bx bx-collection" />
                            <div data-i18n="Tables">Your Venues</div>
                        </Link>
                    </li>
                    <li  className={`menu-item ${location.pathname==="/bookings"?"active":""}`}>
                        <Link to='/bookings' className="menu-link">
                            <i className="menu-icon tf-icons bx bx-list-ul" />
                            <div data-i18n="Tables">New Bookings</div>
                        </Link>
                    </li>
                    <li  className={`menu-item ${location.pathname==="/reviews"?"active":""}`}>
                        <Link to='/reviews' className="menu-link">
                            <i className="menu-icon tf-icons bx bx-group" />
                            <div data-i18n="Tables">Rating &amp; Reviews</div>
                        </Link>
                    </li>
                </ul>
            </aside>
        </>
    )
}

export default Sidebar
