import React from "react";
import { BrowserRouter as Router, NavLink, Route } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav
        className="navbar is-transparent"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="navbar-brand">
          <NavLink
            className="navbar-item"
            to={`/Home`}
            activeClassName="active-link"
          >
            <img
              src="https://bulma.io/images/bulma-logo.png"
              width="112"
              height="28"
              alt="logo"
            />
          </NavLink>

          <a
            role="button"
            className="navbar-burger burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </a>
        </div>

        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-start">
            <NavLink
              className="navbar-item"
              to={`/Home`}
              activeClassName="active-link"
            >
              Home
            </NavLink>

            <a className="navbar-item">Documentation</a>

            <div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-link">More</a>

              <div className="navbar-dropdown">
                <NavLink
                  className="navbar-item"
                  to={`/About`}
                  activeClassName="active-link"
                >
                  About
                </NavLink>
                {/* <a className="navbar-item">About</a> */}
                <NavLink className="navbar-item" to={`/Jobs`}>
                  Jobs
                </NavLink>
                <a className="navbar-item">Contact</a>
                <hr className="navbar-divider" />
                <a className="navbar-item">Report an issue</a>
              </div>
            </div>
          </div>

          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                <a className="button is-primary">
                  <strong>Sign up</strong>
                </a>
                <NavLink className="button is-light" to={`/Login`}>
                  Log in
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
