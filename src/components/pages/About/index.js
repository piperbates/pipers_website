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

          
          <p>I've spent the last 5 years working as a freelance illustrator, working on everything from children's books to the occasional graphic design. I've always loved to be creative and my passion for learning, storytelling, and creativity drew me at first to working as a freelancer. However, I soon learned that freelancing is 90% self promotion and only 10% the work I actually loved to do.</p>

<p>Now I've graduated from my 16 week, fully remote bootcamp I'm looking for my first position as a developer. Working alongside 47 other cohorts over Zoom, we used slack, github, and other tools to collaborate and solve problems together every single day. Because we trained entirely over Zoom, I'm ready for a covid work environmnt as well as fully prepared to come back to the office. What's more, being self employed for so long has made me an expert in self directed learning, and I have the skills to hit the ground running.</p>

<p>I can't imagine not working in a creative field, and my plans for the future revolve around this. I hope to be constantly growing and developing myself, my skills, and being able to build better and better tech. Working within a company that values growth, giving me the opportunity to better myself every day, would be like a dream come true for me. I'd ideally like to work in a company where I can really make a difference with my skills and perspectives, as my unique background before the tech industry means I have a lot more to offer. I've now realised that tech is an industry in which you need people from diverse backgrounds in order to properly solve the problems of today, and I'm ready to bring that into any future role. If you think that might be with you and your company, get in touch with me!</p>
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
