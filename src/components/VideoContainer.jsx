import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import VideoCard from "./VideoCard";
import { GOOGLE_API_KEY } from "../utils/constants";

const BASE_YOUTUBE_SEARCH_API =
  "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=6&regionCode=IN&type=video&key=";

const YOUTUBE_VIDEOS_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=";

const VideoContainer = () => {
  const { category } = useParams();
  const [videos, setVideos] = useState([]);
  console.log(videos);

  const getVideos = async (searchQuery) => {
    try {
      // Step 1: Fetch videos from the Search API
      const searchResponse = await fetch(
        `${BASE_YOUTUBE_SEARCH_API}${GOOGLE_API_KEY}&q=${searchQuery}`
      );
      const searchData = await searchResponse.json();

      // Step 2: Extract video IDs from the Search API response
      const videoIds = searchData.items
        .map((item) => item.id.videoId)
        .join(",");

      // Step 3: Fetch detailed statistics using the Videos API
      const videosResponse = await fetch(
        `${YOUTUBE_VIDEOS_API}${videoIds}&key=${GOOGLE_API_KEY}`
      );
      const videosData = await videosResponse.json();

      // Step 4: Update state with detailed video data
      setVideos(videosData.items);
    } catch (error) {
      console.error("Error fetching videos:", error);
    }
  };

  useEffect(() => {
    const query = category || "mostPopular"; // Default to "mostPopular" for home
    getVideos(query);
  }, [category]);

  return (
    <div className="flex justify-center">
      <div
        className="grid gap-4 p-4 
      grid-cols-1
      sm:grid-cols-2
      md:grid-cols-3 
      lg:grid-cols-4"
      >
        {videos?.map((video) => (
          <Link
            key={video.id.videoId}
            to={`/watch?v=${video.id.videoId}`}
            className="block"
          >
            <VideoCard info={video} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default VideoContainer;
