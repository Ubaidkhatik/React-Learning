
import Navbar from './Navbar.jsx'
import Home from './components/Home.jsx'
import About from './components/about.jsx'
import Contact from './components/Contact.jsx'

import './App.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

    </BrowserRouter>
  )
}

export default App

