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
          <h2 className="name">
            {"Callum May"}
          </h2>
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
          <a className="button" href="Callum May Resume.pdf">
            <svg width="20" height="20" viewBox="0 0 1792 1792">
              <path d="M1596 380q28 28 48 76t20 88v1152q0 40-28 68t-68 28h-1344q-40 0-68-28t-28-68v-1600q0-40 28-68t68-28h896q40 0 88 20t76 48zm-444-244v376h376q-10-29-22-41l-313-313q-12-12-41-22zm384 1528v-1024h-416q-40 0-68-28t-28-68v-416h-768v1536h1280zm-1024-864q0-14 9-23t23-9h704q14 0 23 9t9 23v64q0 14-9 23t-23 9h-704q-14 0-23-9t-9-23v-64zm736 224q14 0 23 9t9 23v64q0 14-9 23t-23 9h-704q-14 0-23-9t-9-23v-64q0-14 9-23t23-9h704zm0 256q14 0 23 9t9 23v64q0 14-9 23t-23 9h-704q-14 0-23-9t-9-23v-64q0-14 9-23t23-9h704z"/>
            </svg>
            {"Resume"}
          </a>
        </div>
      </div>
    );
  }
}

Home.contextTypes = contextTypes;
export default Home;
