import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

function getDate() {
  const today = new Date();
  const month = today.getMonth() + 1;
  const year = today.getFullYear();
  const date = today.getDate();
  return `${month}/${date}/${year}`;
}

function NavBar() {
  const [currentDate, setCurrentDate] = useState(getDate());

  return (
    <div className="navbar-container">
      <div className="navbar-left">
        <p className="navbar-date">{currentDate}</p>
      </div>
      <div className="navbar-center">
        <p id="navbar-title">
          <i>Taskly</i>
        </p>
      </div>
      <div className="navbar-right">
        <Link className="navbar-items">Settings</Link>
      </div>
    </div>
  );
}

export default NavBar;
