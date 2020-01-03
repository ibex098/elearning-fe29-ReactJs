import React, { Component } from "react";
import HomeChild from "./HomeChild";
import HomeCover from "./Home_Cover/HomeCover";
import HomeCategories from "./HomeCategories";
import Courses from "../../Components/Courses/Courses";
import CourseCarousel from "../../Components/Carousel/CourseCarousel";

class Home extends Component {
  render() {
    return (
      <div>
        {/* Cover */}
        <HomeCover />

        {/* Categories */}
        <HomeCategories />

        {/* Coureses */}
        <Courses />

        {/* Carousel */}
        <CourseCarousel />

        {/* Home Child */}
        <HomeChild />
      </div>
    );
  }
}

export default Home;
