import React, { PropTypes } from "react";
import classNames from "classnames";

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
      <nav className={classNames("nav-bar", {
          "mobile": this.context.is_mobile
        }
        )}>
        <div className="nav-bar-container">
          {this._renderNavbarTitle()}
          {this._rendermobileNav()}
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

  _renderNavbarTitle() {
    if (this.context.is_mobile) {
      return null;
    }
    return (
      <a className="navbar-title" href="/">
        {"Callum May"}
      </a>
    );
  }

  _rendermobileNav() {
    if (!this.context.is_mobile) {
      return null;
    }
    return (
      <div
        className="mobile-nav-menu-item"
        onClick={() => this._toggleMenu()}
        >
        <svg width="25" height="25" viewBox="0 0 1792 1792" >
          <path d="M1664 1344v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45z"/>
        </svg>
      </div>
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
