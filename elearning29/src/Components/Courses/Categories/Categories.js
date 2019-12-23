import React, { Component } from "react";
import { connect } from "react-redux";
import {
  fetchCategories,
  setCourseCategories
} from "../../../Redux/Action/Action";
// import { SET_CATEGORIES } from "../../../Redux/Action/Type";

class Categories extends Component {
  render() {
    return (
      <>
        <ul
          className="nav nav-pills justify-content-center course__button"
          role="tablist"
        >
          {this.props.courseCategories.map((item, index) => {
            return (
              <li key={index}>
                <button
                  className={
                    this.props.choosenCategories === item.maDanhMuc
                      ? "active btn_white-green m-2 shadow_1"
                      : "btn_white-green m-2 shadow_1"
                  }
                  data-toggle="tab"
                  href={this.props.choosenCategories}
                  role="tab"
                  aria-selected="true"
                  onClick={() => this._chooseCategories(item.maDanhMuc)}
                >
                  {item.tenDanhMuc}
                </button>
              </li>
            );
          })}
        </ul>
      </>
    );
  }
  componentDidMount() {
    this.props.dispatch(fetchCategories());
  }
  //khi bấm vào category thì chạy hàm setCourseCategories để dispatch action lên store
  //truyền Id của category đó vào Action => set động category trên Service => fetch các khóa học của category đó
  _chooseCategories = categoriesId => {
    this.props.dispatch(setCourseCategories(categoriesId));
  };
}

const mapStateToProps = state => {
  return {
    courseCategories: state.CourseCategories.categoriesList,
    choosenCategories: state.CourseCategories.choosenCategories
  };
};

export default connect(mapStateToProps, null)(Categories);
