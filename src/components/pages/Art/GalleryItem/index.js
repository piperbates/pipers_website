import React from "react";
import "./style.css";

export default function GalleryItem({img}) {
  return (<div className="gallery-item">
    <img src={img.src} className="gallery-img" alt={img.alt}/>
  </div>
  );
}
