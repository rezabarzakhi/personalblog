import React from "react";
import "./ChatWithMe.css"

export default function ChatWithMe() {
  return (
    <div className="chatWithMe">
      <h1 className="chatWithMeTitle">What are you working on? </h1>
      <p className="chatWithMeDescription">Let’s have a conversation! I’d love to hear about what you’re working on and find a way to work together.</p>
        <button className="chatWithMeBtn">
            Chat
        </button>
    </div>
  );
}
