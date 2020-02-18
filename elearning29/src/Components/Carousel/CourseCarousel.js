import React, { Component } from "react";
import { connect } from "react-redux";
import Slider from "react-slick";
import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";
import "../../sass/Layout/_courseCarousel.scss";
import "../../sass/Layout/_courses.scss";
import "../../sass/Layout/_courseItem.scss";
import CourseItem from "../Courses/CourseItem/CourseItem";
import { fetchAllCourses } from "../../Redux/Action/CourseAction";
import {NavLink} from "react-router-dom"

class CourseCarousel extends Component {
  render() {
    var settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 2,
            infinite: false,
            dots: false
          }
        },
        {
          breakpoint: 740,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 380,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <section className="courseCarousel">
        <div className="container">
          <h2 className="text-center mb-4"> All Course </h2>
          <div className="bottom_line container mb-3" />
          <Slider {...settings}>
            {this.props.courseList.map((item, index) => {
              return <CourseItem key={index} item={item} />;
            })}
          </Slider>
          <div className="text-center">
            <NavLink
              to="/allcourses"
              className="btn_green"
              style={{ textDecoration: "none" }}
            >
              View All
            </NavLink>
          </div>
        </div>
      </section>
    );
  }
  componentDidMount() {
    this.props.dispatch(fetchAllCourses());
  }
}
const mapStateToProps = state => {
  return {
    courseList: state.CourseList.courseList
  };
};

export default connect(mapStateToProps, null)(CourseCarousel);
