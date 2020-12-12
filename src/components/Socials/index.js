import React from "react";
import "./style.css";

export default function Socials() {
  return (
    <div id="socials">
      <ul>
        <li>
          <a href="http://www.github.com/piperbates">
          <i className="fab fa-github"></i>
          </a>
        </li>
        <li>
          <a href="http://www.linkedin.com/in/piperbates">
          <i className="fab fa-linkedin-in"></i>
          </a>
        </li>
        <li>
          <a href="http://www.twitter.com/piperstrangeart">
            <i className="fab fa-twitter"></i>
          </a>
        </li>
      </ul>
    </div>
  );
}
