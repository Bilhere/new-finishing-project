/* eslint-disable no-unused-vars */

import React from 'react';

import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";

import Home from "../pages/Home";
import Beachs from "../pages/Beachs";


function Navbar () {
    return (
      <>
        <nav className="navbar-dark bg-primary navbar-expand-lg">
          <div className="container">
            <a className="navbar-brand" href="#">
              <img
                src="https://www.bursa.bel.tr/assets/images/logo_beyaz1.png"
                alt="Logo"
                width="250px"
              />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav"></ul>
            </div>
          </div>
        </nav>
        <BrowserRouter>
          <NavLink
            to="/"
            className="nav-link"
            style={({ isActive }) => ({
              color: isActive ? "blue" : "black",
            })}
          >
            Home
          </NavLink>
          <NavLink
            to="/Beachs"
            className="nav-link"
            style={({ isActive }) => ({
              color: isActive ? "blue" : "black",
            })}
          >
            Beachs
          </NavLink>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/Beachs" element={<Beachs />} />
          </Routes>
        </BrowserRouter>
      </>
    );
}
export default Navbar