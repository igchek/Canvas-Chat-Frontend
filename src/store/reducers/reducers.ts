// reducers.js
import { combineReducers } from 'redux';
import ChatSlice from "@/store/slices/chat-slice";
const chatReducer = combineReducers({
    chat: ChatSlice,
});

export default chatReducer;
