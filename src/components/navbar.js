import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-sm fixed-top bg-white">
      <div className="container">
        <Link to="/" className="navbar-brand text-dark font-weight-bold">
          Abhishek Dubey
        </Link>

        <Link to="/Contact" className=" ml-auto mx-3">
        <button className="btn btn btn-outline-info ">Contact Me</button>
        </Link>
        <button
          className="navbar-toggler"
          data-toggle="collapse"
          data-target="#collapsenav"
        >
          <span className="fas fa-bars text-dark"></span>
        </button>
        <div
          className="collapse navbar-collapse flex-grow-0 jus"
          id="collapsenav"
        >
          <div className="navbar-nav">
            <Link
              to="/All/My/Blogs"
              className="nav-item nav-link text-dark h6 mx-1 my-auto"
            >
              Blogs
            </Link>
            <Link
              to="/All/My/Projects"
              className="nav-item nav-link text-dark h6 mx-1 my-auto"
            >
              Projects
            </Link>
            <Link
              to="/"
              className="nav-item nav-link text-dark h6 mx-1 my-auto"
            >
              Achievements
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
