import React from "react";
import "./style.css";

export default function NavBar() {
  return (
    <nav>
      <ul>
        <li>
          <a href="#top">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#projects">Project</a>
        </li>
        <li>
          <a href="#art">Art</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
}
