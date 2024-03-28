
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
import LoginOwner from './pages/LoginOwner';
import LoginFinder from './pages/LoginFinder';
import SignupFinder from './pages/SignupFinder';
import SignupOwner from './pages/SignupOwner';

function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/About" element={<About/>}/>
      <Route path="/Banquethalls" element={<Banquethalls/>}/>
      <Route path="/Contact" element={<Contact/>}/>
      <Route path='/LoginOwner' element={<LoginOwner/>}/>
      <Route path='/LoginFinder' element={<LoginFinder/>}/>
      <Route path='/SignupFinder' element={<SignupFinder/>}/>
      <Route path='/SignupOwner' element={<SignupOwner/>}/>
      <Route path="/Mybooking" element={<Mybooking/>}/>
      <Route path="/Reviews" element={<Reviews/>}/>
      <Route path="/Venuecard" element={<Venuecard/>}/>
      <Route path="/Venue" element={<Venue/>}/>
      <Route path="/*" element={<Notfound/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
    </>
  );
}

export default App;
