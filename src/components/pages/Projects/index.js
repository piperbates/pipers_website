import React, { useState } from "react";
import "./style.css";
import "../../../gallery.css";
import projectArr from "../../../data/projects";
import ReactModal from "react-modal";

export default function Projects() {
  const [modalView, setModalView] = useState(false);
  const [modalInfo, setModalInfo] = useState({
    title: "",
    img: "",
    gif: "",
    desc: "",
    github: "",
    livelink: "",
    techStack: [],
  });

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


        <div id="project-gallery">
          <ReactModal
            isOpen={
              modalView
              /* Boolean describing if the modal should be shown or not. */
            }
            id="modal"
            onRequestClose={closeModal}
          >
            <p
              onClick={closeModal}
              style={{ cursor: "pointer" }}
              className="close-modal-button"
            >
              X
            </p>

            <h1>{modalInfo.title}</h1>
            <p id="modal-desc">
              <img src={modalInfo.img}/>
              {modalInfo.desc}
            </p>
              <ul id="tech-stack">
                {modalInfo.techStack ? (
                  modalInfo.techStack.map((a) => {
                    return (
                      <li class="tech-icons">
                        <i className={a}></i>
                      </li>
                    );
                  })
                ) : (
                  <></>
                )}
              </ul>

              <ul id="modal-links">

               {modalInfo.github ? (
                 <li>
            <a href={modalInfo.github} target="_blank">
              View on GitHub
            </a></li>
        ) : (
          <></>
        )}

        {modalInfo.livelink ? (
          <li> <a href={modalInfo.livelink} target="_blank">
              View Live
            </a></li>
        ) : (
          <></>
        )}
        </ul>


            {/* <a href={modalInfo.livelink}>View Live</a> | <a href={modalInfo.github}>View on Github</a> */}
          </ReactModal>

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
