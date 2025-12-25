import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home.jsx';
import Projects from './components/Projects.jsx';
import AboutMe from './components/AboutMe.jsx';
import Navbar from './components/Menu.jsx';

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </>
  );
}

export default App
