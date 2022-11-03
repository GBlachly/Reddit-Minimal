import { configureStore, combineReducers } from "@reduxjs/toolkit";
import subredditsReducer from "./containers/Subreddits/subredditsSlice";
import { postsReducer } from "./containers/Posts/postsCommentsSlice";

export default configureStore({
    reducer: combineReducers({
      subreddits: subredditsReducer,
      posts: postsReducer
    }),
  });