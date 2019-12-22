import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchCategories, choosenCategories } from "../../../Redux/Action/Action";
// import { SET_CATEGORIES } from "../../../Redux/Action/Type";

class Categories extends Component {
  render() {
    return (
      <>
        <ul
          className="nav nav-pills justify-content-center course__button mb-5"
          role="tablist"
        >
          {this.props.courseCategories.map((item, index) => {
            return (
              <li key={index}>
                <button
                  className={
                    this.props.choosenCategories === item.maDanhMuc
                      ? "btn_green m-2 shadow_1"
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
  _chooseCategories = payload => {
    this.props.dispatch(choosenCategories(payload));
  };
}

const mapStateToProps = state => {
  return {
    courseCategories: state.CourseCategories.categoriesList,
    choosenCategories: state.CourseCategories.choosenCategories
  };
};

export default connect(mapStateToProps, null)(Categories);
