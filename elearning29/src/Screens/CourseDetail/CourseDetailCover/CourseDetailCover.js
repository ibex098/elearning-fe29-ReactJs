import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class CourseDetailCover extends Component {
  render() {
    let params = this.props.params;
    return (
      <section
        className="myCover cover__page cover__bg flex-center"
        style={{
          backgroundImage: 'url("../img/30 (5).jpg")',
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "50% 50%"
        }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="cover__content col-lg-6 my-2 text-white">
              <ol className="breadcrumb bg-transparent p-0">
                <li className="breadcrumb-item">
                  <NavLink to="/">Home</NavLink>
                </li>
                <li className="breadcrumb-item">
                  <NavLink to="/">Courses</NavLink>
                </li>
                <li className="breadcrumb-item">Details</li>
                <li className="breadcrumb-item">{params.courseid}</li>
              </ol>
              <h2 className="h1">Courses Details</h2>
            </div>
            {/* <form className="col-lg-5 my-2 ml-auto cover__form p-0">
              <div className="p-2 input-group">
                <input
                  type="text"
                  className="form-control cover__input"
                  placeholder="what do you want to learn?"
                />
                <div className="cover__button">
                  <button className="btn_blue">Search</button>
                </div>
              </div>
            </form> */}
          </div>
        </div>
      </section>
    );
  }
}

export default CourseDetailCover;
