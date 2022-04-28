import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import pages
import About from './components/About/About'
// import components
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home.js/Home';
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='about' element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
