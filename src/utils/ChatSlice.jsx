import { createSlice } from "@reduxjs/toolkit";
import { CHAT_COUNT } from "./constants";

const ChatSlice = createSlice({
  name: "chat",
  initialState: {
    messages: [],
  },
  reducers: {
    addMessage: (state, action) => {
      state.messages.splice(CHAT_COUNT, 1);
      state.messages.push(action.payload);
    },
  },
});
export const { addMessage } = ChatSlice.actions;
export default ChatSlice.reducer;
