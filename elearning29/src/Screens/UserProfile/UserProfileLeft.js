import React, { Component } from "react";

class UserProfileLeft extends Component {
  render() {
    return (
      <div className="col-lg-4 mt-4 userProfile__left">
        <div className="card shadow_2">
          <div className="card-header text-center border-bottom pt-5 mb-4">
            <img
              className="rounded-circle mb-4"
              src="./img/profile.jpg"
              width={200}
              height={200}
              alt
            />
            <h4>Alex Lebby</h4>
            <p className="text_gray">Front End Developer</p>
            <ul className="list-inline mb-0">
              <li className="list-inline-item m-2">
                <i className="fa fa-shopping-cart text_green" />
                <span className="d-block">Cart</span>
                <span className="h6">123</span>
              </li>
              <li className="list-inline-item m-2">
                <i className="fa fa-book-open text_green" />
                <span className="d-block">Courses</span>
                <span className="h6">27</span>
              </li>
              <li className="list-inline-item m-2">
                <i className="fa fa-heart text_green" />
                <span className="d-block">Wishlist</span>
                <span className="h6">100</span>
              </li>
            </ul>
          </div>
          <div className="card-body border-bottom">
            <ul className="list-unstyled">
              <li className="mb-3">
                <span className="d-block text_gray">Email address:</span>
                <a className="h6 text_black" href="mailto:saifullah@gmail.com">
                  saifullah@gmail.com
                </a>
              </li>
              <li className="mb-3">
                <span className="d-block text_gray">Phone:</span>
                <a className="h6 text_black" href="mailto:saifullah@gmail.com">
                  +91 654 784 547
                </a>
              </li>
              <li className="mb-3">
                <span className="d-block text_gray">Location:</span>
                <a className="h6 text_black" href="mailto:saifullah@gmail.com">
                  South Street, London, UK
                </a>
              </li>
            </ul>
          </div>
          <div className="card-footer">
            <p className="text_gray">Social Profile:</p>
            <ul className="list-inline mb-0">
              <li className="list-inline-item">
                <a href="#" className="btn_outline_fb iconbox_sm">
                  <i className="fab fa-facebook-f" />
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#" className="btn_outline_tw iconbox_sm">
                  <i className="fab fa-twitter" />
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#" className="btn_outline_gg iconbox_sm">
                  <i className="fab fa-google" />
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#" className="btn_outline_linkedin iconbox_sm">
                  <i className="fab fa-linkedin-in" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default UserProfileLeft;
