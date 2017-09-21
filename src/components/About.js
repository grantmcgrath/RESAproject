import React, { Component } from 'react';
import '../styles/App.css';
import "../styles/global.css";
import "../styles/about.css";

export default class About extends Component {
  render() {
    return (
      <div id="about_container" className="b">
        <section id="about_row_1">
          <div className="about_stager_img">
            <img src={require("../images/staging.jpg")} alt="Something related to Staging" className="about_stager_img" />
          </div>
          <div id="project_description">
            <p>Our App works to connect the members of RESA and the work that they do. The primary functionality of the app is that it stores the data from the Stagers and streamlines it in a way that shows the value of staging a home. It also allows the investors to see what benefits there are from staging a home. It allows them to see the maximum benefit that they can get from the minimum investment which shows how much of a difference a little change can make. </p>
          </div>
        </section>

        <section id="about_row_2">
          <div className="flex_row">
            <div>
              <img src={require("../images/Ben.JPG")} alt="Ben" id="ben_pic" className="" />
            </div>
            <div id="ben_bio" className="">
              <p className="bio_info b">Ben Taylor<br>Ben insert bacon ipsum</p>
            </div>
          </div>
          <div className="flex_row">
            <div>
              <img src={require("../images/Grant.JPG")} alt="Grant" id="grant_pic" className="" />
            </div>
            <div>
              <p className="bio_info b">Some amzing bio info. Or something like that.</p>
            </div>
          </div>
        </section>

        <section id="about_row_3">
          <div>
            <img src={require("../images/Sim.JPG")} alt="Sim" id="sim_pic" className="" />
          </div>
          <div>
            <p className="bio_info b">Simran Saini<br>I am a FullStack developer. I recently graduated from the Iron Yard and have been working with my classmates to create a product that is viable and useful in the real world. I have experience in Ruby, Java, and JavaScript as well as HTML and CSS. I look forward to learning more as I move into my next position. </p>
          </div>
          <div>
            <img src={require("../images/Shontae.JPG")} alt="Shontae" id="shontae_pic" className="" />
          </div>
          <div>
            <p className="bio_info b">Some amzing bio info. Or something like that.</p>
          </div>
        </section>
      </div>
    );
  }
}
