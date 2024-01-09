import { NavLink } from "react-router-dom";

import MenuItem from "@mui/material/MenuItem";

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
            <MenuItem selected className="MenuItem">
              HOME
            </MenuItem>
          </NavLink>
        </div>
        <div className="menu">
          <NavLink
            to="/project"
            style={({ isActive }) => {
              return isActive
                ? { textDecoration: "none" }
                : { textDecoration: "none" };
            }}
          >
            <MenuItem selected className="MenuItem">
              PROJECT
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
            <MenuItem selected className="MenuItem">
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
            <MenuItem selected className="MenuItem">
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
            <MenuItem selected className="MenuItem">
              THE GOALS
            </MenuItem>
          </NavLink>
          <NavLink
            to="/pay"
            style={({ isActive }) => {
              return isActive
                ? { textDecoration: "none" }
                : { textDecoration: "none" };
            }}
          >
            <MenuItem selected className="MenuItem">
              DONATE
            </MenuItem>
          </NavLink>
        </div>
      </div>
    </div>
  );
};
