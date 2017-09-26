import Home from "./components/home";
import Portfolio from "./components/portfolio";

export const ROUTES = [
  {
    label: "Home",
    path: "/",
    component: Home
  },
  {
    label: "Portfolio",
    path: "/portfolio",
    component: Portfolio
  },
  {
    label: "About",
    path: "/about",
    component: "About"

  },
  {
    label: "Contact",
    path: "/contact",
    component: "Contact"
  }
];
