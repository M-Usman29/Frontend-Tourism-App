import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Auth from './components/Auth';
import BookTour from './components/BookTour';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/book-tour" element={<BookTour />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
