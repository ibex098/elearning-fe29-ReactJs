import React, { Component } from "react";

class AllCourseList extends Component {
  render() {
    return (
      <section className="allCourseItem gb_gray">
        <div className="container">
          <div className="row course__items">
            <div className="course__item-list align-items-center shadow_1">
              <div className="col-lg-4 px-lg-4 my-4">
                <img className="w-100" src="./img/11.jpg" alt />
              </div>
              <div className="col-lg-8 my-4 text_gray">
                <div className="media justify-content-between">
                  <div className="group">
                    <a href="#" className="h4">
                      The Web Developer Bootcamp
                    </a>
                    <ul className="list-inline mt-3">
                      <li className="list-inline-item mr-2">
                        <span className="lnr lnr-user" />
                        Andrew Mead, John Doe
                      </li>
                      <li className="list-inline-item mr-2">
                        <i className="fas fa-star text-warning" />
                        <i className="fas fa-star text-warning" />
                        <i className="fas fa-star text-warning" />
                        <i className="fas fa-star text-warning" />
                        <i className="fas fa-star text-warning" />
                        <span className="text-dark">5</span>
                        <span>(4578)</span>
                      </li>
                    </ul>
                  </div>
                  <a href="#" className="iconbox courseItem_list-heart">
                    <span className="lnr lnr-heart" />
                  </a>
                </div>
                <p>
                  Investig ationes demons travge vunt lectores legee lrus quodk
                  legunt saepius claritas est conctetur adipi sicing elit, sed
                  do eiusmod tempor incididunt labore edolore.
                </p>
                <div className="d-md-flex justify-content-between align-items-center">
                  <ul className="list-inline mb-md-0">
                    <li className="list-inline-item mr-3">
                      <span className="h4 d-inline text_green">$180</span>
                      <span className="h5 d-inline">
                        <s>$249</s>
                      </span>
                    </li>
                    <li className="list-inline-item mr-3">
                      <i className="fa fa-headphones-alt mr-2" />
                      46 lectures
                    </li>
                    <li className="list-inline-item mr-3">
                      <span className="lnr lnr-clock mr-2" />
                      27.5 hours
                    </li>
                  </ul>
                  <span className="badge bg_green text-white p-2">
                    Best Selling
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default AllCourseList;
