import React, { useState, useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import "./Navbar.css";

export default function Navbar() {
  const [isActive, setIsActive] = useState(false);
  const navbarWrapperRef = useRef(null);

  const clickHandler = () => {
    setIsActive((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navbarWrapperRef.current && !navbarWrapperRef.current.contains(event.target)) {
        setIsActive((prev) => !prev);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <div className="navbar">
        <div className="navbarWarpper" ref={navbarWrapperRef}>
          <div className="navbarLeft">
            <NavLink to="/">Reza Barzakhi</NavLink>
          </div>
          <div className={`navbarRight ${isActive ? "isActive" : ""} `}>
            <NavLink className={(link) => (link.isActive ? "active" : "")} to="/articles" onClick={clickHandler}>
              Articles
            </NavLink>
            <NavLink to="/about" onClick={clickHandler}>
              About
            </NavLink>
            <NavLink to="/contact" onClick={clickHandler}>
              Contact
            </NavLink>
            <a href="javascript:void(0);" className="menuIcon" onClick={clickHandler}>
              {isActive ? <CloseIcon /> : <MenuIcon />}
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
