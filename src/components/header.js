import React from "react";
import { RWebShare } from "react-web-share";

const Header = () => {
  return (
    <header className="general_container_1">
      <div className="profile_section_container">
        <div className="profile_img_container">
          <img
            id="profile_img"
            src={require("../svg/graph_040803.jpg")}
            alt="ProfileImage"
          />
          <div className="camera_icon">
            <img
              src={require("../pseudo-state/profile-hover.svg").default}
              className="camera"
              alt=""
            />
          </div>
        </div>
        <div id="twitter">
          <p>Oladunni Faith</p>
        </div>
        <div id="slack">
          <p>Frontend Software Engineer</p>
        </div>
      </div>
      <a href="#share" className="share-icon">
        <RWebShare
          data={{
            text: "Web Share - link",
            url: "https://mylinktree-1.netlify.app",
            title: "Web-link Share",
          }}
        >
          <img
            className="share_btn"
            src={require("../svg/share-btn.svg").default}
            alt="SvgImage"
          />
        </RWebShare>

        <RWebShare
          data={{
            text: "Web Share - link",
            url: "https://mylinktree-1.netlify.app",
            title: "Web-link Share",
          }}
        >
          <img
            className="more-btn"
            src={require("../svg/more-icon.svg").default}
            alt="SvgImage"
          />
        </RWebShare>
      </a>
    </header>
  );
};

export default Header;
