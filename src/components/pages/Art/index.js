import React from "react";
import "./style.css";
import "../../../gallery.css"
import galleryArr from "./gallery-arr";

import GalleryItem from "./GalleryItem";

export default function Art() {
  return (
    <div className="anchor-box">
      <a name="art" href="/#">
        &nbsp;
      </a>

      <div id="art-container" className="box">
        <div id="art-box">
          <h2>Art and Illustration</h2>
          <p>I've always loved to draw, and spent 5 years as a freelance illustrator creating children's books, branding illustration, portraits and more. Here's some of my favourite pieces I've worked on!</p>
          <div id="gallery" className="misc-gallery">
            {galleryArr.map((a) => {
              return <GalleryItem img={a} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
