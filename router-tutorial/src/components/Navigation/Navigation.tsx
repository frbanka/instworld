import { NavLink } from "react-router-dom";

import MenuItem from "@mui/material/MenuItem";

import "./Navigation.css";

export const Navigation = () => {
    return (
        <div className="menu">
      <NavLink to="/">
        <MenuItem selected className="MenuItem">
          Home
        </MenuItem>
      </NavLink>
      <NavLink to="/about">
        <MenuItem selected className="MenuItem">
          About Me
        </MenuItem>
      </NavLink>
      <NavLink to="/contact">
        <MenuItem selected className="MenuItem">
          Contact
        </MenuItem>
      </NavLink>
      <NavLink to="/mywork">
        <MenuItem selected className="MenuItem">
          My Work
        </MenuItem>
      </NavLink>
      <NavLink to="/fun">
        <MenuItem selected className="MenuItem">
          Fun
        </MenuItem>
      </NavLink>
    </div>
  );
};
