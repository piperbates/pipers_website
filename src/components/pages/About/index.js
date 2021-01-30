import React from "react";
import "./style.css";
import "../../../box-style.css";
import StoryBox from "./StoryBox";
import {about} from "../../../data/about"
import mugshot from "../../../images/mugshot.jpg"
export default function About() {
  console.log(about)
  return (
    <div className="anchor-box">
      <a name="about" href="/#">
        &nbsp;
      </a>

      <div id="about-container" className="box">
        <h2 id="about-h1">About Me</h2>
        <div id="about-wrapper">
          <img src={mugshot} alt="Selfie of Piper" />
          
          <div><StoryBox
            title={about.past.title}
            text={about.past.pastText}
          />
         
          <StoryBox
            title={about.present.title}
            text={about.present.presentText}
          />

          <StoryBox
            title={about.future.title}
            text={about.future.futureText}
          /></div>

         
        </div>
      </div>
    </div>
  );
}
