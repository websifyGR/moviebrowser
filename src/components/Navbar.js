import React from 'react';
import { Link } from "react-router-dom";
import WebsifyLogo from "../assets/images/logo_websify_whale.png";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img src={WebsifyLogo} className="websify-logo-navbar-brand" alt="Websify Logo" />
        </Link>
        <div className="navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Αρχική Σελίδα
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
               Case Study
              </Link>
            </li>

          </ul>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
