import React from "react";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import MovieIcon from "@mui/icons-material/Movie";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import SportsIcon from "@mui/icons-material/Sports";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LocalMoviesIcon from "@mui/icons-material/LocalMovies";
import SchoolIcon from "@mui/icons-material/School";
import { useSelector } from "react-redux";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  if (!isMenuOpen) return null;

  return (
    <div className="p-5 shadow-lg w-40 items-center py-4">
      <ul>
        <li className="flex items-center space-x-2 py-1">
          <HomeIcon />
          <Link to="/">Home</Link>
        </li>
        <li className="flex items-center space-x-2 py-1">
          <PlayArrowIcon />
          <Link to="/category/shorts">Shorts</Link>
        </li>
        <li className="flex items-center space-x-2 py-1">
          <WhatshotIcon />
          <Link to="/category/popular">Popular</Link>
        </li>
        <li className="flex items-center space-x-2 py-1">
          <LiveTvIcon />
          <Link to="/category/live">Live</Link>
        </li>
      </ul>

      <h1 className="font-bold pt-5 py-4">Subscriptions</h1>
      <ul>
        <li className="flex items-center space-x-2 py-1">
          <MovieIcon />
          <Link to="/category/movies">Movies</Link>
        </li>
        <li className="flex items-center space-x-2 py-1">
          <MusicNoteIcon />
          <Link to="/category/music">Music</Link>
        </li>
        <li className="flex items-center space-x-2 py-1">
          <SportsEsportsIcon />
          <Link to="/category/gaming">Gaming</Link>
        </li>
        <li className="flex items-center space-x-2 py-1">
          <SportsIcon />
          <span>Sports</span>
        </li>
        <li className="flex items-center space-x-2 py-1">
          <NewspaperIcon />
          <Link to="/category/news">News</Link>
        </li>
      </ul>

      <h1 className="font-bold pt-5 py-4">Explore</h1>
      <ul>
        <li className="flex items-center space-x-2 py-1">
          <TrendingUpIcon />
          <Link to="/category/trending">Trending</Link>
        </li>
        <li className="flex items-center space-x-2 py-1">
          <ShoppingCartIcon />
          <Link to="/category/shopping">Shopping</Link>
        </li>
        <li className="flex items-center space-x-2 py-1">
          <LiveTvIcon />
          <Link to="/category/live">Live</Link>
        </li>
        <li className="flex items-center space-x-2 py-1">
          <LocalMoviesIcon />
          <Link to="/category/films">Films</Link>
        </li>
        <li className="flex items-center space-x-2 py-1">
          <NewspaperIcon />
          <Link to="/category/news">News</Link>
        </li>
        <li className="flex items-center space-x-2 py-1">
          <SchoolIcon />
          <Link to="/category/course">Courses</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
