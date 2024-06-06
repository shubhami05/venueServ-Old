import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Button from 'react-bootstrap/Button';

function Sidebar() {
    const [sidebar, setSidebar] = useState(false);
    const location = useLocation();

    const toggleSidebar = () => {
        setSidebar(!sidebar);
    };

    useEffect(() => {
        setSidebar(false);
    }, [location]);

    return (
        <div className="position-relative" style={{ zIndex: 12 }}>
            {/* Toggle button for small screens */}
            <div className="menu-icon-container d-block d-xl-none position-absolute mt-4 ms-3">
                <Button className='text-primary bg-transparent border-0' onClick={toggleSidebar}>
                    <i className="bx bx-menu bx-sm" />
                </Button>
            </div>

            {/* Offcanvas for small screens */}
            <Offcanvas show={sidebar} onHide={toggleSidebar} className="d-lg-none">
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>
                        <div className="app-brand py-3">
                            <Link to='/' className="app-brand-link">
                                <div className={`menu-item ${location.pathname === "/" ? "active" : ""}`}>
                                    <div className="app-brand-text text-black demo fw-bolder text-capitalize d-flex justify-content-center ms-2">VenueServ</div>
                                    <div className="text-primary app-brand-text text-bold menu-text d-flex justify-content-center text-capitalize ms-2">Owner Panel</div>
                                </div>
                            </Link>
                        </div>
                    </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <nav className="menu-vertical menut bg-menu-theme vh-100 w-100 ">
                        <ul className="menu-inner py-1">
                            <li className={`menu-item w-100 ${location.pathname === "/" ? "active" : ""}`}>
                                <Link to='/' className="menu-link" onClick={toggleSidebar}>
                                    <i className="menu-icon tf-icons bx bx-home-circle" />
                                    <div data-i18n="Analytics">Dashboard</div>
                                </Link>
                            </li>
                            <li className={`menu-item ${location.pathname === "/addnewvenue" ? "active" : ""}`}>
                                <Link to='/addnewvenue' className="menu-link" onClick={toggleSidebar}>
                                    <i className="menu-icon tf-icons bx bx-plus" />
                                    <div data-i18n="form">Add new Venue</div>
                                </Link>
                            </li>
                            <li className={`menu-item ${location.pathname === "/myvenues" ? "active" : ""}`}>
                                <Link to='/myvenues' className="menu-link" onClick={toggleSidebar}>
                                    <i className="menu-icon tf-icons bx bx-collection" />
                                    <div data-i18n="Tables">Your Venues</div>
                                </Link>
                            </li>
                            <li className={`menu-item ${location.pathname === "/bookings" ? "active" : ""}`}>
                                <Link to='/bookings' className="menu-link" onClick={toggleSidebar}>
                                    <i className="menu-icon tf-icons bx bx-list-ul" />
                                    <div data-i18n="Tables">New Bookings</div>
                                </Link>
                            </li>
                            <li className={`menu-item ${location.pathname === "/reviews" ? "active" : ""}`}>
                                <Link to='/reviews' className="menu-link" onClick={toggleSidebar}>
                                    <i className="menu-icon tf-icons bx bx-group" />
                                    <div data-i18n="Tables">Rating & Reviews</div>
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </Offcanvas.Body>
            </Offcanvas>

            {/* Static sidebar for larger screens */}
            <aside className={`menu-vertical d-none d-lg-block menu bg-menu-theme min-vh-100 ${sidebar ? 'd-block position-relative pt-3' : 'position-relative d-xl-block'}`}>
                <div className="app-brand py-3">
                    <Link to='/' className="app-brand-link">
                        <div className={`menu-item ${location.pathname === "/" ? "active" : ""}`}>
                            <div className="app-brand-text text-black demo fw-bolder text-capitalize d-flex justify-content-center ms-2">VenueServ</div>
                            <div className="text-primary app-brand-text text-bold menu-text d-flex justify-content-center text-capitalize ms-2">Owner Panel</div>
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
                    <li className={`menu-item ${location.pathname === "/addnewvenue" ? "active" : ""}`}>
                        <Link to='/addnewvenue' className="menu-link">
                            <i className="menu-icon tf-icons bx bx-plus" />
                            <div data-i18n="form">Add new Venue</div>
                        </Link>
                    </li>
                    <li className={`menu-item ${location.pathname === "/myvenues" ? "active" : ""}`}>
                        <Link to='/myvenues' className="menu-link">
                            <i className="menu-icon tf-icons bx bx-collection" />
                            <div data-i18n="Tables">Your Venues</div>
                        </Link>
                    </li>
                    <li className={`menu-item ${location.pathname === "/bookings" ? "active" : ""}`}>
                        <Link to='/bookings' className="menu-link">
                            <i className="menu-icon tf-icons bx bx-list-ul" />
                            <div data-i18n="Tables">New Bookings</div>
                        </Link>
                    </li>
                    <li className={`menu-item ${location.pathname === "/reviews" ? "active" : ""}`}>
                        <Link to='/reviews' className="menu-link">
                            <i className="menu-icon tf-icons bx bx-group" />
                            <div data-i18n="Tables">Rating &amp; Reviews</div>
                        </Link>
                    </li>
                </ul>
            </aside>
        </div>
    );
}

export default Sidebar;
