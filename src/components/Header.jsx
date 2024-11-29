import React, { useEffect, useState } from "react";
import {
  HAMBURGER_LOGO,
  USER_ICON,
  YOUTUBE_LOGO,
  YOUTUBE_SEARCH_API,
} from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { cacheResults } from "../utils/searchSlice";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(true);
  // console.log(searchQuery);
  const dispatch = useDispatch();

  const searchCache = useSelector((store) => store.search);

  useEffect(() => {
    const handleScroll = () => setShowSuggestions(false);

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    // Make an api call after every key press
    // But if the diff bwt 2 Api calls is <200ms
    // Decline the Api call

    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 200);
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    // console.log("API CAll -" + searchQuery);

    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const response = await data.json();
    // console.log(response[1]);
    setSuggestions(response[1]);

    // Update Cache
    dispatch(
      cacheResults({
        [searchQuery]: response[1],
      })
    );
  };

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className="grid grid-flow-col p-5 m-2 shadow-lg">
      <div className="flex col-span-1">
        <img
          onClick={() => toggleMenuHandler()}
          className="h-8 cursor-pointer "
          src={HAMBURGER_LOGO}
          alt="menu"
        />
        <img
          className="h-8 ml-2"
          src={YOUTUBE_LOGO}
          alt="YouTube Logo"
        />
      </div>

      <div className="col-span-10  px-20">
        <div>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={(e) => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
            className="w-1/2 px-5 border border-gray-500 rounded-l-full p-2 bg-gray-100"
          />
          <button className=" border border-gray-400   px-3 py-2 rounded-r-full ">
            🔍
          </button>
        </div>
        {showSuggestions && (
          <div className="fixed bg-white w-[25rem]   px-3 py-2 shadow-lg rounded-lg border border-gray-100 ">
            <ul>
              {suggestions.map((s) => (
                <li
                  key={s}
                  className="py-1 shadow-sm hover:bg-gray-100"
                >
                  🔍{s}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className="col-span-1">
        <img
          className="h-8"
          src={USER_ICON}
          alt="User Icon"
        />
      </div>
    </div>
  );
};

export default Header;
