import React, { Component } from "react";
import { connect } from "react-redux";
import { logout } from "../../Redux/Action/UserAction";
import { NavLink } from "react-router-dom";

class NavbarUser extends Component {
  _logout = () => {
    // e.preventDefault();
    console.log(this.props, this.state);
    this.props.dispatch(logout());
  };
  render() {
    return (
      <li className="nav-item ">
        <NavLink
          to="/userprofile"
          className="nav-link p-3 dropdown-toggle"
          data-toggle="dropdown"
        >
          <span>{this.props.credentials.hoTen}</span>
          <img
            className="iconbox iconbox-sm mx-1"
            src="../../img/600px-User_with_smile.png"
            alt="..."
          />
        </NavLink>
        <ul className="dropdown-menu">
          <li>
            <NavLink to="/userprofile" className="dropdown-item">
              <i className="fa fa-user mr-2" />
              <span className="mr-2">My profile</span>
            </NavLink>
          </li>
          <li>
            <a className="dropdown-item" href=".">
              <i className="fa fa-envelope mr-2" />
              <span className="mr-2">Message</span>
              <span className="badge badge-success ml-auto">78</span>
            </a>
          </li>
          <li>
            <a className="dropdown-item" href=".">
              <i className="fa fa-cog mr-2" />
              <span className="mr-2">Another Action</span>
              <span className="badge badge-success ml-auto">27</span>
            </a>
          </li>
          <div className="dropdown-divider" />
          <li>
            <a href="/" className="dropdown-item" onClick={this._logout}>
              <i className="fa fa-sign-out-alt mr-2" />
              <span className="mr-2">Logout</span>
            </a>
          </li>
        </ul>
      </li>
    );
  }
}

const mapStateToProps = state => {
  return {
    credentials: state.User.credentials
  };
};

export default connect(mapStateToProps, null)(NavbarUser);
