import React, { Component } from 'react';

import "../styles/global.css";
import "../styles/login.css";


export default class LogIn extends Component {
  render() {
    return (
      <div id="log_in">
        <form id="log_in_form">
          <h1 id="login_title">Login</h1>
          <input type="text" name="username" placeholder="Username" className="log_in_username" />
          <input type="password" name="password" placeholder="Password" className="log_in_password" />
          <input type="submit"  value="Log In" className="submit_clear" />
        </form>
      </div>
    );
  }
}
