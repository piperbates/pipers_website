import React, { useState } from "react";
import "./style.css";
import "../../../gallery.css";
import projectArr from "../../../data/projects";
import Modal from "../../Modal";

export default function Projects() {
  const [modalView, setModalView] = useState(false);
  const [modalInfo, setModalInfo] = useState({title: "", img: "", gif: "", desc:"", github:"", livelink: "", techStack: []});

  function handleClick(title, img, gif, desc, github, livelink, techStack) {
    setModalView(!modalView);
    setModalInfo({ title, img, gif, desc, github, livelink, techStack });
  }

  function closeModal() {
    if (modalView) {
      setModalView(false);
    } else {
      return;
    }
  }

  return (
    <div className="anchor-box">
      <a name="projects" href="/#">
        &nbsp;
      </a>

      <div id="project-container" className="box">
        <h2>Coding Projects</h2>
        <p>(Click on an image for more information)</p>

        <Modal visability={modalView} info={modalInfo} setState={closeModal} />

        <div id="project-box">
          <div id="project-gallery" className="misc-gallery">
            {projectArr.map((a) => {
              return (
                <div className="smol-project-box">
                  <h3>{a.title}</h3>
                  <img
                    src={a.src}
                    alt={a.title}
                    onClick={() => {
                      handleClick(
                        a.title,
                        a.src,
                        a.gif,
                        a.desc,
                        a.link,
                        a.liveLink ? a.liveLink : "",
                        a.techStack
                      );
                    }}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

//  {/* <>
//                   <ProjectBox
//                     title={a.title}
//                     imgSrc={a.src}
//                     handleClick={() => {
//                       handleClick(a.title, a.src, a.gif, a.desc, a.link, a.liveLink);
//                     }}
//                   />
//                 </> */}
