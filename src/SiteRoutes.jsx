/* eslint-disable no-unused-vars */
import React from 'react';
import { SiteRoutes, Routes, Route, NavLink } from "react-router-dom";

import Home from "./pages/Home";
import Beachs from "./pages/Beachs";

function SiteRouter () {
    return (
      <SiteRoutes>
        <NavLink
          to="/"
          className="nav-link"
          style={({ isActive }) => ({
            color: isActive ? "white" : "lightgray",
          })}
        >
          Home
        </NavLink>
        <NavLink
          to="/Beachs"
          className="nav-link"
          style={({ isActive }) => ({
            color: isActive ? "white" : "lightgray",
          })}
        >
          Beachs
        </NavLink>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/Beachs" element={<Beachs />} />
        </Routes>
      </SiteRoutes>
    );
}
export default SiteRoutes;