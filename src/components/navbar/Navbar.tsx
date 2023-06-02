import { Link } from 'react-router-dom'
import './navbar.css'
import React from 'react';

const MyNavbar: React.FC = () => {
  return (
    <div className='navbar'>
      <div className='navbar-links'>
        <Link to="/">Home </Link>
        <Link to="/bio">Bio </Link>
        <Link to="/compositions">Compositions </Link>
        <Link to="/audio">Audio </Link>
        <Link to="/gallery">Gallery </Link>
        <Link to="/lessons">Lessons </Link>
      </div>
    </div>
  )
}

export default MyNavbar;