import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import { settings } from "../Config/Setting";

//yêu cầu đăng nhập mới được truy cập vào trang
class PrivateRoute extends Component {
  render() {
    const { path, Component } = this.props;
    return (
      <Route
        path={path}
        render={routeProps => {
          if (localStorage.getItem(settings.userLogin)) {
            return <Component {...routeProps} />;
          }
          alert("Vui Lòng Login");
          return <Redirect to="/signin" />;
        }}
      />
    );
  }
}

export default PrivateRoute;
