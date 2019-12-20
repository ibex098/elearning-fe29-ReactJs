import React, { Component } from "react";
import "../../../sass/Layout/_cover.scss";
import CoverSearch from "./CoverSearch";

class HomeCover extends Component {
  render() {
    return (
      <section
        className="myCover cover__bg flex-center"
        style={{
          backgroundImage: 'url("./img/cover_1.jpg")',
          backgroundSize: "cover",
          width: "100%",
          height: "100%",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
          backgroundPosition: "50% 50%"
        }}
      >
        <div className="container">
          <div className="cover__content">
            <div className="cover__text text-center d-none d-md-block pb-3">
              <h4>LEARN ONLINE COURSES</h4>
              <h1>Advance Your Career.</h1>
              <p>
                <span>6,178</span>
                courses in Business, Technology and Creative Skills taught by
                industry experts.
              </p>
              <a href="." className="btn_green">
                Start Free Trial
              </a>
              <a href="." className="btn_outline_white">
                Become an Instructor
              </a>
            </div>
          </div>
          <form className="col-lg-7 mx-auto mt-5 cover__form p-0">
            {/* Search */}
            <CoverSearch />
          </form>
        </div>
      </section>
    );
  }
}

export default HomeCover;
