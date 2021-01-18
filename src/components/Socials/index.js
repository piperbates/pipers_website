import React from "react";
import "./style.css";
import { socialsArr } from "../../data/socials";

export default function Socials() {
console.log(process.env.REACT_APP_USER_ID)
  return (
    <div id="socials">
      <ul>
        {socialsArr.map((item) => {
          if (item.icon) {
            return (
              <li>
                <a href={item.link}>
                  <i className={item.icon}></i>
                </a>
              </li>
            );
          } else {
            return <></>;
          }
        })}
      </ul>
    </div>
  );
}
