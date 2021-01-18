import React from "react";
import "./style.css";
import "../../../box-style.css";
import { socialsArr } from "../../../data/socials.js";
import emailjs from "emailjs-com";
import { config } from "../../../config";

export default function Contact() {
  function sendEmail(e) {
    e.preventDefault();
    console.log(e.target.name)
    emailjs
      .sendForm(
        config.emailJsServiceId,
        config.emailJsTemplateId,
        e.target,
        config.emailJsUserId
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Thanks for your email")
          e.target.reset();
        },
        (error) => {
          alert("An error occured. Please try again.")

          console.log(error.text);
        }
      );
  }
  return (
    <div className="anchor-box">
      <a name="contact" href="/#">
        &nbsp;
      </a>

      <div id="contact-container" className="box">
        <div id="contact-box">
          <h2>Get In Touch</h2>
          <p>
            I'm always happy to hear from people who love to code, and I'm
            excited about the new direction my life is taking. 
          </p>
        
          <form className="contact-form" onSubmit={sendEmail}>
            <input type="hidden" name="contact_number" />
            <label>Your Name</label>
            <input type="text" name="user_name" />
            <label>Your Email</label>
            <input type="email" name="user_email" />
            <label>Message</label>
            <textarea name="message" class="textarea" />
            <input type="submit" value="Send" />
          </form>
        </div>
      </div>
    </div>
  );
}
