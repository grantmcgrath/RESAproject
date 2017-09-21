import React, { Component } from 'react';
import '../styles/App.css';
import "../styles/global.css";
import "../styles/about.css";

export default class About extends Component {
  render() {
    return (
      <div id="about_container" className="">
        <section id="about_row_1">
          <div className="about_stager_img">
            <img src={require("../images/staging.jpg")} alt="Something related to Staging" className="about_stager_img" />
          </div>
          <div id="project_description">
            <p>An explanation about our lovely project would go here. Sim, you know how to write word, right? Do this. I no good at words.</p>
          </div>
        </section>

        <section id="about_row_2">
          <div className="flex_row">
            <div>
              <img src={require("../images/Ben.JPG")} alt="Ben" id="ben_pic" className="" />
            </div>
            <div id="ben_bio" className="">
              <p className="bio_info">Some amzing bio  info. Or something like that.</p>
            </div>
          </div>
          <div className="flex_row">
            <div>
              <img src={require("../images/Grant.JPG")} alt="Grant" id="grant_pic" className="" />
            </div>
            <div>
              <p className="bio_info">Some amzing bio info. Or something like that.</p>
            </div>
          </div>
        </section>

        <section id="about_row_3">
          <div className="flex_row">
            <div>
              <img src={require("../images/Sim.JPG")} alt="Sim" id="sim_pic" className="" />
            </div>
            <div>
              <p className="bio_info">Some amzing bio info. Or something like that.</p>
            </div>
          </div>
          <div className="flex_row">
            <div>
              <img src={require("../images/Shontae.JPG")} alt="Shontae" id="shontae_pic" className="" />
            </div>
            <div>
              <p className="bio_info">Some amzing bio info. Or something like that.</p>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
