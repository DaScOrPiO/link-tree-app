import React from "react";

const Footer = () => {
  return (
    <footer className="general_container_3">
      {/* <div className='logo_1'>
                <img src={require('../svg/Zuri.Internship_Logo.svg').default} alt='SvgImage' />
            </div> */}
      <div className="text">
        <p>My Linktree App</p>
      </div>
      <div className="logo_2">
        <div className="head">
          <h3>My Tech Stack:</h3>{" "}
        </div>
        <div className="stack-logo">
          <img src={require("../svg/html-5.png")} alt="SvgImage" />
          <img src={require("../svg/css-3.png")} alt="SvgImage" />
          <img src={require("../svg/bootstrap.png")} alt="SvgImage" />
          <img src={require("../svg/sass.png")} alt="SvgImage" />
          <img src={require("../svg/java-script.png")} alt="SvgImage" />
          <img src={require("../svg/physics.png")} alt="SvgImage" />
          <img src={require("../svg/git.png")} alt="SvgImage" />
          <img src={require("../svg/nodejs.png")} alt="SvgImage" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
