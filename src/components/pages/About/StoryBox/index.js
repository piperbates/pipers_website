import React from "react";

export default function StoryBox({storyId, text}) {
  
  return (
    
      <div id={storyId} className="about-story-box">
      {text}

      </div>
  );
}
