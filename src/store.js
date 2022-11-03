import { configureStore, combineReducers } from "@reduxjs/toolkit";
import subredditsReducer from "./containers/Subreddits/subredditsSlice";
import postsReducer from "./containers/Posts/postsSlice";
//import commentsReducer from "./containers/Comments/commentsSlice";

export default configureStore({
    reducer: combineReducers({
      subreddits: subredditsReducer,
      posts: postsReducer,
      //comments: commentsReducer
    }),
  });