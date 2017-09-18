import React, { Component } from "react";

import { NavLink } from "react-router-dom";

import "../styles/App.css";

export default class BaseLayout extends Component {
  render() {
    return (
      <div>
        <nav id="primary_nav">
          <div className="nav_link"><NavLink to="/">Home</NavLink></div>
          <div className="nav_link"><NavLink to="/LogIn">Log In</NavLink></div>
          <div className="nav_link"><NavLink to="/Register">Register</NavLink></div>
        </nav>
        <section>
          {this.props.children}
        </section>
      </div>
    )
  }
}
