import React from "react";
import { Link } from "react-router-dom";
import logo from "../../src/favicon.ico.png";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <Link to="/" className="logo-text">
          <h1>
            Cocktails <span> Recipes </span>
          </h1>
        </Link>
      </div>
      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
