import React, { PropTypes } from "react";
import { withRouter } from "react-router";

const propTypes = {
  location: PropTypes.object,
  children: PropTypes.object
};

class ScrollToTop extends React.Component {
  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      window.scrollTo(0, 0);
    }
  }

  render() {
    return this.props.children;
  }
}

ScrollToTop.propTypes = propTypes;

export default withRouter(ScrollToTop);
