'use client';

import React, { useState } from 'react';

const VideoBackground: React.FC = () => {
  const [videoReady, setVideoReady] = useState(false);

  return (
    <>
      <div
        className={`fixed inset-0 z-0 bg-cover bg-center transition-opacity duration-1000 ${videoReady ? 'opacity-0' : 'opacity-100'}`}
        style={{ backgroundImage: 'url(/automation/frame_00-00-00.png)' }}
      ></div>
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        onCanPlayThrough={() => setVideoReady(true)}
        className={`fixed top-1/2 left-1/2 w-full h-full -translate-x-1/2 -translate-y-1/2 object-cover z-0 transition-opacity duration-1000 ${videoReady ? 'opacity-100' : 'opacity-0'}`}
      >
        <source src="/automation/hero-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {/* Minimal overlay */}
      <div className="fixed inset-0 bg-ph-black opacity-10 z-10"></div>
    </>
  );
};

export default VideoBackground;