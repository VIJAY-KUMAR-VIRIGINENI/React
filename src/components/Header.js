import React from 'react';
import {NavLink} from 'react-router-dom';

const Header = () => {
  return (
    <nav className="header-wrapper">
      <div className="logo">
        <NavLink to="/" className="brand">
          Vijay's Website
        </NavLink>
      </div>

      <div className="nav-wrapper">
        <div className="navigation">
          <NavLink to="/about" activeClassName="activeClass">
            About
          </NavLink>

          <NavLink to="/contact" activeClassName="activeClass">
            Contact
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Header;