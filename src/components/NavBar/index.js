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
          <a href="#projects">Projects</a>
        </li>
      </ul>
    </nav>
  );
}
