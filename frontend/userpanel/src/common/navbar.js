// import axios from 'axios';
import { useContext, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from './AuthProvider';

function NavbarMenu() {
  // const navigate = useNavigate();
  const { userLogined, fetchSessionData, handleLogout } = useContext(AuthContext);
  useEffect( () => {
   
      fetchSessionData();
      console.log(userLogined);
    //  handleLogout();
    // eslint-disable-next-line
  }, [10])


  // const fetchSessionData = async () => {
  //   try {
  //     const response = await axios.post("http://localhost:8000/session");
  //     console.log(response);
  //     if (response.data) {
  //       setUserLogined(true);
  //     }
  //   }
  //   catch (error) {
  //     console.log("Hello page error: ", error);
  //   }
  // };
  // const handleLogout = async ()=>{
  //   try {
  //     const response = await axios.post("http://localhost:8000/logout")
  //     console.log(response);
  //     if(response.status === 202)
  //     {
  //       alert("User logout!")
  //       setUserLogined(false);
  //       navigate('/Login');
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }

  // }


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
              {userLogined ? (
                <Link 
                  className='nav-link'
                  onClick={handleLogout}
                >Logout&nbsp;<i className="fa fa-users " aria-hidden="true" /></Link>
              ) : (
                <Link to='/Login' className='nav-link'>Login&nbsp;<i className="fa fa-user" aria-hidden="true" /></Link>
              )}

            </li>


          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarMenu;