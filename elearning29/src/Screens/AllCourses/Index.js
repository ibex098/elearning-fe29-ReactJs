import React, { Component } from "react";
import AllCourse from "./AllCourse";
import "../../sass/Page/_allCourses.scss";
import PageNumber from "./PageNumber";
import { connect } from "react-redux";
import { fetchCoursePage } from "../../Redux/Action/CourseAction";
class Index extends Component {
  render() {
    return (
      <>
        <section className="allCourseButton shadow_1">
          <div className="container">
            <form className="row allCourseItem__filter">
              <div className="col-md-6 my-2">
                <div className="d-inline-flex justify-md-content-end">
                  <select className="form-control my-2">
                    <option>items page</option>
                    <option>8</option>
                    <option>12</option>
                    <option>16</option>
                    <option>20</option>
                    <option>24</option>
                  </select>
                  <div className="d-flex rounded border ml-3 px-2 my-2 align-items-center">
                    <a
                      href="page-sp-all-courcess.html"
                      className="active pt-1 "
                    >
                      <i className="material-icons">apps</i>
                    </a>
                    <a href="page-sp-all-courcess-list.html" className="pt-1">
                      <i className="material-icons">list</i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-6 my-2 text-md-right">
                <ul className="list-inline">
                  <li className="list-inline-item my-2">
                    <select className="form-control">
                      <option>Select Category</option>
                      <option>UI/UX design</option>
                      <option>Web app</option>
                      <option>React</option>
                      <option>Game development</option>
                    </select>
                  </li>
                  <li className="list-inline-item my-2">
                    <select className="form-control">
                      <option>Filter</option>
                      <option>Best selling</option>
                      <option>Newest</option>
                      <option>Top rated</option>
                      <option>Low price</option>
                      <option>High price</option>
                    </select>
                  </li>
                </ul>
              </div>
            </form>
          </div>
        </section>
        {/* AllCourses */}
        <section className="allCourseItem gb_gray">
          <div className="container">
            <div className="row course__items">
              {this.props.coursePage.map((item, index) => {
                return <AllCourse item={item} key={index} />;
              })}
              {/* Page Number */}
              <PageNumber />
            </div>
          </div>
        </section>
      </>
    );
  }
  componentDidMount() {
    this.props.dispatch(fetchCoursePage());
  }
}
const mapStateToProps = state => {
  return {
    coursePage: state.CourseList.coursePage,
    pageNumber: state.CourseList.currentPage
  };
};

export default connect(mapStateToProps, null)(Index);
