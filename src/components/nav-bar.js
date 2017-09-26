import React, { PropTypes } from "react";

const propTypes = {
    routes: PropTypes.array.isRequired
};

class NavigationBar extends React.Component {
  render () {
    return (
      <nav className="nav-bar">
        <div className="nav-bar-container">
          <a href="/">
            <div className="navbar-title">
              {"Callum May"}
            </div>
          </a>
          <div className="routes">
            {
              this.props.routes.map(route => {
                let className = "route ";
                if (route.path === window.location.pathname) {
                  className = className.concat("current");
                }
                return (
                  <a key={route.label} href={route.path}>
                    <div className={className}>
                      {route.label}
                    </div>
                  </a>
                );
              })
            }
          </div>
        </div>
      </nav>
    );
  }
}

NavigationBar.propTypes = propTypes;
export default NavigationBar;
