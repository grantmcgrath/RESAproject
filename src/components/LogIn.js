import React, { Component } from 'react';
import '../styles/App.css';
import "../styles/global.css";
import "../styles/login.css";

export default class LogIn extends Component {
  render() {
    return (
      <div id="log_in">
        <div>
          <img src={require("../images/logo_large_orange.png")} alt="Stage Hand Logo" />
        </div>
        <form id="log_in_form">
          <input type="text" name="email" placeholder="email" className="log_in_email" />
          <input type="password" name="password" placeholder="password" className="log_in_password" />
          <button type="submit" id="login_button">Log In</button>
        </form>
      </div>
    );
  }
}
