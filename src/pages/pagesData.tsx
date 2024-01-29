import { routerType } from "../types/router.types";
import Why from "./Why/Why";
import { Project } from "./Project/Project";
import { Money } from "./Money/Money";
import { Goals } from "./Goals/Goals";
import { Donate } from "./Donate/Donate";
import { Home } from "./Home/Home";
import { Faq } from "./Faq/Faq";
import Social from "./Social/Social";

const pagesData: routerType[] = [
  {
    path: "",
    element: <Home />,
    title: "home",
  },
  {
    path: "project",
    element: <Project />,
    title: "project",
  },
  {
    path: "social",
    element: <Social />,
    title: "social",
  },
  {
    path: "idea",
    element: <Why />,
    title: "idea",
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
  {
    path: "faq",
    element: <Faq />,
    title: "faq",
  },
];

export default pagesData;
