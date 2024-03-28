import { useState } from 'react'
import './App.css'

import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { motion } from "framer-motion"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className="text-3xl font-bold underline w-100 flex justify-center">
        Hello world!
      </h1>
    </>
  )
}

export default App
