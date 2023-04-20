import React from "react";
import Header from "../../components/Header/Header";
import LatestArticles from "../../components/LatestArticles/LatestArticles";
import Projects from "../../components/Projects/Projects";
import ChatWithMe from "../../components/ChatWithMe/ChatWithMe";
import "./Home.css";

export default function Home() {
  return (
    <div className="home">
      <div className="homeContainer">
        <Header />
        <LatestArticles />
        <Projects />
        <div className="wide">
          <ChatWithMe />
        </div>
      </div>
    </div>
  );
}
