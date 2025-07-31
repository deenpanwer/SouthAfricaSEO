'use client';

import React, { useState, useEffect } from 'react';

const VideoBackground: React.FC = () => {
  const [videoLoaded, setVideoLoaded] = useState(false);

  return (
    <>
      <video
        autoPlay
        loop
        muted
        playsInline
        onLoadedData={() => setVideoLoaded(true)}
        className={`fixed top-1/2 left-1/2 w-full h-full -translate-x-1/2 -translate-y-1/2 object-cover z-0 transition-opacity duration-1000 ${videoLoaded ? 'opacity-100' : 'opacity-0'}`}
      >
        <source src="/automation/hero-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {!videoLoaded && (
        <div className="fixed inset-0 bg-ph-black z-0"></div>
      )}
      {/* Minimal overlay */}
      <div className="fixed inset-0 bg-ph-black opacity-10 z-10"></div>
    </>
  );
};

export default VideoBackground;