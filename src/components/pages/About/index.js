import React from "react";
import "./style.css";
import "../../../box-style.css";

import mugshot from "../../../images/mugshot.jpg"
import {about} from "../../../data/about"

export default function About() {
  console.log(about)
  return (
    <div className="anchor-box">
       <a name="about" href="/#">
        &nbsp;
      </a>

      <div id="about-container" className="box">
        <h2 id="about-h1">About</h2>
        
        <img src={mugshot} alt="Piper" />

          
          <p>After spending 5 years as a freelance illustrator, in 2020 I decided I wanted a change and jumped head first into the School of Code. I loved my experience at the bootcamp and shortly after it ended I landed my first position in the industry as a Junior Software Engineer at Click Travel. I quickly learnt that there was a surprising amount of crossover between illustration and software engineering - they are both very creative fields with strong collaborative elements and I finally found a career tht I am genuinely passionate about.</p>

          <p></p>
          {/* <div><StoryBox
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
          /></div> */}
      </div>
    </div>
  );
}
