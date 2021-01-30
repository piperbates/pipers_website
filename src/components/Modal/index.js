import React from "react";
import "./style.css";
import techStackIcons from "../../data/projects"


export default function Modal({ visability, info, setState }) {
  function findE(e) {
    e.stopPropagation();
    if (e.target.id === "project-gallery" || e.target.id === "root") {
      setState();
    }
  }

  if (info.techStack) {
    info.techStack.map((a) => {
      console.log(a);
    });
  }

  document.addEventListener("click", findE);

  return (
    <div
      onClick={findE}
      className={visability ? "modal-visable" : "modal-not-visable"}
      id="modal"
    >
      <button onClick={setState} className="modal-button">
        X
      </button>
      <h1>{info.title}</h1>
    
      <div id="modal-content">
        {info.gif ? (
          <img src={info.gif} />
        ) : (
          <img
            src={info.img}
            style={info.desc ? {} : { width: "400px", height: "auto" }}
          />
        )}

        <div id="modal-sidebar">
          <p>{info.desc}</p>

          <ul id="tech-stack">
            {info.techStack ? (
              info.techStack.map((a) => {
                return <li class="tech-icons"><i className={a}></i></li>;
              })
            ) : (
              <></>
            )}
          </ul>
          </div>

      <div id="modal-footer">
        {info.github ? (
          <p>
            <a href={info.github} target="_blank">
              View on GitHub
            </a>
          </p>
        ) : (
          <></>
        )}

        {info.livelink ? (
          <p>
            <a href={info.livelink} target="_blank">
              View Live
            </a>
          </p>
        ) : (
          <></>
        )}
        </div>
      </div>

    </div>
  );
}
