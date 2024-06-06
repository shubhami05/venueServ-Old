import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'; // Ensure this includes both Bootstrap and your custom CSS
import Homepage from './pages/Homepage';
import Bookings from './pages/Bookings';
import Venues from './pages/Venues';
import Reviews from './pages/Reviews';
import AddVenue from './pages/AddVenue';
import Notfound from './pages/Notfound';
import Footer from './components/Footer';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import axios from 'axios';
import EditVenue from './pages/EditVenue';
import toast, { Toaster } from 'react-hot-toast';
import { useEffect, useState } from 'react';
import fetchSessionData from './auth/authService';

function App() {
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
      } finally {
        setLoading(false);
      }
    };

    if (!isAuth) {
      authenticateUser();
    } else {
      setLoading(false);
    }
  }, [isAuth]);

  if (loading) {
    return (
      <div className='h-75 d-flex justify-content-center align-items-center'>
        <div className="spinner-grow text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  if (!isAuth) {
    toast.error("Invalid user, Please try logging in again!");
    window.location.href = "http://localhost:3000/Login";
  } else {
    return (
      axios.defaults.withCredentials = true,
      <BrowserRouter>
        <div className='layout-wrapper layout-content-navbar'>
          <div className='layout-container'>

            <Sidebar />
            <div className='layout-page'>
            <Header />
              <Toaster
                toastOptions={{
                  style: {
                    border: '1px solid #713200',
                    padding: '16px',
                    color: '#713200',
                    backgroundColor: '#fff',
                    zIndex: 11,
                  },
                }}
              />
              <div className='container-fluid flex-grow-1 d-flex flex-column overflow-auto'>
                <Routes>
                  <Route path='/' element={<Homepage />} />
                  <Route path='/bookings' element={<Bookings />} />
                  <Route path='/myvenues' element={<Venues />} />
                  <Route path='/reviews' element={<Reviews />} />
                  <Route path='/addnewvenue' element={<AddVenue />} />
                  <Route path='/editvenue/:id' element={<EditVenue />} />
                  <Route path='/*' element={<Notfound />} />
                </Routes>
              </div>
              <Footer />
            </div>
          </div>
          <div className="layout-overlay layout-menu-toggle"></div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
