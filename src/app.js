import React from "react";
import { Switch, Route } from "react-router-dom";

import NavigationBar from "./components/nav-bar";
import { ROUTES } from "./routes";
import Footer from "./components/footer";

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <NavigationBar routes={ROUTES}/>
        <Main/>
        <Footer/>
      </div>
    );
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

export default App;
