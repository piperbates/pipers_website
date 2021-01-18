import React from "react";
import "./style.css";
import "../../../gallery.css";
import projectArr from "../../../data/projects";


import ProjectBox from "./ProjectBox";
export default function Projects() {
  return (
    <div className="anchor-box">
      <a name="projects" href="/#">
        &nbsp;
      </a>

      <div id="project-container" className="box">
          <h2>Coding Projects</h2>
        <div id="project-box">
         
          <div id="project-gallery" className="misc-gallery">
            {projectArr.map((a) => {
              return <ProjectBox
                title={a.title}
                imgSrc={a.src}
                desc={a.desc}
                link={a.link}
                liveLink={a.liveLink}
              />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
