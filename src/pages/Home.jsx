// src/pages/Home.js
import React, { useState, useEffect } from 'react';
import SearchBar from '../home-components/SearchBar.jsx';
import VideoList from '../home-components/VideoList.jsx';
import VideoPlayer from '../home-components/VideoPlayer.jsx'; 
import { searchYouTube } from '../youtubeapi/YtApi.js';

export default function Home() {
  const [videos, setVideos] = useState([]);
  const [selectedVideoId, setSelectedVideoId] = useState(null);
  const [currentQuery, setCurrentQuery] = useState("Armenian Pop");

  useEffect(() => {
    // Perform a default search for "Armenian Pop" when the component mounts
    performSearch("Armenian Pop");
  }, []);

  const performSearch = async (query) => {
    setCurrentQuery(query); // Update the current query
    try {
      const data = await searchYouTube(query);
      setVideos(data.items);
    } catch (error) {
      console.error('Error fetching videos:', error);
    }
  };

  const handleVideoSelect = (videoId) => {
    setSelectedVideoId(videoId);
  };

  return (
    <div>
      <SearchBar onSearch={performSearch} />
      <VideoPlayer videoId={selectedVideoId} searchQuery={currentQuery} />
      <VideoList videos={videos} onVideoSelect={handleVideoSelect} />
    </div>
  );
}
