import React from "react";
import Home from "../components/Home";
import NavBar from "../components/NavBar";
import "./HomePage.css";

function HomePage() {
  return (
    <div className="home-page-container center">
      <NavBar />
      <Home />
    </div>
  );
}

export default HomePage;
