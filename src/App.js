import './App.css';
// import { useState } from 'react';
import Home from './components/Home/Home'
import Navbar from './components/Navbar/Navbar';
import About from './components/About/About';
import Project from './components/Project/Project';
import Contact from './components/Contact/Contact';
import ContactManager from './components/ContactManager/ContactManager';
import { AnimatePresence } from "framer-motion";
import {
  BrowserRouter,
  Routes,
  Route} from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <AnimatePresence>
      <Routes>
      <Route exact path="/" element={<Home/>}/>
        <Route exact path="/about" element={<About/>}/>
        <Route exact path="/projects" element={<Project/>}/>
        <Route exact path="/contact" element={<Contact/>}/>
        <Route exact path="/contactmanager" element={<ContactManager/>}/>
      </Routes>
      </AnimatePresence>
    </BrowserRouter>
  );
}

export default App;
