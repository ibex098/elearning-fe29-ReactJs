import React, { Component } from "react";
import "../sass/Layout/_header.scss";

class Header extends Component {
  render() {
    return (
      <header className="myHeader">
        <div className="container">
          <div className="row align-items-center justify-content-between mx-0">
            <ul className="list-inline d-none d-lg-block mb-0 header__item">
              <li className="list-inline-item mr-3">
                <div className="d-flex align-items-center">
                  <i className="fa fa-envelope" />
                  <a href="mailto:support@educati.com" className="ml-2">
                    support@educati.com
                  </a>
                </div>
              </li>
              <li className="list-inline-item mr-3">
                <div className="d-flex align-items-center">
                  <i className="fa fa-headphones-alt" />
                  <a href="tel:+84924444740" className="ml-2">
                    +84924444740
                  </a>
                </div>
              </li>
            </ul>
            <ul className="list-inline mb-0 header__item">
              <li className="list-inline-item mr-0 p-3 border-right border-left border-white-0_1">
                <a href="...">
                  <i className="fab fa-facebook-f" />
                </a>
              </li>
              <li className="list-inline-item mr-0 p-3 border-right border-white-0_1">
                <a href="...">
                  <i className="fab fa-twitter" />
                </a>
              </li>
              <li className="list-inline-item mr-0 p-3 border-right border-white-0_1">
                <a href="...">
                  <i className="fab fa-vimeo-v" />
                </a>
              </li>
              <li className="list-inline-item mr-0 p-3 border-right border-white-0_1">
                <a href="...">
                  <i className="fab fa-linkedin-in" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
