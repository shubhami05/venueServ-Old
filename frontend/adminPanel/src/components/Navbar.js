import React, { useState } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify';



function Navbar() {

  const [loggingOut, setLoggingOut] = useState(false);

  async function handleLogout() {
    setLoggingOut(true);
    try {
      const response = await axios.post("http://localhost:8000/logout");
      if (response.status === 200) {
        toast.success("Logged out successfully");
        window.location.replace(process.env.REACT_APP_DEFAULT_PORT);
      }
    } catch (error) {
      toast.error("Failed to logout");
      console.error("Logout error:", error);
      setLoggingOut(false);
    }
  }

  if (loggingOut) {
    return (
      <div className="h-100 d-flex justify-content-center align-items-center">
        <div className="spinner-grow text-primary" role="status">
          <span className="visually-hidden">Logging out...</span>
        </div>
      </div>
    );
  }
  return (
    <>
      {/* Navbar */}
      <nav className="layout-navbar container-xxl navbar navbar-expand-xl navbar-detached align-items-center bg-navbar-theme z-0" style={{ zIndex: 2 }} >


        <div className=" navbar-nav-right d-flex align-items-center" id="navbar-collapse">
          
          <ul className="navbar-nav flex-row align-items-center ms-auto">

            {/* User */}
            <li className="nav-item navbar-dropdown dropdown-user dropdown">
            </li><li>
              <span className="dropdown-item mouse-hover-pointer" onClick={handleLogout}>{/*Link to user panel*/}
                <i className="bx bx-power-off me-2" />
                <span className="align-middle" >Log Out</span>
              </span>
            </li>
            {/*/ User */}
          </ul>
        </div>
      </nav>
    </>


  )
}

export default Navbar
