import React from 'react'
import "./Main.css"
import { Routes, Route } from 'react-router-dom'
import Home from './Home/Home'
import Contact from "./Contact/Contact";
import About from "./About/About";
import Signup from "./Signup/Signup";
import Cart from "./Cart/Cart";



function Main() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/About" element={<About />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Cart" element={<Cart />} />
      </Routes>
    </div>
  )
}

export default Main