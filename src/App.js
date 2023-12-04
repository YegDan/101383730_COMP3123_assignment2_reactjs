import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Nav from './components/Nav';
import Login from './components/Login';
import Signup from './components/Signup';
import HomeScreen from './components/HomeScreen';
import './App.css'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <Router>
      <Nav isLoggedIn={isLoggedIn} onLogout={handleLogout} />
      <Routes>
        <Route path="Login.jsx" element={<Login onLogin={handleLogin} />} />
        <Route path="Signup.jsx" element={<Signup />} />
        <Route path="HomeScreen.jsx" element={isLoggedIn ? <HomeScreen /> : <Navigate to="Login.jsx" />} />

        <Route path="/" element={<Navigate to="HomeScreen.jsx" />} />
      </Routes>
    </Router>
  );
}

export default App;
