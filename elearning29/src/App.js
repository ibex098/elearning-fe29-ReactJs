import React from "react";
import Header from "./Layout/Header";
import Navbar from "./Layout/Navbar/Navbar";
import Footer from "./Layout/Footer";
import Home from "./Screens/Home/HomeIndex";
import DetailIndex from "./Screens/CourseDetail/DetailIndex";
import { Switch, BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Navbar />
      <Switch>
        <Route path="/detail" component={DetailIndex} />
        <Route path="/home" component={Home} />
        <Route path="/" component={Home} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
