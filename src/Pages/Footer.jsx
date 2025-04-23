import { Link } from "react-scroll";
import React from "react";
import logo from "../img/logo.svg"
import instaLogo from "../img/instaLogo.svg"
import linkLogo from "../img/linkedin.svg"
import netlifyLogo from "../img/netlify.svg"

function Footer() {
  return (
    <footer className="footer--container">
      <div className="footer--link--container">
        <div className="footer--link--container--img">
          <a href="#">
            <img src={logo} alt="My Logo" />
          </a>
        </div>
        <div className="footer--items">
          <ul>
            <li>
              <Link
                activeClass="navbar--active-content"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="heroSection"
                className="text-md"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                activeClass="navbar--active-content"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="AboutMe"
                className="text-md"
              >
                About Me
              </Link>
            </li>
            <li>
              <Link
                activeClass="navbar--active-content"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="MyPortfolio"
                className="text-md"
              >
                Portfolio
              </Link>
            </li>
            <li>
              <Link
                activeClass="navbar--active-content"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="mySkills"
                className="text-md"
              >
                Skills
              </Link>
            </li>
            <li>
              <Link
                activeClass="navbar--active-content"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="Contact"
                className="text-md"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className="footer--social--icon">
          <ul>
            <li>
              <a
                href="https://www.linkedin.com/in/iampraveenanthony/"
                className="navbar--content"
                target="_blank"
                rel="noreferrer"
              >
                <img src={linkLogo} alt="linkLogo" />
              </a>
            </li>
            <li>
              <a
                href="https://app.netlify.com/teams/iampraveenanthony/sites"
                className="navbar--content"
                target="_blank"
                rel="noreferrer"
              >
                <img src={netlifyLogo} alt="Logo" />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/iampraveenleo/"
                className="navbar--content"
                target="_blank"
                rel="noreferrer"
              >
                <img src={instaLogo} alt="instaLogo" />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <hr className="divider" />
      <div className="footer--content--container">
        <p className="footer--content">All rights reserved © 2024</p>
        <div className="footer--social--icon">
          <ul>
            <li>
              <Link
                activeClass="navbar--active-content"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="Privacy_Policy"
                className="text-sm"
                onClick={()=>window.location.href='https://policies.google.com/privacy?hl=en-US'}
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                activeClass="navbar--active-content"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="Terms_of_Service"
                className="text-sm"
                onClick={()=>window.location.href='https://policies.google.com/terms?hl=en-US'}
              >
                Terms of Service
              </Link>
            </li>
            <li>
              <Link
                activeClass="navbar--active-content"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="Cookies_Settings"
                className="text-sm"
                onClick={()=>window.location.href='https://chromewebstore.google.com/detail/cookie-editor/hlkenndednhfkekhgcdicdfddnkalmdm?utm_campaign=cgagnier.ca'}
              >
                Cookies Settings
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;