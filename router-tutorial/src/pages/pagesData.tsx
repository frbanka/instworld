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
    path: "spells",
    element: <About />,
    title: "spells",
  },
  {
    path: "jobs",
    element: <Contact />,
    title: "jobs",
  },
  {
    path: "bestiary",
    element: <MyWork />,
    title: "bestiary",
  },
  {
    path: "mol",
    element: <Fun />,
    title: "menofletters",
  },
];

export default pagesData;
