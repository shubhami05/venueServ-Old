import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Homepage from './pages/Homepage';
import Bookings from './pages/Bookings';
import Venues from './pages/Venues';
import Reviews from './pages/Reviews';
import AddVenue from './pages/AddVenue';
import Notfound from './pages/Notfound';
import Footer from './components/Footer';
import Header from './components/Header';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <BrowserRouter>

      <div className='layout-wrapper layout-content-navbar'>
        <div className='layout-container'>

          <Sidebar />
          <div className='layout-page'>
            <Header />
            <Routes>
              <Route path='/' element={<Homepage />} />
              <Route path='/bookings' element={<Bookings />} />
              <Route path='/myvenues' element={<Venues />} />
              <Route path='/reviews' element={<Reviews />} />
              <Route path='/addnewvenue' element={<AddVenue />} />
              <Route path='/*' element={<Notfound />} />
            </Routes>
            <Footer />
          </div>
        </div>
        <div className="layout-overlay layout-menu-toggle"></div>
      </div>
    </BrowserRouter>
  );
}

export default App;
