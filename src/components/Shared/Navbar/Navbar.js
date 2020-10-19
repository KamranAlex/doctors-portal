import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className='navbar navbar-expand-lg navbar-light'>
      <button
        className='navbar-toggler'
        type='button'
        data-toggle='collapse'
        data-target='#navbarSupportedContent'
        aria-controls='navbarSupportedContent'
        aria-expanded='false'
        aria-label='Toggle navigation'
      >
        <span className='navbar-toggler-icon'></span>
      </button>

      <div className='collapse navbar-collapse' id='navbarSupportedContent'>
        <ul className='navbar-nav ml-auto'>
          <li className='nav-item '>
            <Link to='/' className='nav-link mr-5'>
              Home
            </Link>
          </li>
          <li className='nav-item'>
            <Link className='nav-link mr-5' to='/'>
              About
            </Link>
          </li>
          <li className='nav-item'>
            <Link className='nav-link mr-4' to='/'>
              Blogs
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/appointment' className='nav-link mr-4 text-white'>
              Get Appointment
            </Link>
          </li>

          <li className='nav-item'>
            <Link
              to='/dashboard/appointment'
              className='nav-link mr-4 text-white'
            >
              Dashboard
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/login' className='nav-link mr-4 text-white'>
              Login
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
