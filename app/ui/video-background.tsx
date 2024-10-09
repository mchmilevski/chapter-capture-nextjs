'use client';
import '@/app/ui/globals.css';

import React, { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';

export default function VideoBackground() {
  // State to track if the component is mounted
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // Set the state to true when the component mounts
    setIsMounted(true);
  }, []);

  // Render the video only after the component has mounted
  if (!isMounted) {
    return null; // Return nothing during server-side rendering
  }
  return (
    <ReactPlayer
      className="player"
      url="rain.mp4"
      autoPlay
      playing
      loop
      muted
    />
  );
}
