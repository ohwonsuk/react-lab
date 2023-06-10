import { combineReducers } from "redux";
import postDetailsReducer from "./postDetailsReducer";
import postsReducer from "./postsReducer";

const rootReducer = combineReducers({
    posts: postsReducer,
    postDetails: postDetailsReducer,
});

export default rootReducer;