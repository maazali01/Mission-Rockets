import React from 'react';
import { Link } from 'react-router-dom';
import Header from './header';
import './Navbar.css';

const Navbar = () => (
  <nav className="navBar">
    <Header />
    <ul className="links">
      <li className="link">
        <Link to="/">Home</Link>
      </li>
      <li className="link">
        <Link to="/Missions">Missions</Link>
      </li>
      <li className="link">
        <Link to="/Rockets">Rockets</Link>
      </li>
    </ul>
  </nav>
);

export default Navbar;
