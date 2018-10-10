import { combinedReducers, combineReducers } from "redux";
import postReducer from "./postReducer";

export default combineReducers({
  posts: postReducer
});
