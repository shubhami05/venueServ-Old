import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Dashboard from './pages/Dashboard';
import Booking from './pages/Booking';
import Ownersdata from './pages/Ownersdata';
import Contactdata from './pages/Contactdata';
import Userdata from './pages/Userdata';
import Venues from './pages/Venues';
import NotFound from './pages/NotFound';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import fetchSessionData from './auth/authService';

export default function App() {
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
  }

  return (
    axios.defaults.withCredentials = true,
    <>
      <BrowserRouter>
        <div className='layout-wrapper'>
          <div className='layout-container'>
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
              <Sidebar />
            <div className='layout-page'>
              <Navbar />
              <div className='container-fluid flex-grow-1 d-flex flex-column overflow-auto'>
                <Routes>
                  <Route path='/' element={<Dashboard />} />
                  <Route path='/booking' element={<Booking />} />
                  <Route path='/ownersdata' element={<Ownersdata />} />
                  <Route path='/userdata' element={<Userdata />} />
                  <Route path='/venues' element={<Venues />} />
                  <Route path='/contactdata' element={<Contactdata />} />
                  <Route path='/*' element={<NotFound />} />
                </Routes>
              </div>
              <Footer />
            </div>
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}
