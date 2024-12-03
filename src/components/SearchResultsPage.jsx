import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { GOOGLE_API_KEY } from "../utils/constants";

const SearchResultsPage = () => {
  const { query } = useParams(); // Get the search query from the URL
  const [videos, setVideos] = useState([]);

  const fetchSearchResults = async () => {
    const API_KEY = GOOGLE_API_KEY; // Use your YouTube API key
    const API_URL = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${query}&type=video&maxResults=10&key=${API_KEY}`;

    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      setVideos(data.items);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchSearchResults();
  }, [query]); // Re-fetch results when the query changes

  return (
    <div>
      <h1>Search Results for "{query}"</h1>
      <div className="flex flex-wrap">
        {videos.map((video) => (
          <div
            key={video.id.videoId}
            className="p-2 m-2 w-72 shadow-lg"
          >
            <img
              className="rounded-lg"
              src={video.snippet.thumbnails.medium.url}
              alt={video.snippet.title}
            />
            <ul>
              <li className="font-bold py-2">{video.snippet.title}</li>
              <li>{video.snippet.channelTitle}</li>
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchResultsPage;
