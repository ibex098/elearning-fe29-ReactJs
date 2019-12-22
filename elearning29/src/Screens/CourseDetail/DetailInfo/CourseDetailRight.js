import React, { Component } from "react";

class CourseDetailRight extends Component {
  render() {
    return (
      <aside className="col-lg-3 courseDetails__right">
        <div className="card border  mt-5 shadow_1">
          <h4 className="card-header border-bottom mb-0 h6">Choose Category</h4>
          <ul className="card-body list-unstyled mb-0 p-4">
            <li className="mb-2">
              <a href>All Courses</a>
            </li>
            <li className="mb-2">
              <a href>Web Development</a>
            </li>
            <li className="mb-2">
              <a href>Mobile Apps</a>
            </li>
            <li className="mb-2">
              <a href>Business</a>
            </li>
            <li className="mb-2">
              <a href>IT &amp; Software</a>
            </li>
            <li className="mb-2">
              <a href>Data Science</a>
            </li>
            <li className="mb-2">
              <a href>Design</a>
            </li>
            <li className="mb-2">
              <a href>Marketing</a>
            </li>
          </ul>
        </div>
        <div className="card border  mt-5 shadow_1">
          <h4 className="card-header border-bottom mb-0 h6">Filter By</h4>
          <ul className="card-body list-unstyled mb-0 p-4">
            <li className="mb-2">
              <a href>All Courses</a>
            </li>
            <li className="mb-2">
              <a href>Featured Courses</a>
            </li>
            <li className="mb-2">
              <a href>Popular Courses</a>
            </li>
            <li className="mb-2">
              <a href>Starting Soon</a>
            </li>
            <li className="mb-2">
              <a href>Intermediate</a>
            </li>
            <li className="mb-2">
              <a href>Advanced</a>
            </li>
          </ul>
        </div>
        <div className="card border  mt-5 shadow_1">
          <h4 className="card-header border-bottom mb-0 h6">By Cost</h4>
          <ul className="card-body list-unstyled mb-0 p-4">
            <li className="mb-2">
              <a href>All Courses</a>
            </li>
            <li className="mb-2">
              <a href>Paid Courses</a>
            </li>
            <li className="mb-2">
              <a href>Free Courses</a>
            </li>
          </ul>
        </div>
      </aside>
    );
  }
}

export default CourseDetailRight;
