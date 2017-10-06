import React, { Component } from 'react';

import "../styles/global.css";
import "../styles/login.css";


export default class LogIn extends Component {
  render() {
    return (
      <div id="log_in">
        <form id="log_in_form">
          <h1 id="login_title">Login</h1>
          <input type="text" name="email" placeholder="email" className="log_in_email" />
          <input type="password" name="password" placeholder="password" className="log_in_password" />
          <div id="submit_clear_row">
            <input type="submit"  value="Log In" className="submit_clear" />
            <input type="reset" value="Clear" className="submit_clear" />
          </div>
        </form>
      </div>
    );
  }
}
