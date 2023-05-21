import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import "./Navbar.css";

export default function Navbar() {
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <div className="navbar">
        <div className="navbarWarpper">
          <div className="navbarLeft">
            <NavLink to="/">Reza Barzakhi</NavLink>
          </div>
          <div className={`navbarRight ${isActive ? "isActive" : ""} `}>
            <NavLink className={(link) => (link.isActive ? "active" : "")} to="/articles">
              Articles
            </NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/contact">Contact</NavLink>
            <a href="javascript:void(0);" className="menuIcon" onClick={() => setIsActive((prev) => !prev)}>
              {isActive ? <CloseIcon /> : <MenuIcon />}
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
