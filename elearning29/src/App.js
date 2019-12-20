import React from "react";
import Header from "./Layout/Header";
import Navbar from "./Layout/Navbar/Navbar";
import Footer from "./Layout/Footer";
import Home from "./Screens/Home/HomeIndex";

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
