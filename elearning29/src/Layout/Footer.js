import React, { Component } from "react";
import "../sass/Layout/_footer.scss";

class Footer extends Component {
  render() {
    return (
      <footer className="myFooter">
        <div className="footer__Top pt-5" style={{ paddingBottom: "6.25rem" }}>
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-6 mt-5">
                <img src="./img/logo-white1.png" alt="Logo" />
                <div className="footer__text my-4">
                  <p>
                    Nunc placerat mi id nisi interdm they mtolis. Praesient is
                    haretra justo ught scel erisque placer.
                  </p>
                </div>
                <ul className="footer__social" style={{ listStyle: "none" }}>
                  <li className="social__item">
                    <a href="." className="iconbox">
                      <i className="fab fa-facebook-f" />
                    </a>
                  </li>
                  <li className="social__item">
                    <a href="." className="iconbox">
                      <i className="fab fa-twitter" />
                    </a>
                  </li>
                  <li className="social__item">
                    <a href="." className="iconbox">
                      <i className="fab fa-linkedin-in" />
                    </a>
                  </li>
                  <li className="social__item">
                    <a href="." className="iconbox">
                      <i className="fab fa-pinterest-p" />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-3 col-md-6 mt-5 footer__contact">
                <h4 className="text-white">Contact Us</h4>
                <div className="bottom_line mt-3" />
                <ul
                  className="contact__list mt-4"
                  style={{ listStyle: "none" }}
                >
                  <li className="contact__item footer__text">
                    <i className="fa fa-headphones-alt mr-3" />
                    <a href="." className="myLink footer__text">
                      800 567.890.576
                    </a>
                  </li>
                  <li className="contact__item footer__text">
                    <i className="fa fa-envelope mr-3" />
                    <a href="." className="myLink footer__text">
                      support@educati.com
                    </a>
                  </li>
                  <li className="contact__item footer__text">
                    <div className="contact__location">
                      <i className="fa fa-map-marker-alt pt-1 mr-3" />
                      <div className="location__body">
                        <span>
                          184 Main Collins Street Chicago, United States
                        </span>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="col-lg-2 col-md-6 mt-5 footer__quickLinks">
                <h4 className="text-white">Quick links</h4>
                <div className="bottom_line mt-3" />
                <ul
                  className="quickLink__list mt-4"
                  style={{ listStyle: "none" }}
                >
                  <li className="quickLink__item footer__text">
                    <a href="." className="myLink footer__text">
                      About Us
                    </a>
                  </li>
                  <li className="quickLink__item footer__text">
                    <a href="." className="myLink footer__text">
                      Contact Us
                    </a>
                  </li>
                  <li className="quickLink__item footer__text">
                    <a href="." className="myLink footer__text">
                      Students
                    </a>
                  </li>
                  <li className="quickLink__item footer__text">
                    <a href="." className="myLink footer__text">
                      Admission
                    </a>
                  </li>
                  <li className="quickLink__item footer__text">
                    <a href="." className="myLink footer__text">
                      Events
                    </a>
                  </li>
                  <li className="quickLink__item footer__text">
                    <a href="." className="myLink footer__text">
                      Latest News
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-4 col-md-6 mt-5 footer_newLatter">
                <h4 className="text-white">Newslatter</h4>
                <div className="bottom_line mt-3" />
                <div className="mt-4">
                  <p className="footer__text">
                    Subscribe to get update and information. Don't worry, we
                    won't send spam!
                  </p>
                  <form>
                    <div className="input-group">
                      <input
                        type="text"
                        placeholder="Enter your email"
                        className="form-control py-3 border-white"
                        required
                      />
                      <div className="input-group-append">
                        <button className="btn_green" type="submit">
                          Subscribe
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer__bottom py-5 text-center">
          <div className="container">
            <p className="mb-0">
              © 2019 Educati. All rights reserved. Created by
              <a href="." className="myLink">
                Nhan Nguyen
              </a>
            </p>
          </div>
        </div>
        <a href="." className="backtotop cd-top text-replace js-cd-top">
          <span className="lnr lnr-chevron-up" />
        </a>
      </footer>
    );
  }
}

export default Footer;
