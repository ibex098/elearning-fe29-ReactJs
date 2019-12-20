import React, { Component } from "react";

class NavbarButton extends Component {
  render() {
    return (
      <li className="nav-item nav__button my-auto">
        <button className="btn_green mr-1">Login</button>
        <button className="btn_red ml-1">Sign Up</button>
      </li>
    );
  }
}

export default NavbarButton;
