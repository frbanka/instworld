import { routerType } from "../types/router.types";
import About from "./About/About";
import { Home } from "./Home/Home";
import { Contact } from "./Contact/Contact";
import { MyWork } from "./MyWork/MyWork";
import { Fun } from "./Fun/Fun";

const pagesData: routerType[] = [
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
    element: <Contact />,
    title: "money",
  },
  {
    path: "goals",
    element: <MyWork />,
    title: "goals",
  },
  {
    path: "pay",
    element: <Fun />,
    title: "pay",
  },
];

export default pagesData;
