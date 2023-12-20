
// Assuming your .env file has a variable like VITE_YOUTUBE_API_KEY=your_youtube_api_key_here
const YOUTUBE_API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;

 // Remove this line in production for security reasons

export const searchYouTube = async (query) => {
  const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${encodeURIComponent(query)}&maxResults=10&key=${YOUTUBE_API_KEY}`;
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return await response.json();
};
