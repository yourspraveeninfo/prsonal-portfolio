import React from 'react';
import aboutImg from "../img/about-me.png";

function AboutMe() {
  return (
    <section id="AboutMe" className="about--section">
      <div className="about--section--img">
        <img src={aboutImg} alt="About Me" />
      </div>
      <div className="hero--section--content--box about--section--box">
        <div className="hero--section--content">
          <p className="section--title">Profile</p>
          <h1 className="skills-section--heading">About Me</h1>
          <p className="hero--section-description">
            Enthusiastic and detail-oriented recent computer science graduate
            with hands-on experience in Python programming and full stack
            development. Eager to apply my technical skills and knowledge to
            contribute to dynamic development projects.
          </p>
          <p className="hero--section-description">
            Committed to continuous learning and eager to grow as a Python Full
            Stack Developer in a challenging and supportive environment.
          </p>
        </div>
      </div>
    </section>
  )
}

export default AboutMe