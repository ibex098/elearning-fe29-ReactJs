import React, { Component } from "react";
import "../../sass/Layout/_categories.scss";

class HomeCategories extends Component {
  render() {
    return (
      <section className="categories">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center mb-md-4">
              <h2 className="mb-4">Featured Categories</h2>
              <div className="bottom_line container" />
            </div>
            <div className="col-lg-6 col-md-7 mt-4">
              <a href="." className="card text-white item__hover">
                <img src="./img/11.jpg" alt="..." />
                <div className="card-img-overlay categories__item">
                  <h4>Software Development</h4>
                  <button className="btn_green btn_border">
                    Over 50 Courses
                  </button>
                </div>
              </a>
            </div>
            <div className="col-lg-3 col-md-5 mt-4">
              <a href="." className="card text-white item__hover">
                <img src="./img/21.jpg" alt="..." />
                <div className="card-img-overlay categories__item">
                  <h4>Design</h4>
                  <button className="btn_green btn_border">
                    Over 50 Courses
                  </button>
                </div>
              </a>
            </div>
            <div className="col-lg-3 col-md-6 mt-4 ">
              <a href="." className="card text-white item__hover">
                <img src="./img/31.jpg" alt="..." />
                <div className="card-img-overlay categories__item">
                  <h4>Business</h4>
                  <button className="btn_yellow btn_border">
                    Over 400 Courses
                  </button>
                </div>
              </a>
            </div>
            <div className="col-lg-3 col-md-6 mt-4 ">
              <a href="." className="card text-white item__hover">
                <img src="./img/40.jpg" alt="..." />
                <div className="card-img-overlay categories__item ">
                  <h4>Marketing</h4>
                  <button className="btn_blue btn_border">
                    Over 127 Courses
                  </button>
                </div>
              </a>
            </div>
            <div className="col-lg-3 col-md-5 mt-4 ">
              <a href="." className="card text-white item__hover">
                <img
                  className="w-100 transition-0_3 hover:zoomin"
                  src="./img/51.jpg"
                  alt="..."
                />
                <div className="card-img-overlay categories__item ">
                  <h4>UI/UX Design</h4>
                  <button className="btn_red btn_border">
                    Over 98 Courses
                  </button>
                </div>
              </a>
            </div>
            <div className="col-lg-6 col-md-7 mt-4 ">
              <a href="." className="card text-white item__hover">
                <img
                  className="w-100 transition-0_3 hover:zoomin"
                  src="./img/6.jpg"
                  alt="..."
                />
                <div className="card-img-overlay categories__item">
                  <h4>Web Development</h4>
                  <button className="btn_blue btn_border">
                    Over 769 Courses
                  </button>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default HomeCategories;
