import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Classes from './pages/Classes.jsx';
import Schedule from './pages/Gallery.jsx';
import Events from './pages/Events.jsx';
import Contact from './pages/Contact.jsx';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/classes" element={<Classes />} />
      <Route path="/schedule" element={<Schedule />} />
      <Route path="/events" element={<Events />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
};

export default App;
