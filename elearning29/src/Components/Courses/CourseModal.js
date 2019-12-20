import React, { Component } from "react";

class CourseModal extends Component {
  render() {
    return (
      <div className="course__info text-inherit">
        <div className="info__content p-4">
          <p>Last updated: 12/2016</p>
          <h5 className="my-4 course__title">
            <a href=".">Node.js, Express &amp; MongoDB Dev to Deployment</a>
          </h5>
          <div className="info__view">
            <ul className="list-unstyled">
              <li>
                <i className="fa fa-headphones-alt" />
                12 Lectures
              </li>
              <li>
                <span className="lnr lnr-clock" />
                27.5 hours
              </li>
              <li>
                <i className="fa fa-sliders-h" />
                All Levels
              </li>
            </ul>
          </div>
          <p className="info__des">
            Management Skills Certification in Developing People, Leading Teams
            &amp; Process Improvement Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Quisquam, numquam. Lorem ipsum dolor sit amet.
          </p>
          <button className="btn_blue w-100">ADD TO CART</button>
          <div className="info__footer mt-5">
            <div className="info__heart">
              <span className="lnr lnr-heart" />
              Add To Wishlist
            </div>
            <h4 className="h5">
              <span className="text_green">$180</span>
            </h4>
          </div>
        </div>
      </div>
    );
  }
}

export default CourseModal;
