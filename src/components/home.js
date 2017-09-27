import React from "react";

class Home extends React.Component {
  render () {
    return (
      <div className="home">
        <img className="profile-image" src="images/profile.png" alt="Profile Picture"/>
        <div className="personal-info">
          <div className="name">
            {"Callum May"}
          </div>
          <div className="school">
            {"Computer Engineering Student - McGill University"}
          </div>
          <div>
            <p>{"Born in Scotland, grew up in Calgary, and currently residing in Montreal. I am in my fourth year of Computer Engineering at McGill University. Whenever I'm not working, I like to spend my time skiing, playing soccer, and travelling."}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
