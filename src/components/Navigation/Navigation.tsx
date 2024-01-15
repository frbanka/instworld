import { NavLink } from "react-router-dom";

import MenuItem from "@mui/material/MenuItem";
import onemillion from "../../graphics/1million.png";
import onemilliongreen from "../../graphics/1milliongreen.png";
import "./Navigation.css";

export const Navigation = () => {
  return (
    <div className="navigation">
      <div className="menuwrap">
        <div className="home">
          <NavLink
            className="home"
            to="/"
            style={({ isActive }) => {
              return isActive
                ? { textDecoration: "none" }
                : { textDecoration: "none" };
            }}
          >
            <div className="card">
              <img src={onemillion} className="nav_img" alt="logo"></img>
              <img
                src={onemilliongreen}
                alt="logogreen"
                className="nav_imghover"
              ></img>
            </div>
          </NavLink>
        </div>
        <div className="menu">
          <div className="move-menu">
            <NavLink
              to="/why"
              style={({ isActive }) => {
                return isActive
                  ? { textDecoration: "none" }
                  : { textDecoration: "none" };
              }}
            >
              <MenuItem selected className="menuItemProject">
                WHY?
              </MenuItem>
            </NavLink>

            <NavLink
              to="/money"
              style={({ isActive }) => {
                return isActive
                  ? { textDecoration: "none" }
                  : { textDecoration: "none" };
              }}
            >
              <MenuItem selected className="menuItemProject">
                MONEY
              </MenuItem>
            </NavLink>
            <NavLink
              to="/goals"
              style={({ isActive }) => {
                return isActive
                  ? { textDecoration: "none" }
                  : { textDecoration: "none" };
              }}
            >
              <MenuItem selected className="menuItemProject">
                THE GOALS
              </MenuItem>
            </NavLink>
            <NavLink
              to="/why"
              style={({ isActive }) => {
                return isActive
                  ? { textDecoration: "none" }
                  : { textDecoration: "none" };
              }}
            >
              <MenuItem selected className="menuItemProject">
                THE IDEA
              </MenuItem>
            </NavLink>
            <NavLink
              to="/project"
              style={({ isActive }) => {
                return isActive
                  ? { textDecoration: "none" }
                  : { textDecoration: "none" };
              }}
            >
              <MenuItem selected className="menuItemProject">
                PROJECT
              </MenuItem>
            </NavLink>
          </div>
          <div className="move-menu2">
            <NavLink
              to="/goals"
              style={({ isActive }) => {
                return isActive
                  ? { textDecoration: "none" }
                  : { textDecoration: "none" };
              }}
            >
              <MenuItem selected className="menuItemProject">
                WHO I AM
              </MenuItem>
            </NavLink>

            <NavLink
              to="/why"
              style={({ isActive }) => {
                return isActive
                  ? { textDecoration: "none" }
                  : { textDecoration: "none" };
              }}
            >
              <MenuItem selected className="menuItemProject">
                WORRIES
              </MenuItem>
            </NavLink>
            <NavLink
              to="/money"
              style={({ isActive }) => {
                return isActive
                  ? { textDecoration: "none" }
                  : { textDecoration: "none" };
              }}
            >
              <MenuItem selected className="menuItemProject">
                EXPERIMENT
              </MenuItem>
            </NavLink>
          </div>
          <NavLink
            className="menu-faq"
            to="/goals"
            style={({ isActive }) => {
              return isActive
                ? { textDecoration: "none" }
                : { textDecoration: "none" };
            }}
          >
            <MenuItem selected>FAQ</MenuItem>
          </NavLink>
          <div className="move-menu2">
            <NavLink
              to="/goals"
              style={({ isActive }) => {
                return isActive
                  ? { textDecoration: "none" }
                  : { textDecoration: "none" };
              }}
            >
              <MenuItem selected className="menuItemProject">
                FAMES
              </MenuItem>
            </NavLink>

            <NavLink
              to="/why"
              style={({ isActive }) => {
                return isActive
                  ? { textDecoration: "none" }
                  : { textDecoration: "none" };
              }}
            >
              <MenuItem selected className="menuItemProject">
                COUNTER
              </MenuItem>
            </NavLink>
            <NavLink
              to="/donate"
              style={({ isActive }) => {
                return isActive
                  ? { textDecoration: "none" }
                  : { textDecoration: "none" };
              }}
            >
              <MenuItem selected className="menuItemProject">
                DONATE
              </MenuItem>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};
