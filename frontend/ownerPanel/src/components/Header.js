import React, { } from 'react'
import axios from 'axios';
import toast from 'react-hot-toast';

function Header() {

    async function handleLogout() {
        const response = await axios.post(`http://localhost:8000/logout`);
        console.log(response);
        if (response.status === 200) {
            toast.success("Logout successfully!!");
            window.location.href = `http://localhost:3000`;
        }
    }

    return (
        <>
            <nav className="layout-navbar container-xxl navbar navbar-expand-xl navbar-detached align-items-center bg-navbar-theme"  style={{zIndex:2}}>
               
                <div className="navbar-nav-right d-flex align-items-center" id="navbar-collapse">
                    {/* Search */}
                   
                    {/* /Search */}
                    <ul className="navbar-nav flex-row align-items-center ms-auto">
                        {/* User */}
                        <li>
                            <span className="dropdown-item mouse-hover-pointer" onClick={handleLogout}>
                                {/*Link to user panel*/}
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
