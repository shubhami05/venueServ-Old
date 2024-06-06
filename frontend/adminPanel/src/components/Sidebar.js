import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Button from 'react-bootstrap/Button';

function Sidebar() {
    const location = useLocation();
    const [sidebar, setSidebar] = useState(false);

    const toggleSidebar = () => {
        setSidebar(!sidebar);
    }

    const closeSidebar = () => {
        setSidebar(false);
    }

    useEffect(() => {
        closeSidebar();
    }, [location]);

    return (
        <div className="position-relative" style={{ zIndex: 12 }}>
            <div className="menu-icon-container d-block d-xl-none position-absolute mt-4 ms-3">
                <Button className='text-primary bg-transparent border-0' onClick={toggleSidebar}>
                    <i className="bx bx-menu bx-sm" />
                </Button>
            </div>

            <Offcanvas show={sidebar} onHide={closeSidebar} placement="start">
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>
                        <div className="app-brand py-3">
                            <Link to='/'>
                                <div className={`menu-item ${location.pathname === "/" ? "active" : ""}`}>
                                    <div className="app-brand-text text-black demo fw-bolder text-capitalize d-flex justify-content-center ms-2">VenueServ</div>
                                    <div className="text-primary app-brand-text text-bold menu-text d-flex justify-content-center text-capitalize ms-2">Admin Panel</div>
                                </div>
                            </Link>
                        </div>
                    </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <nav className="menu-vertical bg-menu-theme vh-100 w-100 ">
                        <ul className="menu-inner py-1">
                            <li className={`menu-item ${location.pathname === "/" ? "active" : ""}`}>
                                <Link to='/' className="menu-link" onClick={closeSidebar}>
                                    <i className="menu-icon tf-icons bx bx-home-circle" />
                                    <div data-i18n="Analytics">Dashboard</div>
                                </Link>
                            </li>
                            <li className={`menu-item ${location.pathname === "/venues" ? "active" : ""}`}>
                                <Link to='/venues' className="menu-link" onClick={closeSidebar}>
                                    <i className="menu-icon tf-icons bx bx-collection" />
                                    <div data-i18n="Tables">Venues</div>
                                </Link>
                            </li>
                            <li className={`menu-item ${location.pathname === "/booking" ? "active" : ""}`}>
                                <Link to='/booking' className="menu-link" onClick={closeSidebar}>
                                    <i className="menu-icon tf-icons bx bx-list-ul" />
                                    <div data-i18n="Tables">Bookings</div>
                                </Link>
                            </li>
                            <li className={`menu-item ${location.pathname === "/ownersdata" ? "active" : ""}`}>
                                <Link to='/ownersdata' className="menu-link" onClick={closeSidebar}>
                                    <i className="menu-icon tf-icons bx bx-group" />
                                    <div data-i18n="Tables">Venue Owners Data</div>
                                </Link>
                            </li>
                            <li className={`menu-item ${location.pathname === "/userdata" ? "active" : ""}`}>
                                <Link to='/userdata' className="menu-link" onClick={closeSidebar}>
                                    <i className="menu-icon tf-icons bx bx-group" />
                                    <div data-i18n="Tables">Normal Users Data</div>
                                </Link>
                            </li>
                            <li className={`menu-item ${location.pathname === "/contactdata" ? "active" : ""}`}>
                                <Link to='/contactdata' className="menu-link" onClick={closeSidebar}>
                                    <i className="menu-icon tf-icons bx bx-phone" />
                                    <div data-i18n="Tables">Contact data</div>
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </Offcanvas.Body>
            </Offcanvas>

            <aside className={`menu-vertical d-none d-xl-block menu bg-menu-theme min-vh-100 position-relative`}>
                <div className="app-brand py-3">
                    <Link to='/'>
                        <div className={`menu-item ${location.pathname === "/" ? "active" : ""}`}>
                            <div className="app-brand-text text-black demo fw-bolder text-capitalize d-flex justify-content-center ms-2">VenueServ</div>
                            <div className="text-primary app-brand-text text-bold menu-text d-flex justify-content-center text-capitalize ms-2">Admin Panel</div>
                        </div>
                    </Link>
                </div>
                <div className="menu-inner-shadow" />
                <ul className="menu-inner py-1">
                    <li className={`menu-item ${location.pathname === "/" ? "active" : ""}`}>
                        <Link to='/' className="menu-link">
                            <i className="menu-icon tf-icons bx bx-home-circle" />
                            <div data-i18n="Analytics">Dashboard</div>
                        </Link>
                    </li>
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
    );
}

export default Sidebar;
