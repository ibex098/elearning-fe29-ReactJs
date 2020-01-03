import React, { Component } from "react";

class SocialNetwork extends Component {
  render() {
    return (
      <section className="socialNetwork">
        <div className="container">
          <div className="row">
            <div
              className="col-12 socialNetwork__content"
              style={{ marginTop: "-40px" }}
            >
              <ul className="list-inline d-inline-block py-2 px-4 bg_white rounded-pill">
                <li className="list-inline-item">
                  <span className="d-none d-md-inline-block h6">
                    Share this course:
                  </span>
                </li>
                <li className="list-inline-item mx-1">
                  <a href="/" className=" btn_outline_green iconbox ">
                    <i className="fab fa-facebook-f" />
                  </a>
                </li>
                <li className="list-inline-item mx-1">
                  <a href="/" className=" btn_outline_green iconbox">
                    <i className="fab fa-twitter" />
                  </a>
                </li>
                <li className="list-inline-item mx-1">
                  <a href="/" className=" btn_outline_green iconbox ">
                    <i className="fab fa-linkedin-in" />
                  </a>
                </li>
                <li className="list-inline-item mx-1">
                  <a href="/" className=" btn_outline_green iconbox ">
                    <i className="fab fa-google-plus-g" />
                  </a>
                </li>
              </ul>
              <a href="/" className="iconbox socialNetwork__heart">
                <i className="fa fa-heart" />
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default SocialNetwork;
