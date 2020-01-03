import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class CourseItem extends Component {
  render() {
    const item = this.props.item;
    return (
      <div className="course__items">
        <div className="col-lg-12 col-md-12 col-sm-12 course__item">
          <div className="card text-gray overflow-hidden shadow_3 h-100 my-4 course__card">
            <span className="course__ribbon text-white">Best selling</span>
            <div className="course__img">
              <NavLink to={`/detail/${item.maKhoaHoc}`}>
                <img className="card-img-top" src={item.hinhAnh} alt="..." />
                <div className="imgOverlay"></div>
              </NavLink>
            </div>
            <div className="card-body h-100">
              <NavLink to={`/detail/${item.maKhoaHoc}`} className="h6">
                {item.tenKhoaHoc}
              </NavLink>
              <p className="my-3 text_gray course__user">
                <span className="lnr lnr-user" />
                {item.nguoiTao.hoTen}
              </p>
              <ul className="list-unstyled course__raiting">
                <li className="active">
                  <i className="fas fa-star" />
                </li>
                <li className="active">
                  <i className="fas fa-star" />
                </li>
                <li className="active">
                  <i className="fas fa-star" />
                </li>
                <li className="active">
                  <i className="fas fa-star" />
                </li>
                <li className="active">
                  <i className="fas fa-star" />
                </li>
                <li className="text_gray">
                  <span>(4.9)</span>
                  <span>4578</span>
                </li>
              </ul>
            </div>
            <div className="card-footer media align-items-center justify-content-between">
              <ul className="list-unstyled mb-0 text_gray">
                <li className="mb-1">
                  <i className="fa fa-headphones-alt mr-2" />
                  46 lectures
                </li>
                <li className="mb-1">
                  <span className="lnr lnr-clock mr-2" />
                  27.5 hours
                </li>
              </ul>
              <h4 className="h5">
                <span className="text_green">$180</span>
              </h4>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CourseItem;
