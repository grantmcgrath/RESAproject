import React, { Component } from "react";

import { NavLink } from "react-router-dom";

import "../styles/global.css";
import "../styles/navigation.css";

import "../images/logo.png";

export default class BaseLayout extends Component {
  render() {
    return (
      <div id="nav_bar">
        <nav id="desktop_nav">
          <img src={require("../images/trans_logo.png")} alt="Stage Hand Logo" />
          <div className="nav_bar"><NavLink to="/" className="nav_link">Home</NavLink></div>
          <div className="nav_bar"><NavLink to="/About" className="nav_link">About Us</NavLink></div>
          <div className="nav_bar"><NavLink to="/Account" className="nav_link">Account</NavLink></div>
          <div className="filler"></div>
          <div className="nav_bar_lower"><NavLink to="/LogIn" className="nav_link">Log In</NavLink></div>
          <div className="nav_bar_lower"><NavLink to="/Register" className="nav_link">Register</NavLink></div>
        </nav>
        <nav id="mobile_nav">
          <div className="mobile_nav_dropdown">
            <button  className="mobile_nav_button">
              <div className="hamburger_container" >
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
        <section id="children_components">
          {this.props.children}
        </section>
      </div>
    )
  }
}
