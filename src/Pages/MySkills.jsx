import frontPng from "../img/frontend.png";
import backPng from "../img/backend.png";
import framePng from "../img/framework.png";
import designPng from "../img/design.png";

export default function MySkills() {
  return (
    <section className="skills--section" id="mySkills">
      <div className="portfolio--container">
        <p className="section--title">My Skills</p>
        <h2 className="skills--section--heading">My Expertise</h2>
      </div>
      <div className="skills--section--container">
        <div className="skills--section--card">
          <div className="skills--section--img">
            <img src={frontPng} alt="Product Chain" />
          </div>
          <div className="skills--section--card--content">
            <h3 className="skills--section--title">Front-End</h3>
            <p className="skills--section--description">✓ HTML</p>
            <p className="skills--section--description">✓ CSS</p>
            <p className="skills--section--description">✓ JavaScript</p>
            <p className="skills--section--description">✓ Node JS</p>
          </div>
        </div>
        <div className="skills--section--card">
          <div className="skills--section--img">
            <img src={backPng} alt="Product Chain" />
          </div>
          <div className="skills--section--card--content">
            <h3 className="skills--section--title">Back-End</h3>
            <p className="skills--section--description">✓ Python</p>
            <p className="skills--section--description">✓ MySQL</p>
          </div>
        </div>
        <div className="skills--section--card">
          <div className="skills--section--img">
            <img src={framePng} alt="Product Chain" />
          </div>
          <div className="skills--section--card--content">
            <h3 className="skills--section--title">Framework</h3>
            <p className="skills--section--description">✓ React Js</p>
            <p className="skills--section--description">✓ Bootstrap</p>
            <p className="skills--section--description">✓ Django</p>
          </div>
        </div>
        <div className="skills--section--card">
          <div className="skills--section--img">
            <img src={designPng} alt="Product Chain" />
          </div>
          <div className="skills--section--card--content">
            <h3 className="skills--section--title">Design</h3>
            <p className="skills--section--description">✓ FIGMA</p>
            <p className="skills--section--description">✓ CANVA</p>
            <p className="skills--section--description">✓ Illustrator</p>
            <p className="skills--section--description">✓ Photoshop"</p>
          </div>
        </div>
      </div>
    </section>
  );
}
