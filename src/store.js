import { configureStore, combineReducers } from "@reduxjs/toolkit";

import subredditsReducer from "./containers/subreddits/subredditsSlice";
import postsReducer from "./containers/posts/postsSlice";


export default configureStore({
    reducer: combineReducers({
      subreddits: subredditsReducer,
      //postsComments: postsCommentsReducer,
      posts: postsReducer,
    }),
  });