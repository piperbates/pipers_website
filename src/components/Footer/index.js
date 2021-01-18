import React from "react";
import "./style.css";
import "../../box-style.css";
import { socialsArr } from "../../data/socials";
import { config } from "../../config";


export default function Footer() {
  return (
    <footer>
      <div id="footer-box">
        <ul>
          <li>&copy; Piper Bates 2021</li>
          {socialsArr.map((item) => {
            if (item.title === "email" || item.title === "tel") {
              return <></>;
            } else {
              return (
                <>
                  <li>|</li>
                  <li>
                    <a href={item.link}>{item.title}</a>
                  </li>
                </>
              );
            }
          })}
          <li>|</li>
          <li>
           {config.myEmail}
          </li>
        </ul>
      </div>
    </footer>
  );
}
