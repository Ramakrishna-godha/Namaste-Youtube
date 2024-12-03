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

  const handleSuggestionClick = (suggestion) => {
    // Navigate to search results page
    setSearchQuery(suggestion); // Set the search query as the clicked suggestion
  };
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className="grid grid-cols-3 items-center p-5 m-2 shadow-lg gap-4">
      <div className="flex items-center col-span-1 space-x-2">
        <img
          onClick={() => toggleMenuHandler()}
          className="h-8 cursor-pointer "
          src={HAMBURGER_LOGO}
          alt="menu"
        />
        <img
          className="h-8 "
          src={YOUTUBE_LOGO}
          alt="YouTube Logo"
        />
      </div>

      <div className="col-span-1 flex justify-center items-center relative">
        <div className="flex w-full max-w-md">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={(e) => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
            className="w-full px-4 py-2 border border-gray-500 rounded-l-full bg-gray-100"
          />
          <button className=" px-4 py-2 border border-gray-400 bg-white rounded-r-full ">
            🔍
          </button>
        </div>
        {showSuggestions && (
          <div
            className="absolute w-96 top-full mt-2 bg-white  max-w-md px-3 py-2 shadow-lg rounded-lg border border-gray-100 lg:w-full
      sm:w-[22rem] 
      md:w-[30rem] "
          >
            <ul>
              {suggestions.map((s, index) => (
                <li
                  key={index}
                  className="py-1 shadow-sm hover:bg-gray-100 cursor-pointer"
                  onClick={() => handleSuggestionClick(s)}
                >
                  🔍{s}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className="flex justify-end items-center col-span-1">
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
