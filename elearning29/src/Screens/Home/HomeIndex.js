import React, { Component } from "react";
import HomeChild from "./HomeChild";
import HomeCover from "./Home_Cover/HomeCover";
import HomeCategories from "./HomeCategories";
import Courses from "../../Components/Courses/Courses";

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
        {/* Home Child */}
        <HomeChild />
      </div>
    );
  }
}

export default Home;
