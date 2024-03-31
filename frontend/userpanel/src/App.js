
import './App.css';
import Navbar from './common/navbar';
import Footer from './common/footer';
import { BrowserRouter, Form, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Banquethalls from './pages/Banquethalls';
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

function App() {
  return (
    axios.defaults.withCredentials = true,
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Banquethalls" element={<Banquethalls />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path='/Login' element={<LoginUser />} />
          <Route path='/SignupUser' element={<SignupUser />} />
          <Route path="/Mybooking" element={<Mybooking />} />
          <Route path="/Reviews" element={<Reviews />} />
          <Route path="/Venuecard" element={<Venuecard />} />
          <Route path="/Venue" element={<Venue />} />
          <Route path='/HelloPage' element={<HelloPage/>}/>
          <Route path="/*" element={<Notfound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
