import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Login from './Components/Login';
import Signup from './Components/SignUp';
import Dashboard from './Components/Dashboard';
import Booking from './Components/Booking';
import "./App.css"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<Dashboard />} />
        <Route path="/Booking" element={<Booking />} />

      </Routes>
    </Router>
  );
}

export default App;
