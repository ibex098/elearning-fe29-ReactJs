import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class AllCourse extends Component {
  render() {
    let item = this.props.item;
    return (
      <div className="col-lg-3 col-md-4 col-sm-6 marginTop-30 course__item my-4">
        <div className="card overflow-hidden shadow_1 h-100 course__card">
          <NavLink to={`/detail/${item.maKhoaHoc}`} className="course__img">
            <img className="card-img-top" src={item.hinhAnh} alt="..." />
            <div className="imgOverlay"></div>
          </NavLink>
          <div className="card-body">
            <NavLink to={`/detail/${item.maKhoaHoc}`} className="h5">
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
                {item.luotXem} lectures
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
        <div className="course__info text-inherit">
          <div className="info__content p-4">
            <p>Last updated: 12/2016</p>
            <h5 className="my-4 course__title">
              <a href=".">Node.js, Express; MongoDB Dev to Deployment</a>
            </h5>
            <div className="info__view">
              <ul className="list-unstyled">
                <li>
                  <i className="fa fa-headphones-alt" />
                  12 Lectures
                </li>
                <li>
                  <span className="lnr lnr-clock" />
                  27.5 hours
                </li>
                <li>
                  <i className="fa fa-sliders-h" />
                  All Levels
                </li>
              </ul>
            </div>
            <p className="info__des">
              Management Skills Certification in Developing People, Leading
              Teams ; Process Improvement Lorem ipsum dolor, sit amet
              consectetur adipisicing elit. Quisquam, numquam. Lorem ipsum dolor
              sit amet.
            </p>
            <button className="btn_blue w-100">ADD TO CART</button>
            <div className="info__footer mt-5">
              <div className="info__heart">
                <span className="lnr lnr-heart" />
                Add To Wishlist
              </div>
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
export default AllCourse;
