import React from "react";
import "./Projects.css";

export default function Projects() {
  return (
    <>
      <div className="projects">
        <h1 className="projectsTitle">Projects</h1>
        <div className="projectTop project">
          <h1 className="projectTitle">Dashboard Admin</h1>
          <p className="projectDescription">
            simple dashboard admin create with React.js by Vite using React-Router-Dom and MUI it's so simple now but i
            will add more features to it
          </p>

          <button className="projectLinkBtn">Live Show</button>
        </div>
        <div className="projectsBottom">
          <div className="projectBottonLeft project">
            <h1 className="projectTitle">Dashboard Admin</h1>
            <p className="projectDescription">
              simple dashboard admin create with React.js by Vite using React-Router-Dom and MUI it's so simple now but
              i will add more features to it
            </p>

            <button className="projectLinkBtn">Live Show</button>
          </div>
          <div className="projectBottonRight project">
            <h1 className="projectTitle">Dashboard Admin</h1>
            <p className="projectDescription">
              simple dashboard admin create with React.js by Vite using React-Router-Dom and MUI it's so simple now but
              i will add more features to it
            </p>

            <button className="projectLinkBtn">Live Show</button>
          </div>
        </div>
      </div>
    </>
  );
}
