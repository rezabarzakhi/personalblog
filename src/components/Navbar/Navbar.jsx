import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <>
      <div className="navbar">
        <div className="navbarWarpper">
          <div className="navbarLeft">
            <NavLink to="/" >Reza Barzakhi</NavLink>
            </div>
          <div className="navbarRight">
                <NavLink className={(link) => link.isActive ? "active" : "" } to="/articles">Articles</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/contact">Contact</NavLink>
          </div>
        </div>
      </div>
    </>
  );
}
