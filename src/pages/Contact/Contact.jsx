import React, { useRef, useState } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef();

  const [username, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userMessage, setUserMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm("service_npk988p", "template_2irtj6l", form.current, "T4PcyBu_FUswYLx39").then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );

    setUserName("");
    setUserEmail("");
    setUserMessage("");
  };

  return (
    <>
      <div className="contact">
        <div className="contactForm">
          <form className="formControl" ref={form} onSubmit={sendEmail}>
            <div className="inputDiv">
              <label className="formInputLable" htmlFor="user_name">
                Full Name
              </label>
              <input
                className="formInput"
                type="text"
                id="user_name"
                name="user_name"
                value={username}
                onChange={(event) => {
                  setUserName(event.target.value);
                }}
              />
            </div>
            <div className="inputDiv">
              <label className="formInputLable" htmlFor="user_email">
                Email
              </label>
              <input
                className="formInput"
                type="email"
                id="user_email"
                name="user_email"
                value={userEmail}
                onChange={(event) => {
                  setUserEmail(event.target.value);
                }}
              />
            </div>

            <div className="inputDiv">
              <label className="formInputLable" htmlFor="message">
                Message
              </label>
              <textarea
                className=" textArea"
                type="text"
                id="message"
                name="message"
                rows={8}
                onChange={(event) => {
                  setUserMessage(event.target.value);
                }}
                value={userMessage}
              />
            </div>
            <input type="submit" value="Send" className="formSendBtn" />
          </form>
        </div>
      </div>
    </>
  );
}
