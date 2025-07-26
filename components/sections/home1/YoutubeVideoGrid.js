"use client";
import React from "react";
import LiteYouTubeEmbed from "react-lite-youtube-embed";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";

const YouTubeVideoGrid = () => {
  const videos = [
    { id: "c2nyy2D2xlo", title: "Video 1" },
    { id: "DyQn0g7D8pQ", title: "Video 2" },
  ];

  return (
    <div className="container my-5">
      <div className="row g-4">
        {videos.map((video) => (
          <div
            key={video.id}
            className="col-12 col-md-6 overflow-hidden border-1 rounded-3"
          >
            <LiteYouTubeEmbed
              id={video.id}
              title={video.title}
              adNetwork={false}
              noCookie={true}
              aspectHeight={9}
              aspectWidth={16}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default YouTubeVideoGrid;
