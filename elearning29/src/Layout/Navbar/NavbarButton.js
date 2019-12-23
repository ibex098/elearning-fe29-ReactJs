import React, { Component } from "react";
import {Link} from 'react-router-dom'

class NavbarButton extends Component {
  render() {
    return (
      <li className="nav-item nav__button my-auto">
        <Link to="/signin" className="btn_green mr-1 text_white">Login</Link>
        <Link to="/signup" className="btn_red ml-1 text_white">Sign Up</Link>
      </li>
    );
  }
}

export default NavbarButton;
