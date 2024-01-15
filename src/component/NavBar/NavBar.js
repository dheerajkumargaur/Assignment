import React from "react";
import { NavLink } from "react-router-dom";
import "./NavStyle.css";

const NavBar = () => {
  return (
    
    <div className="navigation">
      <nav className="navbar">
        <div className="container">
          <NavLink className="navbar-brand" to="/">
            DSCI ShopKart
          </NavLink>
            <NavLink className="nav-link" to="/contact">
              Contact us
            </NavLink>
            <NavLink className="nav-link" to="/about">
              About
            </NavLink>
            <NavLink className="nav-link" to="/">
              Home
            </NavLink>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
