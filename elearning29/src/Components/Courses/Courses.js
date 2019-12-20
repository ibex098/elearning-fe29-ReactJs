import React, { Component } from "react";
import "../../sass/Layout/_courses.scss";
import "../../sass/Layout/_courseItem.scss";
import CourseItem from "./CourseItem";

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
              <ul
                className="nav nav-pills justify-content-center course__button"
                role="tablist"
              >
                <li>
                  <a
                    className="btn_white-green m-2 shadow_1 active"
                    data-toggle="tab"
                    href="#tab1"
                    role="tab"
                    aria-selected="true"
                  >
                    Developer
                  </a>
                </li>
                <li>
                  <a
                    className="btn_white-green m-2 shadow_1"
                    data-toggle="tab"
                    href="#tab2"
                    role="tab"
                    aria-selected="true"
                  >
                    Business
                  </a>
                </li>
                <li>
                  <a
                    className="btn_white-green m-2 shadow_1"
                    data-toggle="tab"
                    href="#tab3"
                    role="tab"
                    aria-selected="true"
                  >
                    UI/UX
                  </a>
                </li>
                <li>
                  <a
                    className="btn_white-green m-2 shadow_1"
                    data-toggle="tab"
                    href="#tab4"
                    role="tab"
                    aria-selected="true"
                  >
                    Web Design
                  </a>
                </li>
                <li>
                  <a
                    className="btn_white-green m-2 shadow_1"
                    data-toggle="tab"
                    href="#tab5"
                    role="tab"
                    aria-selected="true"
                  >
                    Marketing
                  </a>
                </li>
              </ul>
              <div className="tab-content course__tab">
                <div
                  className="tab-pane fade show active"
                  id="tab1"
                  role="tabpanel"
                >
                  <div className="row course__items">
                    {/* Course Item */}
                    <CourseItem />
                    <CourseItem />
                    <CourseItem />
                    <CourseItem />
                    <CourseItem />
                    <CourseItem />
                  </div>
                </div>

                <div className="tab-pane fade" id="tab2" role="tabpanel">
                  <div className="row course__items">
                    {/* Course Item */}
                    <CourseItem />
                  </div>
                </div>

                <div className="tab-pane fade" id="tab3" role="tabpanel">
                  <div className="row course__items">
                    {/* Course Item */}
                    <CourseItem />
                  </div>
                </div>

                <div className="tab-pane fade" id="tab4" role="tabpanel">
                  <div className="row course__items">
                    {/* Course Item */}
                    <CourseItem />
                  </div>
                </div>

                <div className="tab-pane fade" id="tab5" role="tabpanel">
                  <div className="row course__items">
                    {/* Course Item */}
                    <CourseItem />
                  </div>
                </div>
              </div>
              {/* END tab-content*/}
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
