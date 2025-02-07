import React, { useState } from "react";
import "./header.css";
import { HEADER_LOGO } from "../utils/constants";

const Header = () => {
  const [toggleBtn, setToggleBtn] = useState("LogIn");

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={HEADER_LOGO}></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <button
            className="toggle-btn"
            onClick={() => {
              toggleBtn === "LogIn"
                ? setToggleBtn("Logout") //it will toggle using ternery operator
                : setToggleBtn("LogIn");
              console.log(toggleBtn);
            }}
          >
            {toggleBtn}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
