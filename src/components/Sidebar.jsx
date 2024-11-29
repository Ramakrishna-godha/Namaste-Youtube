import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  // Early return pattern
  if (!isMenuOpen) return null;
  return (
    <div className="p-5 shadow-lg  w-48">
      <ul>
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>Shorts</li>
        <li>Videos</li>
        <li>Live</li>
      </ul>
      <h1 className=" font-bold  pt-5">Subscriptions</h1>
      <ul>
        <li>Movies</li>
        <li>Music</li>
        <li>Gaming</li>
        <li>Sports</li>
      </ul>
      <h1 className=" font-bold pt-5">Explore</h1>
      <ul>
        <li>Trending</li>
        <li>Shopping</li>
        <li>Live</li>
        <li>Films</li>
        <li>News</li>
        <li>Courses</li>
      </ul>
    </div>
  );
};

export default Sidebar;
