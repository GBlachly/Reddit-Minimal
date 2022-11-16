import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { fetchPostsAPI, fetchCommentsAPI } from '../../api/redditapi';

//ASYNC ACTION CREATOR
export const getAllPosts = createAsyncThunk(
    'posts/getAllPosts',
    async (subName) => {
        const response = await fetchPostsAPI(subName);
        const postsWithMeta = response.map(post => {
            return {
                ...post,
                comments: [],
                showingComments: false,
                loadingComments: false,
                error: false
            }
        });
        return postsWithMeta;
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

/*
export const getAllComments = createAsyncThunk(
    'posts/getAllComments',
    async ({index, permalink}) => {
        const response = await fetchCommentsAPI(permalink);
        return {
            index: index,
            comments: response
        }
    }
);
*/

//POSTS SLICE
const options = {
    name: 'posts',
    initialState: {
        selectedSub: 'r/Pics',
        searchTerm: '',
        posts: [],
        isLoading: true,
        hasError: false
    },
    reducers: {
        setSelectedSub(state, action) {
            state.selectedSub = action.payload;
        },
        setSearchTerm(state, action) {
            state.searchTerm = action.payload.toLowerCase();
        },
        startGetComments(state, action) {
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
            state.isLoading = false;
            state.hasError = false;
        },
        [getAllPosts.rejected]: (state) => {
            state.isLoading = false;
            state.hasError = true;
        }, /*
        [getAllComments.pending]: (state, action) => {
            // If we're hiding comment, don't fetch the comments.
            state.posts[action.payload.index].showingComments = !state.posts[action.payload.imdex]
              .showingComments;
            if (!state.posts[action.payload.index].showingComments) {
              return;
            };
            state.posts[action.payload.index].loadingComments = true;
            state.posts[action.payload.index].error = false;
        },
        [getAllComments.fulfilled]: (state, action) => {
            state.posts[action.payload.index].loadingComments = false;
            state.posts[action.payload.index].comments = action.payload.comments;
        },
        [getAllComments.rejected]: (state, action) => {
            state.posts[action.payload.index].loadingComments = false;
            state.posts[action.payload.index].error = true;
        }, */
    }
};

const postsSlice = createSlice(options);

//EXPORT SELECTORS, REDUCERS, AND ACTIONS
export const selectedSelectedSub = (state) => state.posts.selectedSub;
export const selectSearchTerm = (state) => state.posts.searchTerm;
export const selectPosts = (state) => state.posts.posts;
export const selectPostsIsLoading = (state) => state.posts.isLoading;
export const selectPostsHasError = (state) => state.posts.hasError;

export default postsSlice.reducer;

export const { setSelectedSub, setSearchTerm, startGetComments, getCommentsSuccess, getCommentsFailed } = postsSlice.actions;