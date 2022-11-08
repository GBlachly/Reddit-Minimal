import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { fetchPostsAPI, fetchCommentsAPI } from '../../api/redditapi';

//ASYNC ACTION CREATOR
export const getAllPosts = createAsyncThunk(
    'posts/getAllPosts',
    async (subName) => {
        const response = await fetchPostsAPI(subName);
        return response;
    }
);

export const getAllComments = (index, permalink) => async (dispatch) => {
    try {
      dispatch(startGetComments(index));
      const comments = await fetchCommentsAPI(permalink);
      dispatch(getCommentsSuccess({ index, comments }));
    } catch (error) {
      dispatch(getCommentsFailed(index));
    }
  };

//POSTS SLICE
const options = {
    name: 'posts',
    initialState: {
        posts: [],
        isLoading: true,
        hasError: false
    },
    reducers: {
        startGetComments(state, action) {
            // If we're hiding comment, don't fetch the comments.
            state.posts[action.payload].showingComments = !state.posts[action.payload]
              .showingComments;
            if (!state.posts[action.payload].showingComments) {
              return;
            };
            state.posts[action.payload].loadingComments = true;
            state.posts[action.payload].error = false;
        },
        getCommentsSuccess(state, action) {
            state.posts[action.payload.index].loadingComments = false;
            state.posts[action.payload.index].comments = action.payload.comments;
        },
        getCommentsFailed(state, action) {
            state.posts[action.payload].loadingComments = false;
            state.posts[action.payload].error = true;
        },
    },
    extraReducers: {
        [getAllPosts.pending]: (state) => {
            state.isLoading = true;
            state.hasError = false;
        },
        [getAllPosts.fulfilled]: (state, action) => {
            state.posts = action.payload;
            state.isLoading = true;
            state.hasError = false;
        },
        [getAllPosts.pending]: (state) => {
            state.isLoading = true;
            state.hasError = false;
        },
    }
};

const postsSlice = createSlice(options);

//EXPORT SELECTORS AND REDUCERS
export const selectPosts = (state) => state.posts.posts;
export const selectPostsIsLoading = (state) => state.posts.isLoading;
export const selectPostsHasError = (state) => state.posts.hasError;

export default postsSlice.reducer;

export const { startGetComments, getCommentsSuccess, getCommentsFailed} = postsSlice.actions;