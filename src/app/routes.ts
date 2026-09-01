import { createBrowserRouter } from "react-router";
import Root from "./Root";
import Home from "../pages/Home";
import Marathon from "../pages/Marathon";
import Race from "../pages/Race";
import Cause from "../pages/Cause";
import SportsTourism from "../pages/SportsTourism";
import Sponsors from "../pages/Sponsors";
import News from "../pages/News";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Registration from "../pages/Registration";
import NotFound from "../pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "marathon", Component: Marathon },
      { path: "race", Component: Race },
      { path: "cause", Component: Cause },
      { path: "sports-tourism", Component: SportsTourism },
      { path: "sponsors", Component: Sponsors },
      { path: "news", Component: News },
      { path: "about", Component: About },
      { path: "contact", Component: Contact },
      { path: "registration", Component: Registration },
      { path: "*", Component: NotFound },
    ],
  },
]);
