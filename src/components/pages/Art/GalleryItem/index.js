import React from "react";

export default function GalleryItem({img}) {
  return (<div className="gallery-item">
    <img src={img.src} alt={img.alt}/>
  </div>
  );
}
