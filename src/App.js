import React from 'react';
import './App.css'; // Import App.css here
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Client from './components/Client';
import Topbar from './components/Topbar';
import Provide from './components/Provide';
import Onlyimage from './components/Onlyimage';
import Industries from './components/Industries';
import How from './components/How';
import Letsbuild from './components/Letsbuild';
import Expertise from './components/Expertise';
import Portfolio from './components/Portfolio';
import Meettheteam from './components/Meettheteam';
import Testimonials from './components/Testimonials';
import Blogs from './components/Blogs';
import Footer from './components/Footer';
import Copyright from './components/Copyright';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


function App() {
  return (
    <BrowserRouter>
    <Topbar />
    <Navbar /> {/* Navbar will appear on every page */}
    <Banner />
    <Client />
    <Provide />
    <Onlyimage />
    <Portfolio/>
    <Industries />
    <How />
    <Letsbuild />
    <Expertise />
    <Meettheteam />
    <Testimonials />
    <Blogs />
    <Footer />
    <Copyright />
      <Routes>
        {/* <Route path='/' element={<Home />} /> */}
        <Route path='/About' element={<About />} />
        <Route path='/Contact' element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;