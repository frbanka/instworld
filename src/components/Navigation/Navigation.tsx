import { NavLink } from "react-router-dom";

import MenuItem from "@mui/material/MenuItem";

import "./Navigation.css";

export const Navigation = () => {
  return (
    <div className="menu">
      <NavLink
        to="/"
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
          BUT.. WHY?
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
          MONEY$MONEY
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
          PAY HERE
        </MenuItem>
      </NavLink>
    </div>
  );
};
