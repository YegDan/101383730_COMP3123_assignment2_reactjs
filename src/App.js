import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Login from './components/Login';
import Nav from './components/Nav';
import Signup from './components/Signup';
import { useState } from 'react';
import List from './components/List';
import HomeScreen from './components/HomeScreen';

function App() {

  return (
    <div>
    <Router>
        <Nav />
        <Routes>
          <Route path='Login.jsx' Component={Login}/>
          <Route path='Signup.jsx' Component={Signup}/>
          <Route path="HomeScreen.jsx" Component={HomeScreen}/>
        </Routes>
    </Router>

    
    </div>
   
  );
}

export default App;
