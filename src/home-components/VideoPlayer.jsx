


const VideoPlayer = ({ videoId, searchQuery }) => {
  if (!videoId) {
    return (
      <div className="text-center py-4 text-lg text-white bg-red-400 rounded">
        {searchQuery || "Search for videos"}
      </div>
    );
  }

  const videoSrc = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div className="video-player mx-auto max-w-screen-lg">
      <iframe
        src={videoSrc}
        frameBorder="0"
        allowFullScreen
        title="Video player"
        className="w-full aspect-video"
      ></iframe>
    </div>
  );
};

export default VideoPlayer;
