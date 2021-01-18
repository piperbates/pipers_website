import React from "react";


export default function ProjectBox(props) {
  return <div className="smol-project-box">
    
        <h3>{props.title}</h3>
    <img src={props.imgSrc} alt={props.title} />

      <a href={props.liveLink}>
      </a>
        <p>{props.desc}</p>

          <p>
          {props.liveLink ? <><a href={props.liveLink}>View Live</a><br/></> : ""}

            

            {props.link ? <a href={props.link}>View On GitHub</a> : ""}
            
          </p>
    
  </div>;
}
