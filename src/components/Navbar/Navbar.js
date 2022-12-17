import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-links">
        <Link to="/" className="navbar-editor">
          Editor's Pick
        </Link>
        <Link to="/cart" className="navbar-cart">
          Your Item (Bookmark)
        </Link>
      </div>
    </div>
  );
};
