import React from "react";
import "./style.css";
import Socials from "../Socials"

export default function NavBar() {
  return (
    <nav>
      <ul>
        <li>
          <a href="#top"><i class="fas fa-home icon"></i>Home</a>
        </li>
        <li>
          <a href="#about"><i class="fas fa-grin-beam icon"></i>About</a>
        </li>
        <li>
          <a href="#projects"><i class="fas fa-code icon"></i>Projects</a>
        </li>
        <li>
          <a href="#art"><i class="fas fa-paint-brush icon"></i>Art</a>
        </li>
        <li>
          <a href="#contact"><i class="fas fa-phone icon"></i>Contact</a>
        </li>
      </ul>
    </nav>
  );
}
