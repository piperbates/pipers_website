import React, { useState } from "react";
import "./style.css";
import menutoggle from "../../images/menutoggle.png";
import menuhide from "../../images/menuhide.png";
import NavBar from "../NavBar"

export default function MenuToggle() {
const [menuDisplay, setMenuDisplay] = useState(true);

function toggle(){
  setMenuDisplay(!menuDisplay);
  console.log(menuDisplay)
}
 

  return (
    <div id="navigation-bar">
      <input type="checkbox" id="menu-toggle" name="menu-toggle" />
      <label htmlFor="menu-toggle" onClick={toggle}>
        <img src={menuDisplay ? menutoggle : menuhide} id="menu-toggle-image" alt="toggle menu" />
      </label>
      <NavBar />

      
    </div>
  );
}
