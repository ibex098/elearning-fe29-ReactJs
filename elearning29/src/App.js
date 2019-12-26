import React, { Component } from "react";
import Header from "./Layout/Header";
import Navbar from "./Layout/Navbar/Navbar";
import Footer from "./Layout/Footer";
import Home from "./Screens/Home/HomeIndex";
import DetailIndex from "./Screens/CourseDetail/DetailIndex";
import { Switch, BrowserRouter, Route } from "react-router-dom";
import SignUp from "./Screens/SignUp/SignUp";
import Login from "./Screens/Login/Login";
import { connect } from "react-redux";
import { resConnector } from "./Services/Index";
import { reduxAction } from "./Redux/Action/CourseAction";
import { LOGIN } from "./Redux/Action/Type";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Header />
        <Navbar />
        <Switch>
          <Route path="/detail" component={DetailIndex} />
          <Route path="/signup" component={SignUp} />
          <Route path="/signin" component={Login} />
          <Route path="/home" component={Home} />
          <Route path="/" component={Home} />
        </Switch>
        <Footer />
      </BrowserRouter>
    );
  }
  componentDidMount() {
    // kiểm tra userLogin và accessToken trên localStogare, nếu tồn tại rồi thì dispatch action LOGIN và tự động đăng nhập
    const userLoginStr = localStorage.getItem("userLogin");
    const userAccessToken = localStorage.getItem("accessToken");
    if (userLoginStr) {
      resConnector.defaults.headers["Athorization"] =
        "Bearer" + userAccessToken;
      this.props.dispatch(reduxAction(LOGIN, JSON.parse(userLoginStr)));
    }
  }
}

export default connect(null, null)(App);
