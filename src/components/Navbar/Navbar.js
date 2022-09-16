import React from "react";
import "./Navbar.css";
import { Link, NavLink, Outlet } from "react-router-dom";
import { removeToken } from "../Helper/useToken";


function Navbar() {
  return (
    <>
      <div className="navbar">
        <Link to="/">Dashboard</Link>
        <Link to="AllProducts">All Products</Link>
        <NavLink onClick={removeToken}>Logout</NavLink>
      </div>
      <Outlet />
    </>
  );
}

export default Navbar;
