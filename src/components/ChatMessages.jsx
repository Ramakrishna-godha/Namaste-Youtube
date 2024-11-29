import React from "react";
import { USER_ICON } from "../utils/constants";

const ChatMessages = ({ name, message }) => {
  return (
    <div className="flex items-center py-3 shadow-sm">
      <img
        className="h-6"
        src={USER_ICON}
        alt="User Icon"
      />
      <span className="font-bold">{name}</span>
      <span className="ml-2">{message}</span>
    </div>
  );
};

export default ChatMessages;
