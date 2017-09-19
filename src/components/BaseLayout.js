import React, { Component } from "react";

import { NavLink } from "react-router-dom";

import "../styles/App.css";

export default class BaseLayout extends Component {
  render() {
    return (
      <div>
        <nav id="primary_nav">
          <div className="nav_bar"><NavLink to="/" className="nav_link">Home</NavLink></div>
          <div className="nav_bar"><NavLink to="/About" className="nav_link">About Us</NavLink></div>
          <div className="nav_bar"><NavLink to="/Contact" className="nav_link">Contact Us</NavLink></div>
          <div className="nav_bar"><NavLink to="/LogIn" className="nav_link">Log In</NavLink></div>
          <div className="nav_bar"><NavLink to="/Register" className="nav_link">Register</NavLink></div>
        </nav>
        <section>
          {this.props.children}
        </section>
      </div>
    )
  }
}
