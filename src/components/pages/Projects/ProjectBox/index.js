import React from "react";


export default function ProjectBox(props) {
  return <div className="smol-project-box">
    
        <h2>{props.title}</h2>
    <img src={props.imgSrc} alt={props.title} />

      <a href={props.liveLink}>
      </a>
        <p>{props.desc}</p>

          <p>
            <a href={props.liveLink}>View Live</a><br/>
            <a href={props.link}>View On GitHub</a>
          </p>
    
  </div>;
}
