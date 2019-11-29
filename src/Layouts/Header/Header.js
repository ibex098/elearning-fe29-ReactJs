import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <header className="myNavbar">
        <nav className="navbar navbar-expand-lg navbar-light container">
          <div className="col-xl-6 col-lg-9 col-md-8 col-sm-6">
            <div className="row">
              <a className="navbar-brand" href="#">
                <img src="./img/logo-coral.svg" alt="logo" />
              </a>
              <div className="categories">
                <i className="fa fa-th" />
                Categories
              </div>
              <div className="input__search">
                <form action>
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search for Courses"
                      aria-label="Username"
                      aria-describedby="basic-addon1"
                    />
                    <div className="input-group-prepend">
                      <span className="input-group-text" id="basic-addon1">
                        <i className="fa fa-search" />
                      </span>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div
            className="col-xl-6 col-lg-3 col-md-4 col-sm-4"
            style={{ marginTop: "-4px" }}
          >
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav">
                <li className="nav-item bussiness">
                  <a className="nav-link" href="#">
                    Udemy for Business
                  </a>
                </li>
                <li className="nav-item instrucstor">
                  <a className="nav-link" href="#">
                    Becom an Instructor
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <i className="fa fa-shopping-cart" />
                  </a>
                </li>
                <li className="nav-item">
                  <div className="button">
                    <button className="btn btn__white mr-1">Login</button>
                    <button className="btn btn__red">Sign Up</button>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <button
            className="navbar-toggler col-sm-2"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
        </nav>
      </header>
    );
  }
}

export default Header;
