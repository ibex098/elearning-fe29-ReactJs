import React, { Component } from "react";

class PageNumber extends Component {
  render() {
    return (
      <div className="col-12 mt-5">
        <ul className="pagination justify-content-center">
          <li className="page-item mx-1">
            <a className="page-link iconbox  rounded-0" href="#">
              <span className="lnr lnr-chevron-left" />
            </a>
          </li>
          <li className="page-item mx-1">
            <a className="page-link iconbox  rounded-0" href="#">
              1
            </a>
          </li>
          <li className="page-item active disabled mx-1">
            <a className="page-link iconbox  rounded-0" href="#">
              2
            </a>
          </li>
          <li className="page-item mx-1">
            <a className="page-link iconbox  rounded-0" href="#">
              3
            </a>
          </li>
          <li className="page-item disabled mx-1">
            <a className="page-link iconbox  rounded-0" href="#">
              <i className="material-icons">more_horiz</i>
            </a>
          </li>
          <li className="page-item mx-1">
            <a className="page-link iconbox  rounded-0" href="#">
              16
            </a>
          </li>
          <li className="page-item mx-1">
            <a className="page-link iconbox  rounded-0" href="#">
              <span className="lnr lnr-chevron-right" />
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default PageNumber;
