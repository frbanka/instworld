import { Outlet } from "react-router-dom";
import { AppBar } from "../AppBar/AppBar";
import { DownBar } from "../DownBar/DownBar";
export const Layout = () => {
  return (
    <div>
      <AppBar />
      <Outlet />
      <DownBar />
    </div>
  );
};
