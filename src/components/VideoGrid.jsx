import { useState, useEffect, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import { Video } from '../db'; // Assuming the Video object is in a file named db.js

export const VideoGrid = () => {
  const [videos, setVideos] = useState([]);
  const [hoveredVideo, setHoveredVideo] = useState(null);
  const videoRefs = useRef({});
  const currentVideoIndex = useRef(0);

  useEffect(() => {
    // Convert Video object into an array format
    const fetchVideosFromDB = Object.entries(Video).map(([id, videoData]) => ({
      id,
      ...videoData,
    }));
    setVideos(fetchVideosFromDB);
  }, []);

  const handleHoverStart = (videoId) => {
    setHoveredVideo(videoId);
    if (videoRefs.current[videoId]) {
      videoRefs.current[videoId].play();
    }
  };

  const handleHoverEnd = (videoId) => {
    setHoveredVideo(null);
    if (videoRefs.current[videoId]) {
      videoRefs.current[videoId].pause();
    }
  };

  // Handle auto swipe to the next video when the current video ends
  const handleVideoEnd = (videoId) => {
    const nextIndex = (currentVideoIndex.current + 1) % videos.length;
    currentVideoIndex.current = nextIndex;

    // Pause current video and play the next one
    if (videoRefs.current[videoId]) {
      videoRefs.current[videoId].pause();
    }
    const nextVideoId = videos[nextIndex].id;
    if (videoRefs.current[nextVideoId]) {
      videoRefs.current[nextVideoId].play();
    }

    // Scroll to the next video (horizontal swipe)
    const videoElement = videoRefs.current[nextVideoId];
    videoElement.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
  };

  return (
    <div className="overflow-x-auto whitespace-nowrap py-8">
      <div className="flex space-x-6">
        {videos.map((video) => (
            
          <motion.div
            key={video.id}
            className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer inline-block"
            style={{ width: '400px' }} // Set a fixed width for each video
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            onHoverStart={() => handleHoverStart(video.id)}
            onHoverEnd={() => handleHoverEnd(video.id)}
          >
            <video
              ref={(el) => (videoRefs.current[video.id] = el)}
              src={video.url}
              className="w-full h-64 object-cover"
              loop={false}
              muted
              playsInline
              onEnded={() => handleVideoEnd(video.id)} 
            />
            <AnimatePresence>
              {hoveredVideo !== video.id && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center"
                >
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                  >
                    
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
              <h3 className="text-white text-lg font-bold">{video.title}</h3>
              <p className="text-gray-400 line-clamp-3 text-sm tracking-tighter">{video.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
