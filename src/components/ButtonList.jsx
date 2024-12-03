import React from "react";
import { Link } from "react-router-dom";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import MicIcon from "@mui/icons-material/Mic";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import SportsCricketIcon from "@mui/icons-material/SportsCricket";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AppsIcon from "@mui/icons-material/Apps";

// Data array for button list with icons
const buttonData = [
  { name: "All", path: "/category/all", icon: <AppsIcon /> },
  { name: "Gaming", path: "/category/gaming", icon: <SportsEsportsIcon /> },
  { name: "Songs", path: "/category/songs", icon: <MusicNoteIcon /> },
  { name: "Live", path: "/category/live", icon: <LiveTvIcon /> },
  { name: "Podcasts", path: "/category/podcasts", icon: <MicIcon /> },
  { name: "Cooking", path: "/category/cooking", icon: <RestaurantIcon /> },
  { name: "Cricket", path: "/category/cricket", icon: <SportsCricketIcon /> },
  { name: "News", path: "/category/news", icon: <NewspaperIcon /> },
  { name: "Valentines", path: "/category/valentines", icon: <FavoriteIcon /> },
];

// ButtonList Component
const ButtonList = () => {
  return (
    <div
      className=" space-x-1  grid gap-2 p-2 
      grid-cols-3
      md:grid-cols-6 
      lg:grid-cols-9"
    >
      {buttonData.map((button, index) => (
        <Link
          key={index}
          to={button.path} // Link to the category path
          className="flex items-center space-x-2 bg-gray-200 px-4 py-2 rounded-full shadow-md hover:bg-gray-300 cursor-pointer"
        >
          {button.icon}
          <span>{button.name}</span>
        </Link>
      ))}
    </div>
  );
};

export default ButtonList;
