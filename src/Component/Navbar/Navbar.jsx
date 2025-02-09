import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg fixed-top p-4 shadow-sm">
      <div className="container">
        <NavLink className="navbar-brand" to=" ">
          <h2 className="text-light">Mahmoud Elgohary</h2>
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink to="/home" className="nav-link text-light fs-5">
                HOME
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/about" className="nav-link text-light fs-5">
                ABOUT
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/portfolio" className="nav-link text-light fs-5">
                PORTFOLIO
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/contact" className="nav-link text-light fs-5">
                CONTACT
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
