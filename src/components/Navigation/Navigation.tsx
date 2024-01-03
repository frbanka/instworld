import { NavLink } from "react-router-dom";

import MenuItem from "@mui/material/MenuItem";

import "./Navigation.css";

export const Navigation = () => {
  return (
    <div className="menucontainer">
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
            MONEY$
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
  );
};
