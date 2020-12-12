import React from "react";
import "./style.css";
import "../../../gallery.css";
import projectArr from "./project-arr";

import ProjectBox from "./ProjectBox";
export default function Projects() {
  return (
    <div className="anchor-box">
      <a name="projects" href="/#">
        &nbsp;
      </a>

      <div id="project-container" className="box">
        <div id="project-box">
          <h1 id="project-h1">Coding Projects</h1>
          <p>
            Coding bla bla bla
          </p>
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
