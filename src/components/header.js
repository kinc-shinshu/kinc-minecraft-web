import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";

const Header = ({ siteTitle }) => (
  <header>
    <nav
      className="navbar is-transparent is-dark is-fixed-top is-hidden-touch"
      style={{ backgroundColor: "rgba(0,0,0,0.3)" }}
    >
      <div className="navbar-menu container">
        <div className="navbar-start">
          <Link className="navbar-item" to="/">
            Home
          </Link>
          <a className="navbar-item" href="/dynmap">
            Dynmap
          </a>
        </div>
      </div>
    </nav>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
