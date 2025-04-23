import React from "react";
import resume from "../img/Praveen_MCA_Fullstack.pdf";
import heroImg from "../img/hero_img.png" 

function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hey I'm Praveen</p>
          <h1 className="hero--section--title">
            <span className="hero--section--title--color"> Full stack</span>{" "}
            <br />
            Developer
          </h1>
          <p className="hero--section--description">
          • I am a highly motivated Full-Stack Developer with expertise in front-end and back-end technologies. <br /><br />• I have hands-on experience with HTML, CSS, JavaScript, React.js, Bootstrap, and MySQL for building dynamic and responsive web application.
           <br /><br/>• Additionally, I specialize in Python and Django for developing scalable and efficient back-end systems. <br /><br />• Passionate about coding, problem-solving, and creating seamless user experiences, I continuously strive to enhance my skills and stay updated with the latest industry trends.
          </p>
        </div>
        <a href={resume} download>
          <button className="btn btn-primary">Check My CV</button>
        </a>
      </div>
      <div className="hero--section--img">
        <img src={heroImg} alt="heroImg" />
      </div>
    </section>
  );
}

export default HeroSection;
