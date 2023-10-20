import React from "react";
import VideoBg from "../images/techno-bg.mp4";
function VideoPlay() {
  return (
    <div>
      <video
        className="w-full h-screen object-cover absolute top-0 left-0 -z-10"
        autoPlay
        loop
        muted
      >
        <source src={VideoBg} type="video/mp4" />
      </video>
    </div>
  );
}

export default VideoPlay;
