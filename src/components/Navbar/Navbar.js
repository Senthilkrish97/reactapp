import React from "react";
import "./Navbar.css";
import { Link, Outlet } from "react-router-dom";
import { removeToken } from "../Helper/useToken";

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <Link to="/">Dashboard</Link>
        <Link to="/AllProducts">AllProducts</Link>
        <a href="/" style={{ float: "right" }} onClick={removeToken}>
          Logout
        </a>
      </div>
      <Outlet />
    </>
  );
};


export default Navbar;
