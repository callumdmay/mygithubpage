import React from "react";
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";

import ScrollToTop from "./components/scroll-top";
import App from "./app";

render(
  <BrowserRouter>
    <ScrollToTop>
      <App/>
    </ScrollToTop>
  </BrowserRouter>,
    document.getElementById("react-content")
);
