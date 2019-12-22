import React, { Component } from "react";
import "../../sass/Layout/_courses.scss";
import "../../sass/Layout/_courseItem.scss";
import Categories from "./Categories/Categories";
import CourseCategories from "./Categories/CourseCategories";

class Courses extends Component {
  render() {
    return (
      <section className="myCourse">
        <div className="container">
          <div className="row course__content">
            <div className="col-12 text-center mb-5">
              <h2 className="mb-4">Browse Our Top Courses</h2>
              <div className="bottom_line container" />
            </div>

            <div className="col-12">
              {/* Course Tab */}
              <Categories />

              {/* CourseCategories */}
              <CourseCategories />
            </div>
            {/* END col-12 */}

            <div className="col-12 text-center mt-5">
              <a
                href="."
                className="btn_green"
                style={{ textDecoration: "none" }}
              >
                Start Free Trial
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Courses;
