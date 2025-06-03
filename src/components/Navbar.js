import React from 'react'
import { Link } from 'react-router-dom'
import '../navbar.css'

const Navbar = () => {
  return (
    <nav className="navbar">
  <div className="container">
    <div className="logo">
      <Link to="/">InsureNow</Link>
    </div>
    <ul className="nav-links">
      <li><Link to="/signin">Sign In</Link></li>
      <li><Link to="/signup" className="signup-btn">Sign Up</Link></li>
    </ul>
  </div>
</nav>

  )
}

export default Navbar
