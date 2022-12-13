import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-links">
        <Link
          to="/"
          style={{
            textDecoration: "none",
            color: "white",
            fontSize: "24px",
            padding: "10px",
          }}
        >
          Shop
        </Link>
        <Link
          to="/cart"
          style={{
            textDecoration: "none",
            color: "white",
            fontSize: "24px",
            padding: "10px",
          }}
        >
          Cart
        </Link>
      </div>
    </div>
  );
};
