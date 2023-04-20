import React from "react";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import "./Footer.css"

export default function Footer() {
  return (
    <>
      <div className="footer">
        <div className="footerLeft">
          <p className="footerDescription">Designed by Ryan Warner and developed by Reza Barzakhi. Built with Vite.</p>
        </div>
        <div className="footerRight">
          <a className="footerSocial" href="https://twitter.com/rezabarzakhi">
            <TwitterIcon className="footerSocialIcon" />
          </a>
          <a className="footerSocial" href="https://github.com/rezabarzakhi">
            <GitHubIcon className="footerSocialIcon" />
          </a>
        </div>
      </div>
    </>
  );
}
