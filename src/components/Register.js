import React, { Component } from 'react';
import '../styles/App.css';
import "../styles/global.css";
import "../styles/register.css";
import "../images/logo_large_orange.png";

export default class Register extends Component {
  render() {
    return (
      <div id="registration_page">
        <div id="registration_img">
          <img src={require("../images/logo_large_orange.png")} alt="Stage Hand Logo" />
        </div>
        <div  id="registration_form">
          <h3>Register with our service in order to make the most of the work that you do as a Stager.</h3>
          <form>
            <input type="text" name="users_first_name" placeholder="First Name" className="users_first_name" />
            <input type="text" name="users_last_name" placeholder="Last Name" className="users_last_name" />
            <input type="text" name="users_email" placeholder="Email" className="users_email" />
            <input type="text" name="users_password" placeholder="Password" className="users_password" />
            <button type="submit">Register</button>
          </form>
        </div>
      </div>
    );
  }
}
