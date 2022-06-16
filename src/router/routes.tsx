import { Route } from "../interfaces/Route";
//Pages
import Home from "../pages/Home";
import Requirements from "../pages/Requirements";
import Projects from "../pages/Projects";
import Models from "../pages/Models";
import About from "../pages/About";
//Images
import requirements_icon from "../assets/images/requirements_icon.png";
import projects_icon from "../assets/images/projects_icon.png";
import models_icon from "../assets/images/models_icon.png";
import about_icon from "../assets/images/about_icon.png";

const routes: Route[] = [
  {
    path: "/home",
    name: "Inicio",
    Component: Home,
    childs: [],
  },
  {
    path: "/requirements",
    name: "Requerimientos",
    Component: Requirements,
    icon_img: requirements_icon,
    childs: [],
  },
  {
    path: "/projects",
    name: "Proyectos",
    Component: Projects,
    icon_img: projects_icon,
    childs: [],
  },
  {
    path: "/models",
    name: "Modelos",
    Component: Models,
    icon_img: models_icon,
    childs: [],
  },
  {
    path: "/about",
    name: "Quienes somos",
    Component: About,
    icon_img: about_icon,
    childs: [],
  },
];

export default routes;
