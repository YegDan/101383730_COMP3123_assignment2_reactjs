import React from 'react'
import { Link } from 'react-router-dom'


export default function Nav() {
  return (
    <nav>
        <Link to="Login.jsx">Login</Link>
        <Link to="Signup.jsx">Sign Up</Link>
        <Link to="HomeScreen.jsx">Home</Link>

    </nav>
  )
}
