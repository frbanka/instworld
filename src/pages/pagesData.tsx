import { routerType } from "../types/router.types";
import About from "./Why/Why";
import { Project } from "./Project/Project";
import { Money } from "./Money/Money";
import { Goals } from "./Goals/Goals";
import { Donate } from "./Donate/Donate";
import { Home } from "./Home/Home";

const pagesData: routerType[] = [
  {
    path: "/project",
    element: <Project />,
    title: "project",
  },
  {
    path: "",
    element: <Home />,
    title: "home",
  },
  {
    path: "why",
    element: <About />,
    title: "why",
  },
  {
    path: "money",
    element: <Money />,
    title: "money",
  },
  {
    path: "goals",
    element: <Goals />,
    title: "goals",
  },
  {
    path: "pay",
    element: <Donate />,
    title: "pay",
  },
];

export default pagesData;
