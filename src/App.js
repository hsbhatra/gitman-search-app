import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* Search results route will be added later */}
          <Route path="/search" element={<div>Search Results Page - Coming Soon</div>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
