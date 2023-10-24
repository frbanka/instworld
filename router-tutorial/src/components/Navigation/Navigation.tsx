import { NavLink } from "react-router-dom";

import MenuItem from "@mui/material/MenuItem";

import "./Navigation.css";

export const Navigation = () => {
    return (
      <div className="menu">
        <NavLink to="/">
          <MenuItem selected className="MenuItem">
            supernatural
          </MenuItem>
        </NavLink>
        <NavLink to="/spells">
          <MenuItem selected className="MenuItem">
            spells
          </MenuItem>
        </NavLink>
        <NavLink to="/jobs">
          <MenuItem selected className="MenuItem">
            jobs
          </MenuItem>
        </NavLink>
        <NavLink to="/bestiary">
          <MenuItem selected className="MenuItem">
            bestiary
          </MenuItem>
        </NavLink>
        <NavLink to="/mol">
          <MenuItem selected className="MenuItem">
            men of letters
          </MenuItem>
        </NavLink>
      </div>
    );
};
