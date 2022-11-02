import { configureStore, combineReducers } from "@reduxjs/toolkit";
import subredditsReducer from "./containers/Subreddits/subredditsSlice";

export default configureStore({
    reducer: combineReducers({
      subreddits: subredditsReducer,
    }),
  });