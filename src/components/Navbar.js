import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <NavLink className="navbar-brand fs-2 mx-4" to="/">Tourism Spot</NavLink>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <NavLink className="nav-link fs-5 mx-4" activeClassName="active" to="/auth">Login/Signup</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link fs-5" activeClassName="active" to="/book-tour">Book Tour</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
