import { useState } from 'react';
import './App.css';

import { Route, Routes } from "react-router-dom";

import AdminLogIn from './components/pages/AdminLogIn';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-1">
        <Routes>
          <Route path="/" element={<AdminLogIn />} />
        </Routes>
      </div>
    </div>
  )
}

export default App;