import React, { Component } from 'react';
import '../styles/App.css';
import "../styles/global.css";
import "../styles/register.css";

export default class Register extends Component {
  render() {
    return (
      <div>
        <form id="registration_form">
          <input type="text" name="users_first_name" placeholder="First Name" className="users_first_name" />
          <input type="text" name="users_last_name" placeholder="Last Name" className="users_last_name" />
          <input type="text" name="users_email" placeholder="Email" className="users_email" />
          <input type="text" name="users_password" placeholder="Password" className="users_password" />
          <button type="submit">Register</button>


        </form>
      </div>
    );
  }
}
