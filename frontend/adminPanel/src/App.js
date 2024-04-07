import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
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

function App() {
  return (
    axios.defaults.withCredentials = true,
    <>

      <BrowserRouter >
        <div className='layout-wrapper layout-content-navbar'>
          <div className='layout-container'>
            <Sidebar />
            <div className='layout-page'>
              <Navbar />
              <Routes>
                <Route path='/' element={<Dashboard />} />
                <Route path='/booking' element={<Booking />} />
                <Route path='/ownersdata' element={<Ownersdata />} />
                <Route path='/userdata' element={<Userdata />} />
                <Route path='/venues' element={<Venues />} />
                <Route path='/contactdata' element={<Contactdata />} />
                <Route path='/*' element={<NotFound />} />
              </Routes>
              <Footer />
            </div>
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
