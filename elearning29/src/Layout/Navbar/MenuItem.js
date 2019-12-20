import React, { Component } from "react";

class MenuItem extends Component {
  render() {
    return (
      <li className="nav-item dropdown">
        <a
          className="nav-link dropdown-toggle"
          href="..."
          data-toggle="dropdown"
          id="navbarDropdown"
          role="button"
          aria-haspopup="true"
          aria-expanded="false"
        >
          Courses
        </a>
        <ul className="dropdown-menu" id="navbarDropdown">
          <li>
            <a href="page-sp-all-courcess.html" className="nav-link__list">
              All Courses
            </a>
          </li>
          <li>
            <a href="page-sp-all-courcess-list.html" className="nav-link__list">
              Courses List
            </a>
          </li>
          <li>
            <a
              href="page-sp-all-courcess-with-sidebar.html"
              className="nav-link__list"
            >
              Courses Grid
            </a>
          </li>
        </ul>
      </li>
    );
  }
}

export default MenuItem;
