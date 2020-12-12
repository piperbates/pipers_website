import React from "react";
import "./style.css";
import "../../../box-style.css";
import StoryBox from "./StoryBox";
export default function About() {
  return (
    <div className="anchor-box">
      <a name="about" href="/#">
        &nbsp;
      </a>

      <div id="about-container" className="box">
        <h1 id="about-h1">About Me</h1>
        <div id="about-wrapper">
          {/* <img src={mugshot} alt="Selfie of Piper" /> */}

          <input
            type="checkbox"
            id="about-before-box-toggle"
            className="story-box-toggle"
          />
          <label htmlFor="about-before-box-toggle">
            <div className="storybox-toggle-label">Past</div>
          </label>

          <StoryBox
            storyId="about-before-box"
            text=" My 16 week bootcamp was fully remote, working alongside 47 other
                cohorts over Zoom, using slack, github, and other tools to
                collaborate and solve problems together every single day. I'm
                prepared for a post-covid working environment, am an expert at
                self-directed learning, have the skills to hit the ground
                running."
          />
          <input
            type="checkbox"
            id="about-during-box-toggle"
            className="story-box-toggle"
          />
          <label htmlFor="about-during-box-toggle">
            <div className="storybox-toggle-label">Present</div>
          </label>
          <StoryBox
            storyId="about-during-box"
            text=" My 16 week bootcamp was fully remote, working alongside 47 other
                cohorts over Zoom, using slack, github, and other tools to
                collaborate and solve problems together every single day. I'm
                prepared for a post-covid working environment, am an expert at
                self-directed learning, have the skills to hit the ground
                running."
          />
          <input
            type="checkbox"
            id="about-after-box-toggle"
            className="story-box-toggle"
          />
          <label htmlFor="about-after-box-toggle">
            <div className="storybox-toggle-label">Future</div>
          </label>

          <StoryBox
            storyId="about-after-box"
            text=" My 16 week bootcamp was fully remote, working alongside 47 other
                cohorts over Zoom, using slack, github, and other tools to
                collaborate and solve problems together every single day. I'm
                prepared for a post-covid working environment, am an expert at
                self-directed learning, have the skills to hit the ground
                running."
          />

          {/* <StoryBox storyId="about-during-box" text="During"/>
          <StoryBox storyId="about-future-box" text="After"/> */}

          {/*  */}
        </div>
      </div>
    </div>
  );
}
