import './App.css';
import OverlappingImages from './components/OverlappingImages';
import Navbar from './components/Navbar';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Audio from './pages/Audio';


function App() {
 
  return (
    <BrowserRouter>
      <div className='App'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/audio" element={<Audio />} />

      </Routes>
    </div>
    </BrowserRouter>
    
    
  );
}

export default App;
