import React, { PropTypes } from "react";

const propTypes = {
    routes: PropTypes.array.isRequired
};

const contextTypes = {
  is_mobile: PropTypes.bool.isRequired
};

class NavigationBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }

  render () {
    return (
      <nav className="nav-bar">
        <div className="nav-bar-container">
          <a className="navbar-title" href="/">
            {"Callum May"}
          </a>
          <div
            className="mobile-nav-menu-item"
            onClick={() => this._toggleMenu()}
            >
            <svg width="25" height="25" viewBox="0 0 1792 1792" >
              <path d="M1664 1344v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45z"/>
            </svg>
          </div>
          {
            (this.context.is_mobile && this.state.open) || !this.context.is_mobile ?
              (
                <div className="routes">
                  {
                    this.props.routes.map(route => {
                      let className = "route ";
                      if (route.path === window.location.pathname) {
                        className = className.concat("current");
                      }
                      return (
                        <a
                          key={route.label}
                          href={route.path}
                          className={className}
                          onClick={() => this._toggleMenu(false)}
                          >
                          {route.label}
                        </a>
                      );
                    })
                  }
                </div>
              )
            : null
          }
        </div>
      </nav>
    );
  }

  _toggleMenu(state) {
    this.setState({
      open: state !== undefined ? state : !this.state.open
    });
  }
}

NavigationBar.propTypes = propTypes;
NavigationBar.contextTypes = contextTypes;
export default NavigationBar;
