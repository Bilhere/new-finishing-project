/* eslint-disable no-unused-vars */
import React from 'react';
import {Routes, Route, NavLink } from "react-router-dom";
import { SiteRoutes as ExternalSiteRoutes } from "react-router-dom";
import Home from "./pages/Home";
import Beachs from "./pages/Beachs";

function SiteRoutes () {
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