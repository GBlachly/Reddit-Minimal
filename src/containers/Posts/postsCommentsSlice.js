import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { fetchPostsAPI, fetchCommentsAPI } from '../../api/redditapi';

//ASYNC ACTION CREATOR
export const getAllPosts = createAsyncThunk(
    'postsComments/getAllPosts',
    async (subName) => {
        const response = await fetchPostsAPI(subName);
        return response;
    }
);

export const getAllComments = createAsyncThunk(
    'postsComments/getAllComments',
    async (permalink) => {
        const response = await fetchCommentsAPI(permalink);
        return response;
    }
);

//POSTS COMMENTS SLICE
const options = {
    name: 'postsComments',
    initialState: {
        posts: [],
        postsLoading: true,
        postsError: false,
        commentsLoading: true,
        commentsError: false
    },
    reducers: {},
    extraReducers: {
        [getAllPosts.pending]: (state, action) => {
            state.postsLoading = true;
            state.postsError = false;
        },
        [getAllPosts.fulfilled]: (state, action) => {
            state.posts = action.payload;
            state.postsLoading = true;
            state.postsError = false;
        },
        [getAllPosts.pending]: (state, action) => {
            state.postsLoading = true;
            state.postsError = false;
        },
        [getAllComments.pending]: (state, action) => {
            state.commentsLoading = true;
            state.commentsError = false;
        },
        [getAllComments.fulfilled]: (state, action) => {
            /*change the comments related state here
            Going to have to push the fetched-comments-objects to state.comments.commentsObj
            Then somehow match up the specific post to the specific comments-object in the state*/

            for (let post of state.posts) {
                if (action.payload[0].parent_id.includes(post.id)) {
                    post.commentObjs = action.payload;
                }
            };
            
            
            //state.commentObjs = action.payload;
            state.commentsLoading = false;
            state.commentsError = false;
        },
        [getAllComments.rejected]: (state, action) => {
            state.commentsLoading = false;
            state.commentsError = true;
        }
    }
}

const postsCommentsSlice = createSlice(options);

//EXPORT SELECTORS AND REDUCERS
export const selectPosts = (state) => state.posts.posts;
export const selectPostsIsLoading = (state) => state.postsComments.postsLoading;
export const selectPostsHasError = (state) => state.postsComments.postsError;
export const selectCommentsIsLoading = (state) => state.posts.commentsLoading;
export const selectCommentsHasError = (state) => state.posts.commentsError;

export default postsCommentsSlice.reducer;

const commentObjs = useSelector(state => {
    return state.postsComments.posts.find(post => post.id === [postId]).commentObjs
});