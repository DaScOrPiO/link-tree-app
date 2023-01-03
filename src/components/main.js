import React from "react";
// import { useNavigate } from 'react-router-dom';

const Main = () => {
  return (
    <div className="general_container_2">
      <div className="links">
        <a
          href="https://twitter.com/oladunni_faith/"
          id="btn__zuri"
          target="_blank"
          rel="noopener noreferrer"
        >
          Twitter Link
          <span className="subtext">Twitter profile link</span>
        </a>
        <a
          href="https://www.linkedin.com/in/faith-oladunni-54ab8920b/"
          id="btn__zuri"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
          <span className="subtext">Catch up with me on LinkedIn</span>
        </a>
        <a
          href="https://github.com/DaScOrPiO"
          id="books"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
          <span className="subtext">View my github repo</span>
        </a>
        <a
          href="https://techzodiac.hashnode.dev/"
          id="book__python"
          target="_blank"
          rel="noopener noreferrer"
        >
          Blog
          <span className="subtext">Checkout my blog posts</span>
        </a>
        <a
          href="https://dascorpio.github.io/Portfolio-site/"
          id="pitch"
          target="_blank"
          rel="noopener noreferrer"
        >
          Website
          <span className="subtext">View my portfolio website</span>
        </a>
        <a
          href="https://books.zuri.team/design-rules"
          id="book__design"
          target="_blank"
          rel="noopener noreferrer"
        >
          Design Books
          <span className="subtext">Free design books</span>
        </a>
        <a href="/contact" id="contact">
          Contact Me
        </a>
      </div>
      <div className="icons_main">
        <div className="slack">
          <a href="#http">
            <img src={require("../svg/slack.svg").default} alt="LogoIcon" />
          </a>
        </div>
        <div className="github">
          <a href="https://github.com/DaScOrPiO">
            <img
              src={require("../svg/Github-icon.svg").default}
              alt="LogoIcon"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Main;
