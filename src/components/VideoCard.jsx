import React from "react";

const VideoCard = ({ info }) => {
  // console.log(info);

  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;

  return (
    <div className="p-4 bg-white lg:w-72 w-80 justify-center rounded-lg shadow-lg flex flex-col">
      {/* Thumbnail Image */}
      <img
        className="rounded-lg sm:w-96 w-72 h-44 object-cover"
        src={thumbnails?.medium.url}
        alt="Thumbnail"
      />

      {/* Video Details */}
      <div className="mt-4 flex flex-col flex-1">
        {/* Video Title */}
        <h3 className="font-bold text-sm text-gray-900 truncate">{title}</h3>

        {/* Channel Title */}
        <p className="text-sm text-gray-600 truncate">{channelTitle}</p>

        {/* Video Statistics */}
        <p className="text-sm text-gray-500">
          {statistics?.viewCount
            ? `${parseInt(statistics.viewCount).toLocaleString()} views`
            : "No views available"}
        </p>
        <p className="text-sm text-gray-500">
          {statistics?.likeCount
            ? `${parseInt(statistics.likeCount).toLocaleString()} likes`
            : "No likes available"}
        </p>
      </div>
    </div>
  );
};

export default VideoCard;
