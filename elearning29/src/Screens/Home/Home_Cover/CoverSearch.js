import React, { Component } from "react";

class CoverSearch extends Component {
  render() {
    return (
      <div className="p-2 input-group">
        <input
          type="text"
          className="form-control cover__input"
          placeholder="what do you want to learn?"
        />
        <div className="cover__button">
          <button className="btn_blue">Search</button>
        </div>
      </div>
    );
  }
}

export default CoverSearch;
