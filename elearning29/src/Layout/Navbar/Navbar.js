import React, { Component } from "react";
import "../../sass/Layout/_myNavbar.scss";
import Cart from "./Cart/Cart";
import NavbarButton from "./NavbarButton";
import MenuItem from "./MenuItem";
import { Link, NavLink } from "react-router-dom";
import { connect } from "react-redux";
import NavbarUser from "./NavbarUser";

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
              <Link to="/home">
                <img src="./img/logo-black.png" alt="..." />
              </Link>
            </div>
            <div className="col-xl-6 col-lg-5 col-md-6 col-sm-6">
              <div
                className="collapse navbar-collapse"
                id="navbarTogglerDemo03"
              >
                <ul className="navbar-nav m-auto mt-2 mt-lg-0">
                  <li className="nav-item">
                    <NavLink
                      activeClassName="text_green"
                      exact
                      to="/"
                      className="nav-link"
                      href="./index.html"
                    >
                      Home
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      activeClassName="text_green"
                      to="/detail"
                      className="nav-link"
                      href=""
                    >
                      Course Detail
                    </NavLink>
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
                  {/* kiểm tra tồn tại credentials trên UserReducer
                      !null => hiển thị component User ở navbar, null => hiển thị button
                  */}
                  {this.props.credentials ? <NavbarUser /> : <NavbarButton />}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

const mapStateToProps = state => ({
  credentials: state.User.credentials
});

export default connect(mapStateToProps, null)(Navbar);
