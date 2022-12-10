import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-links">
        <Link to="/">Shop</Link>
        <Link to="/cart">Cart</Link>
      </div>
    </div>
  );
};
