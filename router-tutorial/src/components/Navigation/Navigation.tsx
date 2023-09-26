import { NavLink } from "react-router-dom";

import MenuItem from "@mui/material/MenuItem";

export const Navigation = () => {
  return (
    <div>
      <NavLink to="/">
        <MenuItem>Home</MenuItem>
      </NavLink>
      <NavLink to="/about">
        <MenuItem>About Me</MenuItem>
      </NavLink>
      <NavLink to="/contact">
        <MenuItem>Contact</MenuItem>
      </NavLink>
      <NavLink to="/mywork">
        <MenuItem>My Work</MenuItem>
      </NavLink>
      <NavLink to="/fun">
        <MenuItem>Fun</MenuItem>
      </NavLink>
    </div>
  );
};
