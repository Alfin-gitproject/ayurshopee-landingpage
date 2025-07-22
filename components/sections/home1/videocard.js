import React from "react";

const VideoSection = () => {
  return (
    <section className="py-12 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-white">REALM WARS ONLINE</h2>
        
        {/* Main Video Container */}
        <div className="flex flex-col md:flex-row gap-6">
          {/* Video 1 - GHOST */}
          <div className="flex-1">
            <h3 className="text-xl font-semibold mb-2 text-gray-300">GHOST</h3>
            <div className="relative pb-[56.25%] bg-black"> {/* 16:9 Aspect Ratio */}
              <video
                className="absolute top-0 left-0 w-full h-full object-cover"
                controls
                muted
              >
                <source src="/assets/videos/ghost.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>

          {/* Video 2 - MODEM */}
          <div className="flex-1">
            <h3 className="text-xl font-semibold mb-2 text-gray-300">MODEM</h3>
            <div className="relative pb-[56.25%] bg-black"> {/* 16:9 Aspect Ratio */}
              <video
                className="absolute top-0 left-0 w-full h-full object-cover"
                controls
                muted
              >
                <source src="/assets/videos/modem.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>

        {/* Bottom Title */}
        <h2 className="text-3xl font-bold text-center mt-8 text-white">REALM WARS ONLINE</h2>
      </div>
    </section>
  );
};

export default VideoSection;