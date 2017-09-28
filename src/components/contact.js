import React from "react";

class Contact extends React.Component {
  render () {
    return (
      <div className="contact">
        <h2>{"Let's have a coffee."}</h2>
        <form name="sentMessage" method="POST" action="http://formspree.io/callumdmay@gmail.com">
          <div className="form-control">
            <input type="name" name="name" placeholder="Name" id="name"/>
          </div>
          <div className="form-control">
            <input type="email" name="email" placeholder="Email Address" id="email"/>
          </div>
          <div className="form-control">
            <input type="tel" name="tel" placeholder="Phone Number" id="phone"/>
          </div>
          <div className="form-control">
            <textarea name="message" rows="5" placeholder="Message" id="message"/>
          </div>
          <br/>
          <div id="success"></div>
          <div className="submit-button"></div>
          <button type="submit" className="button">Send</button>
        </form>
      </div>
    );
  }
}

export default Contact;
