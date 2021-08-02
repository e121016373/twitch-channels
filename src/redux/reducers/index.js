import { combineReducers } from "redux";
import { searchReducer } from "./searchReducer";
import { channelReducer } from "./channelReducer";

const reducers = combineReducers({
  search: searchReducer,
  channel: channelReducer,
});

export default reducers;
