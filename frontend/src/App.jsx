import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Logo from './components/Logo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <h1 className='text-3xl font-bold underline'>
      <Logo />
    </h1>
  )
}

export default App
