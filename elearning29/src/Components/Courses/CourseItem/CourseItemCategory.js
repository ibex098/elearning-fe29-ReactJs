import React, { Component } from "react";
import CourseModal from "./CourseModal";
import { NavLink } from "react-router-dom";

class CourseItemCategory extends Component {
  render() {
    const {
      maKhoaHoc,
      tenKhoaHoc,
      hinhAnh,
      luotXem,
      nguoiTao
    } = this.props.item;
    return (
      <div className="col-lg-3 col-md-4 col-sm-6 marginTop-30 course__item my-4">
        <div className="card text-gray overflow-hidden shadow_1 h-100 course__card">
          <span className="course__ribbon text-white">Best selling</span>
          <NavLink to={`/detail/${maKhoaHoc}`} className="course__img">
            <img className="card-img-top" src={hinhAnh} alt="..." />
            <div className="imgOverlay"></div>
          </NavLink>
          <div className="card-body">
            <NavLink to={`/detail/${maKhoaHoc}`} className="h5">
              {tenKhoaHoc}
            </NavLink>
            <p className="my-3 text_red course__user">
              <span className="lnr lnr-user mr-2 text_gray" />
              {nguoiTao.hoTen}
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
                {luotXem} lectures
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
        {/* Course Modal */}
        <CourseModal item={this.props.item} />
      </div>
    );
  }
}

export default CourseItemCategory;
