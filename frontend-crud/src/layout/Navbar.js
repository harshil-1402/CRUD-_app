import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      {/* Apply gradient background to the body */}
      <style>
        {`
          body {
            margin: 0;
            padding: 0;
            font-family: 'Roboto', sans-serif; /* Add a suitable font-family */
          }

          body::before {
            content: '';
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: -1;
            background: linear-gradient(to bottom, #A8EDEA, #FED6E3); 
          }
        `}
      </style>

      <nav className="navbar navbar-expand-lg navbar-dark bg-danger">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Full Stack Application demonstrating CRUD operations
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <Link className="btn btn-outline-light" to="/adduser">
            Add User
          </Link>
        </div>
      </nav>
    </div>
  );
}
