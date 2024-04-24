// import axios from 'axios';
import {  useEffect ,useState} from 'react';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link ,useNavigate} from 'react-router-dom';
import fetchSessionData from '../auth/authService';

function NavbarMenu() {
  // const navigate = useNavigate();
  // const { userLogined, fetchSessionData, handleLogout } = useContext(AuthContext);
  const [isAuth,setAuth] = useState(false);
  const [loading,setLoading] = useState(true);
  const navigate = useNavigate();
  axios.defaults.withCredentials = true;
  useEffect( () => {
   
      const authenticateUser = async () =>{
        try {
          const isAuth = await fetchSessionData();
          setAuth(isAuth);
          
        } catch (error) {
          setAuth(false);
        }
        finally{
          setLoading(false);
        }
      };

      if(!isAuth)
      {
        authenticateUser();  
      }
      else
      {
        setLoading(false);
      }
    // eslint-disable-next-line
  }, [10])
  
  if(loading)
  {
    return <h1>Loading....</h1>
  }
  async function handleLogout(){
    const response = await axios.post("http://localhost:8000/logout");
    console.log(response);
    if(response.status === 200)
    {
      alert("Logout successfully!!");
      navigate("Login");
      window.location.reload(false); 
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
              {isAuth ? (
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