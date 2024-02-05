import "./Counter.css";
import React, { useRef } from "react";
import { NavLink } from "react-router-dom";
import MenuItem from "@mui/material/MenuItem";
import onemilliondollars from "../../graphics/1milliondollars.png";

export const Counter = () => {
  
  return (
    /*<div className="counter_page">
      <div className="counter_banner">
        <div className="counter_banner--wrap">
          <div className="counter">The Counter</div>
            <div className="h2 p1">
            you helped me get{" "}<a className="h1">0 $</a>
            </div>
            <div className="h4 p1">updated day 5/02/2024
            on 20:00</div>
          </div>
      </div>
      <div className="counter_container">
        <div className="h3 p2 counter_add">
            You can add more here:{" "}<a className="counter_button" href="/project">Donate</a>
        </div>
      </div>
    </div>*/
    <div className="wrapper">
      <div className="parallax__group hero-container">
        <div className="parallax__layer sky"></div>
        <div className="parallax__layer bushes"></div>
        <div className="parallax__layer water"></div>
        <div className="parallax__layer people1"></div>
        <div className="parallax__layer people2"></div>
        <div className="parallax__layer people3"></div>
        <div className="parallax__layer hero-text">
          <ul>
            <li><NavLink
            className="navlink"
            to="/"
            style={({ isActive }) => {
              return isActive
                ? { textDecoration: "none" }
                : { textDecoration: "none" };
            }}
          >
            <MenuItem selected>Home</MenuItem>
          </NavLink></li>
            <li><NavLink
            className="navlink"
            to="/goals"
            style={({ isActive }) => {
              return isActive
                ? { textDecoration: "none" }
                : { textDecoration: "none" };
            }}
          >
            <MenuItem selected>Goals</MenuItem>
          </NavLink></li>
            <li><NavLink
            className="navlink"
            to="/pay"
            style={({ isActive }) => {
              return isActive
                ? { textDecoration: "none" }
                : { textDecoration: "none" };
            }}
          >
            <MenuItem selected>Donate</MenuItem>
          </NavLink></li>
          </ul>
          <div className="year-container">
            <div className="h1">you helped me get:{" "}<a className="dollars">0 $</a></div>
            <div className="h4">updated day 5/02/2024 on 20:00</div>
            <div>The Counter</div>
          </div>
        </div>
      </div>
      <div className="parallax__group info-container">
        <img src={onemilliondollars} alt="Lively and colourful concert" />
        <div className="text-container">
          <h2>This is your year.</h2>
          <p>What would life be if we had no courage to attempt anything?</p>
          <p>- Vincent Van Gogh</p>
          <a href="#" className="btn">Get Started Now</a>
        </div>
      </div>
    </div>
  );
};
