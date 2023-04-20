import React from "react";
import "./Header.css";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";

export default function Header() {
  return (
    <div className="header">
      <div className="header-title">
        <h1>I’m Reza, web developer with React.js</h1>
      </div>
      <div className="header-discribe">
        <p>
          My name is Reza Barzakhi and I am 28 years old. I am a web developer with some skills in HTML, CSS, and
          JavaScript. I am currently learning React.js and am excited to continue expanding my knowledge in the field of
          web development.
        </p>
      </div>
      <div className="header-socials">
        <button className="twitter socialBtn">
          <a href="https://twitter.com/rezabarzakhi">
            <TwitterIcon className="socialIcon" />
            Follow
          </a>
        </button>
        <button className=" socialBtn gitHub">
          <a href="https://github.com/rezabarzakhi">
            <GitHubIcon className="socialIcon" />
            Follow
          </a>
        </button>
      </div>
    </div>
  );
}
