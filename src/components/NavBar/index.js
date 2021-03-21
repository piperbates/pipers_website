import React from "react";
import "./style.css";
// import Socials from "../Socials"

export default function NavBar() {
  return (
    
    <nav>
      <ul>
        <li>
          <a title="top" href="#top"><i className="fas fa-home icon"></i>Home</a>
        </li>
       
        <li>
          <a title="projects" href="#projects"><i className="fas fa-code icon"></i>Projects</a>
        </li>
        <li>
          <a title="art" href="#art"><i className="fas fa-paint-brush icon"></i>Art</a>
        </li>
        <li>
          <a title="about" href="#about"><i className="fas fa-grin-beam icon"></i>About</a>
        </li>
        <li>
          <a title="contact" href="#contact"><i className="fas fa-phone icon"></i>Contact</a>
        </li>
      </ul>
    </nav>
  );
}
