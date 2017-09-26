import React from "react";

class Home extends React.Component {
  render () {
    return (
      <div className="home">
        <div className="home-header">
          <img className="profile-image" src="images/profile.png" alt="Profile Picture" width="400"/>
          <div className="personal-info">
            <div className="name">
              {"Callum May"}
            </div>
            <div className="school">
              {"Computer Engineering Student - McGill University"}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
