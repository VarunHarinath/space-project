import React from "react";
import sampleVideo from "../../assets/Purple Black Modern Futuristic Outer Space Video.mp4";
import sampleVideo1 from "../../assets/Black Orange Space Coming Soon Video.mp4";

const VideoPlayer = () => {
  return (
    <>
      {/* First Video */}
      <div className="relative w-full h-[50vh] overflow-hidden">
        {" "}
        {/* Use h-[50vh] to restrict height */}
        <video
          className="absolute top-0 left-1/2 transform -translate-x-1/2 object-cover"
          src={sampleVideo}
          autoPlay
          loop
          muted
          playsInline
          style={{
            width: "100%", // Full width of the screen
            height: "100%", // Ensures the video takes up the full height of the container
          }}
        />
        {/* Text Overlay - Centered */}
        <div className="absolute top-2/4 left-1/2 transform -translate-x-1/2 -translate-y-2/4 text-white text-4xl font-bold z-10">
          Welcome to Our Universe
        </div>
      </div>

      {/* Second Video (If you want to use it later) */}
      {/* <div className="relative w-full h-[50vh] overflow-hidden">
        <video
          className="absolute top-0 left-1/2 transform -translate-x-1/2 object-cover"
          src={sampleVideo1}
          autoPlay
          loop
          muted
          playsInline
          style={{
            width: "100%", // Full width of the screen
            height: "100%", // Ensures the video takes up the full height of the container
          }}
        />

        <div className="absolute top-2/4 left-1/2 transform -translate-x-1/2 -translate-y-2/4 text-white text-4xl font-bold z-10">
          Welcome to Our Universe
        </div>
      </div> */}
    </>
  );
};

export default VideoPlayer;
