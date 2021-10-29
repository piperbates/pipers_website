

import React from "react";
import "./style.css";
import "../../../box-style.css"
import mugshot from "../../../images/mugshot.jpg";

export default function Home() {
   return (<div id="home-container" className="box">
   
        <div id="home-box">

        <h1 id="home-h1">Piper Bates</h1>
        <h2>The Journey of a Software Developer</h2>

        <img src={mugshot} alt="An illustration of Piper" />
        <p>A software engineer with a background in illustration. I've spent the last 5 years as a freelance illustrator and took a leap of faith in 2020 to pursue my fascination with code.</p><p>I've recently graduated from the School of Code bootcamp where I learnt in just 16 weeks to become a full stack JavaScript developer and now work as a Junior Software Engineer at Click Travel.</p>
        </div>
      </div>)
}