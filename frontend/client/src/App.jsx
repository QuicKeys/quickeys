import './App.css';
import { useEffect } from 'react';
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from 'framer-motion';

import Navigation from './components/Navigation';
import Footer from './components/Footer';

import Home from './components/pages/Home';
import Build from './components/pages/Build';
import Shop from './components/pages/Shop';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import LogIn from './components/pages/LogIn';
import SignUp from './components/pages/SignUp';
import Item from './components/pages/Item';
import Cart from './components/pages/Cart';
import CheckOut from './components/pages/CheckOut';
import Profile from './components/pages/Profile';
import Error from './components/pages/Error';

function App() {

  const location = useLocation();

  useEffect(() => {
    const pageTitles = {
      '/' : 'Home',
      '/Build' : 'Keyboard Builder',
      '/Shop' : 'Shop',
      '/About' : 'About Us',
      '/Contact-Us' : 'Contact Us',

      '/Log-In' : 'Log In',
      '/Sign-Up' : 'Create Account',

      '/Cart' : 'My Cart',
      '/Profile' : 'My Profile',
      '/*' : '404 ERROR'
    }

    if (!location.pathname.startsWith('/Item/')) {
      document.title = pageTitles[location.pathname] ? `${pageTitles[location.pathname]} – QuicKeys™` : '404 Page Not Found – QuicKeys™';
    }
  });

  return (
    <div className="flex flex-col min-h-screen">
      <div className="fixed top-0 w-full z-50">
        <Navigation/>
      </div>
      <div className="flex-1">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/Build" element={<Build />} />
            <Route path="/Shop" element={<Shop />} />
            <Route path="/About" element={<About />} />
            <Route path="/Contact-Us" element={<Contact />} />

            <Route path="/Log-In" element={<LogIn />} />
            <Route path="/Sign-Up" element={<SignUp />} />

            <Route path="/Item/:itemId" element={<Item />} />
            <Route path="/Cart" element={<Cart />} />
            <Route path="/Check-Out" element={<CheckOut />} />
            <Route path="/Profile" element={<Profile />} />

            <Route path="*" element={<Error />} />
          </Routes>
        </AnimatePresence>
      </div>
      <Footer className="w-full" />
    </div>
  )
}

export default App;