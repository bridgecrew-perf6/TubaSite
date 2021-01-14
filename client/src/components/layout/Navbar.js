import React, { Component } from "react";
import { Link } from "react-router-dom";


class Navbar extends Component {
  render() {
    return (
      <div className="navbar-fixed"style={{marginright: "35vw" }} >
        <nav className="z-depth-0">
          <div className="nav-wrapper white"  >
            <Link
              to="/"
              className="col s5 brand-logo center black-text"
              style={{
                fontFamily: "monospace",
                fontSize: 40,
                color: "red"
              }}
            >
              <i className="material-icons">rate_review</i>
              TubaSite
            </Link>
          </div>
        </nav>
      </div>
    );
  }
}
export default Navbar;