import { NavLink } from "react-router-dom";

import MenuItem from "@mui/material/MenuItem";

import "./Navigation.css";

export const Navigation = () => {
    return (
        <div className="menu">
      <NavLink to="/">
        <MenuItem selected className="MenuItem">
          home
        </MenuItem>
      </NavLink>
      <NavLink to="/about">
        <MenuItem selected className="MenuItem">
          about me
        </MenuItem>
      </NavLink>
      <NavLink to="/contact">
        <MenuItem selected className="MenuItem">
          contact
        </MenuItem>
      </NavLink>
      <NavLink to="/mywork">
        <MenuItem selected className="MenuItem">
          my work
        </MenuItem>
      </NavLink>
      <NavLink to="/fun">
        <MenuItem selected className="MenuItem">
          fun
        </MenuItem>
      </NavLink>
    </div>
  );
};
