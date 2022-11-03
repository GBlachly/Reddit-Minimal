import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { fetchPostsAPI } from '../../api/redditapi';

//ASYNC ACTION CREATOR
export const getAllPosts = createAsyncThunk(
    'posts/getAllPosts',
    async (subName) => {
        const response = await fetchPostsAPI(subName);
        return response;
    }
);

//POSTS SLICE
const options = {
    name: 'posts',
    initialState: {
        posts: [],
        isLoading: true,
        hasError: false
    },
    reducers: {},
    extraReducers: {
        [getAllPosts.pending]: (state, action) => {
            state.isLoading = true;
            state.hasError = false;
        },
        [getAllPosts.fulfilled]: (state, action) => {
            state.posts = action.payload;
            state.isLoading = true;
            state.hasError = false;
        },
        [getAllPosts.pending]: (state, action) => {
            state.isLoading = true;
            state.hasError = false;
        }
    }
}

const postsSlice = createSlice(options);

//EXPORT SELECTORS AND REDUCERS
export const selectPosts = (state) => state.posts.posts;
export const selectPostsIsLoading = (state) => state.posts.isLoading;
export const selectPostsHasError = (state) => state.posts.hasError;

export const postsReducer = postsSlice.reducer;