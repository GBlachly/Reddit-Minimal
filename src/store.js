import { configureStore, combineReducers } from "@reduxjs/toolkit";
import subredditsReducer from "./containers/Subreddits/subredditsSlice";

import postsReducer from "./containers/Posts/postsSlice";
import commentsReducer from "./containers/Comments/commentsSlice";
//import postsCommentsReducer from './containers/Posts/postsCommentsSlice';


export default configureStore({
    reducer: combineReducers({
      subreddits: subredditsReducer,
      //postsComments: postsCommentsReducer,
      posts: postsReducer,
      comments: commentsReducer
    }),
  });