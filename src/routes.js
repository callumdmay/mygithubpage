import Home from "./components/home";
import Portfolio from "./components/portfolio";
import Contact from "./components/contact";

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
    label: "Contact",
    path: "/contact",
    component: Contact
  }
];
