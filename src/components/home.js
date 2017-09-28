import React, { PropTypes } from "react";

const contextTypes = {
  is_mobile: PropTypes.bool.isRequired
};

class Home extends React.Component {
  render () {
    return (
      <div className="home">
        <div>
          <img className="profile-image" src="images/profile.png" alt="Profile Picture" width="400px"/>
        </div>
        <div className="personal-info">
          <div className="name">
            {"Callum May"}
          </div>
          <div className="school">
            {"Computer Engineering Student - McGill University"}
          </div>
          <div className="divider"/>
          <div className="about">
            <p>
              {"Born in Scotland, grew up in Calgary, and currently residing in Montreal. I am in my fifth year of Computer Engineering at McGill University. Whenever I'm not working, I like to spend my time skiing, playing soccer, and travelling."}
            </p>
            <p>
              {"I enjoy working in a full stack environment, and am also very interested in Machine Learning, especially in the field of Computer Vision. If you want to know more please checkout my resume below."}
            </p>
          </div>
          <a className="button" href="http://github.com/callumdmay">GitHub</a>
        </div>
      </div>
    );
  }
}

Home.contextTypes = contextTypes;
export default Home;
