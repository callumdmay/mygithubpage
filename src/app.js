import React, { PropTypes } from "react";
import { Switch, Route } from "react-router-dom";

import NavigationBar from "./components/nav-bar";
import { ROUTES } from "./config/routes";
import Footer from "./components/footer";

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <div className="wrapper">
          <NavigationBar routes={ROUTES}/>
          <div className="content">
            <Main/>
          </div>
        </div>
        <Footer/>
      </div>
    );
  }

  getChildContext() {
    return { is_mobile: ( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) };
  }
}

const Main = () => (
  <main>
    <Switch>
      {
        ROUTES.map(route => (<Route exact path={route.path} component={route.component} key={route.path} />))
      }
    </Switch>
  </main>
);

App.childContextTypes = {
  is_mobile: PropTypes.bool.isRequired
};
export default App;
