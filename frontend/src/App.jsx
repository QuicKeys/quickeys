import { useState } from 'react';
import './App.css';

import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { motion } from "framer-motion";

import { Route, Routes } from "react-router-dom";
import Navigation from './components/Navigation';

import Home from './components/pages/Home';
import Build from './components/pages/Build';
import LogIn from './components/pages/LogIn';
import Shop from './components/pages/Shop';
import About from './components/pages/About';
import Contact from './components/pages/Contact';


function App() {
  return (
    <>
      <div className="fixed top-0 w-full">
        <Navigation/>
      </div>
      <Routes>
        <Route path="/" element={ <Home/> }/>
        <Route path="/Build" element={ <Build/> }/>
        <Route path="/Shop" element={ <Shop/> }/>
        <Route path="/About" element={ <About/> }/>
        <Route path="/Contact-Us" element={ <Contact/> }/>

        <Route path="/Log-In" element={ <LogIn/> }/>
      </Routes>
    </>
  )
}

export default App