import React from "react";

class Footer extends React.Component {
  render () {
    return (
      <footer className="footer">
        <div className="footer-below">
          <div className="col-lg-12">
            {"Copyright "}&copy;
            {" Callum May " + new Date().getFullYear()}
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
