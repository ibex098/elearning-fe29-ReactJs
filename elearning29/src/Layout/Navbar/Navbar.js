import React, { Component } from "react";
import "../../sass/Layout/_myNavbar.scss";
import Cart from "./Cart/Cart";
import NavbarButton from "./NavbarButton";
import MenuItem from "./MenuItem";

class Navbar extends Component {
  render() {
    return (
      <nav className="myNavbar shadow_1">
        <div className="container">
          <div className="navbar navbar-expand-lg p-0">
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarTogglerDemo03"
              aria-controls="navbarTogglerDemo03"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i className="fa fa-align-justify" />
            </button>
            <div className="navbar-brand col-xl-3 col-lg-3 col-md-3 col-sm-2">
              <a href="./index.html">
                <img src="./img/logo-black.png" alt="..." />
              </a>
            </div>
            <div className="col-xl-6 col-lg-5 col-md-6 col-sm-6">
              <div
                className="collapse navbar-collapse"
                id="navbarTogglerDemo03"
              >
                <ul className="navbar-nav m-auto mt-2 mt-lg-0">
                  <li className="nav-item active">
                    <a className="nav-link" href="./index.html">
                      Home
                    </a>
                  </li>
                  {/* MenuItem */}
                  <MenuItem />
                </ul>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-3 col-sm-4">
              <div
                className="collapse navbar-collapse nav__right"
                id="navbarTogglerDemo03"
              >
                <ul className="navbar-nav navbar-expand-lg ml-auto">
                  {/* Cart */}
                  <Cart />

                  {/* Button */}
                  <NavbarButton />
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
