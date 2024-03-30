import { useState } from 'react';
import './App.css';

import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { motion } from "framer-motion";

import { Route, Routes } from "react-router-dom";
import Navigation from './components/Navigation';
import Footer from './components/Footer';

import Home from './components/pages/Home';
import Build from './components/pages/Build';
import Shop from './components/pages/Shop';
import About from './components/pages/About';
import Contact from './components/pages/Contact';

import LogIn from './components/pages/LogIn';
import SignUp from './components/pages/SignUp';

import Cart from './components/pages/Cart';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="fixed top-0 w-full z-50">
        <Navigation/>
      </div>
      <div className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Build" element={<Build />} />
          <Route path="/Shop" element={<Shop />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact-Us" element={<Contact />} />

          <Route path="/Log-In" element={<LogIn />} />
          <Route path="/Sign-Up" element={<SignUp />} />

          <Route path="/Cart" element={<Cart />} />
        </Routes>
      </div>
      <Footer className="w-full" />
    </div>
  )
}

export default App;