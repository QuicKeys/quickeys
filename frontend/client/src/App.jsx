import { useState } from 'react';
import './App.css';

import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

import { Route, Routes, useLocation } from "react-router-dom";
import Navigation from './components/Navigation';
import Footer from './components/Footer';

import Home from './components/pages/Home';
import Build from './components/pages/Build';
import Shop from './components/pages/Shop';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Item from './components/pages/Item';
import Profile from './components/pages/Profile';

import LogIn from './components/pages/LogIn';
import SignUp from './components/pages/SignUp';

import Cart from './components/pages/Cart';

import { AnimatePresence } from 'framer-motion';

function App() {

  const location = useLocation();

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
            <Route path="/Profile" element={<Profile />} />
          </Routes>
        </AnimatePresence>
      </div>
      <Footer className="w-full" />
    </div>
  )
}

export default App;