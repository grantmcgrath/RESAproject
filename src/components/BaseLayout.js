import React, { Component } from "react";

import { NavLink } from "react-router-dom";

import "../styles/App.css";
import "../styles/global.css";
import "../styles/navigation.css";

export default class BaseLayout extends Component {
  render() {
    return (
      <div>
        <nav id="desktop_nav">
          <div className="nav_bar"><NavLink to="/" className="nav_link">Home</NavLink></div>
          <div className="nav_bar"><NavLink to="/About" className="nav_link">About Us</NavLink></div>
          <div className="nav_bar"><NavLink to="/Contact" className="nav_link">Contact Us</NavLink></div>
          <div className="nav_bar"><NavLink to="/Account" className="nav_link">Account</NavLink></div>
          <div className="nav_bar"><NavLink to="/LogIn" className="nav_link">Log In</NavLink></div>
          <div className="nav_bar"><NavLink to="/Register" className="nav_link">Register</NavLink></div>
        </nav>
        <nav id="mobile_nav">
          <div className="mobile_nav_dropdown">
            <button onClick="mobile_nav()" className="mobile_nav_button">
              <div className="hamburger_container" onClick="hamburger(this)">
                <div className="bar1"></div>
                <div className="bar1"></div>
                <div className="bar1"></div>
              </div>
              <NavLink to="/" className="nav_link"></NavLink>
              <NavLink to="/About" className="nav_link">About Us</NavLink>
              <NavLink to="/Contact" className="nav_link">Contact Us</NavLink>
              <NavLink to="/LogIn" className="nav_link">Log In</NavLink>
              <NavLink to="/Register" className="nav_link">Register</NavLink>
            </button>
          </div>
        </nav>
        <section>
          {this.props.children}
        </section>
      </div>
    )
  }
}
