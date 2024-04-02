import React, {  } from 'react'

function Header() {
    const handleLogout = () => {
        window.location.href = "http://localhost:3000/";
        
    }

    return (
        <>
            <nav className="layout-navbar container-xxl navbar navbar-expand-xl navbar-detached align-items-center bg-navbar-theme" id="layout-navbar">
                <div className="layout-menu-toggle navbar-nav align-items-xl-center me-3 me-xl-0 d-xl-none">
                    <a className="nav-item nav-link px-0 me-xl-4" href="/">
                        <i className="bx bx-menu bx-sm" />
                    </a>
                </div>
                <div className="navbar-nav-right d-flex align-items-center" id="navbar-collapse">
                    {/* Search */}
                    <div className="navbar-nav align-items-center">
                        <div className="nav-item d-flex align-items-center">
                            <i className="bx bx-search fs-4 lh-0" />
                            <input type="text" className="form-control border-0 shadow-none" placeholder="Search..." aria-label="Search..." />
                        </div>
                    </div>
                    {/* /Search */}
                    <ul className="navbar-nav flex-row align-items-center ms-auto">
                        {/* User */}
                        <li className="nav-item navbar-dropdown dropdown-user dropdown" >
                        </li><li>
                            <span className="dropdown-item pointer-event"  onClick={handleLogout}>{/*Link to user panel*/}
                                <i className="bx bx-power-off me-2" />
                                <span className="align-middle">Log Out</span>
                            </span>
                        </li>
                        {/*/ User */}
                    </ul>
                </div>
            </nav>

        </>
    )
}

export default Header
