import React, { useEffect, useState } from "react";
import ChatMessages from "./ChatMessages";
import { useDispatch, useSelector } from "react-redux";
import { generateRandomName, generateRandomPhrase } from "../utils/helper";
import { addMessage } from "../utils/ChatSlice";

const LiveChat = () => {
  const [LiveMessages, setLiveMessages] = useState("");

  const dispatch = useDispatch();
  const chatMessages = useSelector((store) => store.chat.messages);

  useEffect(() => {
    const i = setInterval(() => {
      // API Polling
      // console.log("API Polling...");
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: generateRandomPhrase(),
        })
      );
    }, 2000);

    return () => clearInterval(i);
  }, []);

  return (
    <>
      <div className="ml-2 p-2 h-[420px]  border border-black bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse  ">
        LiveChat🔴
        <div>
          {chatMessages.map((c, i) => (
            <ChatMessages
              key={i}
              name={c.name}
              message={c.message}
            />
          ))}
        </div>
      </div>
      <form
        className="w-[335px] ml-2 p-2 rounded-lg  border border-black"
        onSubmit={(e) => {
          e.preventDefault();
          console.log("On Form submit", LiveMessages);
          dispatch(
            addMessage({
              name: "Ramakrishna",
              message: LiveMessages,
            })
          );
          setLiveMessages("");
        }}
      >
        <input
          type="text"
          value={LiveMessages}
          onChange={(e) => setLiveMessages(e.target.value)}
          className="w-3/4 border border-red-400"
        />
        <button className="px-2 mx-2 bg-red-500 rounded-md py-1 text-white">
          Send
        </button>
      </form>
    </>
  );
};

export default LiveChat;
