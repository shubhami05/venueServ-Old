// import { useContext} from 'react';
import './App.css';
import { useState, useEffect } from 'react';
import Navbar from './common/navbar';
import Footer from './common/footer';
// import { AuthContext ,AuthProvider} from './common/AuthProvider';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import CategoryVenues from './pages/CategoryVenues';
import Contact from './pages/Contact';
import Mybooking from './pages/Mybooking';
import Reviews from './pages/Reviews';
import Venuecard from './pages/Venue-card';
import Venue from './pages/Venue';
import Notfound from './pages/Notfound';
import SignupUser from './pages/SignupUser';
import LoginUser from './pages/Login';
import axios from 'axios';
import HelloPage from './pages/HelloPage';
import fetchSessionData from './auth/authService';
import { Toaster } from 'react-hot-toast';
import { Audio } from 'react-loader-spinner';

function App() {
  //run project and telll me theprob
  // ok
  //done?wait..
  //ok done thanks..
  // look the problem was for css used relative path and you used direct path if any url is having first/second like this then you must need to use relative path
  //ok ok should i leave?
  //yes done
  const [isAuth, setAuth] = useState(false);
  const [loading, setLoading] = useState(true);
  axios.defaults.withCredentials = true;
  useEffect(() => {
    const authenticateUser = async () => {
      try {
        const isAuth = await fetchSessionData();
        setAuth(isAuth);
        console.log("auth:", isAuth);

      } catch (error) {
        setAuth(false);
      }
      finally {
        setLoading(false);
      }
    };

    if (!isAuth) {
      authenticateUser();
    }
    else {
      setLoading(false);
    }
    // eslint-disable-next-line
  }, [])

  if (loading) {
    return <div className='min-vh-100 w-100 d-flex align-items-center justify-content-center'>
    <Audio
      height="40"
      width="40"
      radius="9"
      color="#f89646"
      ariaLabel="loading"
      wrapperStyle
      wrapperClass
    />
  </div>
  }

  return (
    // axios.defaults.withCredentials = true,
    <>
      <BrowserRouter>
        {/* <AuthProvider> */}
        <Navbar />
        <Toaster
          toastOptions={{
            style: {
              border: '1px solid #713200',
              padding: '16px',
              color: '#713200',
              backgroundColor:'#fff',
              zIndex:11
            },
          }}
        />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path='/Venues/:category' element={<CategoryVenues />} />
          <Route path='/Venues/:category/:city' element={<CategoryVenues />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path='/Login' element={<LoginUser />} />
          <Route path='/SignupUser' element={<SignupUser />} />
          <Route path="/Mybooking" element={(isAuth) ? (<Mybooking />) : (<LoginUser />)} />
          <Route path="/Reviews/:id" element={<Reviews />} />
          <Route path="/Venuecard/:id" element={<Venuecard />} />
          <Route path="/Venues" element={<Venue />} />
          <Route path='/HelloPage' element={<HelloPage />} />
          <Route path="/*" element={<Notfound />} />
        </Routes>
        <Footer />
        {/* </AuthProvider> */}
      </BrowserRouter>
    </>
  );
}

export default App;
