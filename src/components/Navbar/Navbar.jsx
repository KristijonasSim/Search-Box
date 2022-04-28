import React from 'react'
import logo from './logo.svg'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <nav>
      <div className='navbar-components'>
        <Link to='/'>
          <img src={logo} alt="logo" className='logo'/>
        </Link>
        <ul className='links'>
          <li>
            <Link to="/">home</Link>
          </li>
           <li>
            <Link to="/About">About</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
