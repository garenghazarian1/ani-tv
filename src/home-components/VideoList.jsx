import  { useState } from 'react';
import VideoPlayer from './VideoPlayer'; 

const VideoList = ({ videos }) => {
  const [selectedVideoId, setSelectedVideoId] = useState(null);

  if (!videos.length) {
    return <p>No videos found. Try a different search!</p>;
  }

  const onVideoSelect = (videoId) => {
    
    setSelectedVideoId(videoId);
  };

  return (
    <div>
      {selectedVideoId && <VideoPlayer videoId={selectedVideoId} />}
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 m-6">
        {videos.map((video, idx) => (
          <li key={idx} className="video-item">
            <button
              onClick={() => onVideoSelect(video.id.videoId)}
              className="flex flex-col items-center p-4 rounded-lg bg-white dark:bg-gray-800 shadow-md transition-transform transform hover:scale-105"
            >
              <img
                src={video.snippet.thumbnails.medium.url}
                alt={video.snippet.title}
                className="w-full h-auto rounded-lg mb-2"
              />
              <h3 className="text-lg font-medium text-black dark:text-white">
                {video.snippet.title}
              </h3>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default VideoList;
