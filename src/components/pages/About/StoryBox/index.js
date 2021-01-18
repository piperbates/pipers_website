import React from "react";
import "../style.css";

export default function StoryBox({ title, text }) {
  let upperTitle = title[0].toUpperCase() + title.slice(1);

  return (
    <>        <div class="storybox"><h3>{upperTitle}</h3>
    
    {text}
</div>

    </>
  );
}
