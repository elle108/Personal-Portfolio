import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home.jsx';
import Projects from './components/Projects.jsx';
import AboutMe from './components/AboutMe.jsx';
import Navbar from './components/Menu.jsx';
import Contact from './components/Contact.jsx';
import Login from './components/Login.jsx';
import Admin from './components/Admin.jsx';

// Main application component with routing
function App() {
  return (
    <>
      <Navbar />
      <main className="pt-24 px-6">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
      </main>
    </>
  );
}

export default App
