import React from "react";
import { RWebShare } from "react-web-share";

const Main = () => {
  return (
    <div className="general_container_2">
      <div className="links">
        <a
          href="https://twitter.com/oladunni_faith/"
          id="btn__zuri"
          target="_blank"
          rel="noopener noreferrer"
          className="link"
        >
          Twitter
          <span>
            <RWebShare
              data={{
                text: "Web Share - link",
                url: "https://twitter.com/oladunni_faith/",
                title: "Web-link Share",
              }}
            >
              <img
                className="share_btn-1"
                src={require("../svg/share-btn.svg").default}
                alt="SvgImage"
              />
            </RWebShare>
          </span>
          <span className="subtext">Twitter profile link</span>
        </a>
        <a
          href="https://www.linkedin.com/in/faith-oladunni-54ab8920b/"
          id="btn__zuri"
          target="_blank"
          rel="noopener noreferrer"
          className="link"
        >
          LinkedIn
          <span>
            <RWebShare
              data={{
                text: "Web Share - link",
                url: "https://www.linkedin.com/in/faith-oladunni-54ab8920b/",
                title: "Web-link Share",
              }}
            >
              <img
                className="share_btn-1"
                src={require("../svg/share-btn.svg").default}
                alt="SvgImage"
              />
            </RWebShare>
          </span>
          <span className="subtext">Catch up with me on LinkedIn</span>
        </a>
        <a
          href="https://github.com/DaScOrPiO"
          id="books"
          target="_blank"
          rel="noopener noreferrer"
          className="link"
        >
          Github
          <span>
            <RWebShare
              data={{
                text: "Web Share - link",
                url: "https://github.com/DaScOrPiO",
                title: "Web-link Share",
              }}
            >
              <img
                className="share_btn-1"
                src={require("../svg/share-btn.svg").default}
                alt="SvgImage"
              />
            </RWebShare>
          </span>
          <span className="subtext">View my github repo</span>
        </a>

        <a
          href="https://dascorpio.github.io/Portfolio-site/"
          id="pitch"
          target="_blank"
          rel="noopener noreferrer"
          className="link"
        >
          Website
          <span>
            <RWebShare
              data={{
                text: "Web Share - link",
                url: "https://dascorpio.github.io/Portfolio-site/",
                title: "Web-link Share",
              }}
            >
              <img
                className="share_btn-1"
                src={require("../svg/share-btn.svg").default}
                alt="SvgImage"
              />
            </RWebShare>
          </span>
          <span className="subtext">View my portfolio website</span>
        </a>

        <a
          href="https://techzodiac.hashnode.dev/"
          id="book__python"
          target="_blank"
          rel="noopener noreferrer"
          className="link"
        >
          Blog
          <span>
            <RWebShare
              data={{
                text: "Web Share - link",
                url: "https://techzodiac.hashnode.dev/",
                title: "Web-link Share",
              }}
            >
              <img
                className="share_btn-1"
                src={require("../svg/share-btn.svg").default}
                alt="SvgImage"
              />
            </RWebShare>
          </span>
          <span className="subtext">Checkout my blog posts</span>
        </a>

        <a
          href="https://www.upwork.com/freelancers/~019d10f5a6363bb561"
          id="book__python"
          target="_blank"
          rel="noopener noreferrer"
          className="link"
        >
          Upwork
          <span>
            <RWebShare
              data={{
                text: "Web Share - link",
                url: "https://www.upwork.com/freelancers/~019d10f5a6363bb561",
                title: "Web-link Share",
              }}
            >
              <img
                className="share_btn-1"
                src={require("../svg/share-btn.svg").default}
                alt="SvgImage"
              />
            </RWebShare>
          </span>
          <span className="subtext">Find me on upwork</span>
        </a>

        <a
          href="https://books.zuri.team/design-rules"
          id="book__design"
          target="_blank"
          rel="noopener noreferrer"
          className="link"
        >
          Design Books
          <span>
            <RWebShare
              data={{
                text: "Web Share - link",
                url: "https://books.zuri.team/design-rules",
                title: "Web-link Share",
              }}
            >
              <img
                className="share_btn-1"
                src={require("../svg/share-btn.svg").default}
                alt="SvgImage"
              />
            </RWebShare>
          </span>
          <span className="subtext">Free design books</span>
        </a>
        <a href="/contact" id="contact" className="link">
          Contact Me
          <span className="subtext">Got something for me? Get in touch</span>
        </a>
      </div>
      <div className="icons_main">
        <div className="slack">
          <a href="#http">
            <img src={require("../svg/slack.svg").default} alt="LogoIcon" />
          </a>
        </div>
        <div className="github">
          <a href="mailto:dunni82@yahoo.com">
            <img
              src={require("../svg/email.png")}
              alt="LogoIcon"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Main;
