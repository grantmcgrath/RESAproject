import React, { Component } from 'react';
import '../styles/App.css';
import "../styles/global.css";
import "../styles/about.css";

export default class About extends Component {
  render() {
    return (
      <div id="about_container" className="">
        <section id="about_row_1">
          <div id="network">
            <img src={require("../images/linkedin.png")} alt="LinkedIn" className="social" />
            <img src={require("../images/github.png")} alt="GitHub" className="social" />
          </div>
          <div className="">
            <img src={require("../images/Grant.JPG")} alt="Grant" id="grant_pic" />
          </div>
          <div className="bio_info_left">
            <h2 className="grant">Grant McGrath</h2>
            <p className="bio">Grant is a former Boy Scout who has been interested in computers for most of his life.  He moved from California to North Carolina in 1997, where he started as an IT Support Specialist at 16.  It was then that he knew that he wanted to work with computers.  He has 14 years of experience in various computer jobs, with three and a half years at Apple.  Grant knows React, HTML5, CSS3, and JavaScript.  He enjoys coding, camping and does not enjoy long walks on the beach.</p>
          </div>
        </section>

        <section id="about_row_2">
          <div className="bio_info_right">
            <h2 className="ben">Ben Taylor</h2>
            <p className="bio">Ben has been tinkering with computers for most of his life.  As one of the seemingly few native North Carolinians in the area, he keeps finding his way back to the triangle from points afar.  Having worked in IT for years, he has started a transition to coding problems instead of merely fixing them.  Ben knows Java, HTML5, JavaScript, and CSS3.  In his spare time, he 3D prints all kinds of items, tinkers with electronic gadgets, and has an affinity for foreign languages that don’t share alphabets.</p>
          </div>
          <div>
            <img src={require("../images/Ben.JPG")} alt="Ben" id="ben_pic" className="ben_pic" />
          </div>
          <div id="network">
            <img src={require("../images/linkedin.png")} alt="LinkedIn" className="social" />
            <img src={require("../images/github.png")} alt="GitHub" className="social" />
          </div>
        </section>

      </div>
    );
  }
}
