import axios from 'axios';
import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link, useNavigate } from 'react-router-dom';

function NavbarMenu() {
  const navigate = useNavigate();
  const [userLogined, setUserLogined] = useState(false);
  useEffect( () => {
     fetchSessionData();
     handleLogout();
    // eslint-disable-next-line
  }, [])


  const fetchSessionData = async () => {
    try {
      // const response = await axios.post("http://localhost:8000/session");
      // console.log(response);
      // if (response.data) {
      //   setUserLogined(true);
      // }
    }
    catch (error) {
      console.log("Hello page error: ", error);
    }
  };
  const handleLogout = async ()=>{
    try {
      // const response = await axios.post("http://localhost:8000/logout")
      // console.log(response);
      // if(response.status === 202)
      // {
      //   alert("User logout!")
      //   setUserLogined(false);
      //   navigate('/Login');
      // }
    } catch (error) {
      console.log(error);
    }

  }


  return (
    <Navbar expand="lg" className="bg-body-tertiary header_section long_section ">
      <Container className='navbar navbar-expand-lg custom_nav-container justify-content-between'>
        <Navbar.Brand>
          <Link to='/' className='nav-link text-uppercase fw-bold'>Venueserv</Link>
        </Navbar.Brand>
        <Navbar.Toggle className="navbar-toggler" aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="navbarSupportedContent basic-navbar-nav" className="justify-content-end">
          <Nav className=" navbar-nav">

            <li className="nav-item">
              <Link to='/' className='nav-link'>Home</Link>
            </li>
            <li className="nav-item">
              <Link to='/Venue' className='nav-link'>Venue</Link>
            </li>
            <li className="nav-item">
              <Link to='/Mybooking' className='nav-link'>My booking</Link>
            </li>
            <li className="nav-item">
              <Link to='/Contact' className='nav-link'>Contact</Link>
            </li>
            <li className='nav-item'>
              {(userLogined) ? (
                <Link 
                  className='nav-link'
                  onClick={handleLogout}
                >Logout&nbsp;<i className="fa fa-users " aria-hidden="true" /></Link>
              ) : (
                <Link to='/Login' className='nav-link'>Login&nbsp;<i className="fa fa-user" aria-hidden="true" /></Link>
              )}

            </li>


            {/* <li className='nav-item'>

              <i className="fa fa-user d-inline" aria-hidden="true" />
              <NavDropdown className='quote_btn-container' title="Login" id="basic-nav-dropdown">
                <NavDropdown.Item ><Link to='/Login'>Venue Owner</Link></NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  <Link to='/Login'>Venue Finder</Link>
                </NavDropdown.Item>
              </NavDropdown>
            </li> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarMenu;


// import React from 'react'

// function Navbar() {
//   return (
//     <>
//       <header className="header_section long_section px-0">
//         <nav className="navbar navbar-expand-lg custom_nav-container ">
//           <a className="navbar-brand" href="index.html">
//             <span>
//               Venueserv
//             </span>
//           </a>
//           <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//             <span className> </span>
//           </button>
//           <div className="collapse navbar-collapse" id="navbarSupportedContent">
//             <div className="d-flex mx-auto flex-column flex-lg-row align-items-center">
//               <ul className="navbar-nav  ">
//                 <li className="nav-item active">

//                   <a className="nav-link" ><Link to='/'>Home</Link></a>
//                 </li>
//                 <li className="nav-item">
//                   <a className="nav-link" ><Link to='/Venue'>Venue</Link></a>
//                   {/* this is event */}
//                 </li>
//                 <li className="nav-item">
//                   <a className="nav-link" ><Link to='/Mybooking'>Mybooking</Link></a>
//                 </li>
//                 <li className="nav-item">
//                   <a className="nav-link" href="contact.html"><Link to='/Contact'>Contact</Link></a>
//                 </li>
//               </ul>
//             </div>
//             <div className="quote_btn-container dropdown ">
//               <button className="btn btn-secondery dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
//                 Login
//                 <i className="fa fa-user" aria-hidden="true" />
//               </button>
//               <ul className="dropdown-menu mx-auto" aria-labelledby="dropdownMenuButton1">
//                 <li className="dropdown-item "><Link to='/Login'>Venue Owner</Link></li>
//                 <li className='dropdown-item'><Link to='/Login'>Venue Finder</Link></li>
//               </ul>
//             </div>
//           </div>
//         </nav>
//       </header>

//     </>
//   )
// }

// export default Navbar;