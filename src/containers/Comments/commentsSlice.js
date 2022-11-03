import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { fetchCommentsAPI } from "../../api/redditapi";

//ASYNC ACTION CREATOR
export const getAllComments = createAsyncThunk(
    'comments/getAllComments',
    async (permalink) => {
        const response = await fetchCommentsAPI(permalink);
        return response;
    }
);

//COMMENTS SLICE
const options = {
    name: 'comments',
    initialState: {
        postObjects: [],     //(??? This depends on what data the API will return ???)
        isLoading: true,
        hasError: false
    },
    reducers: {},
    extraReducers: {
        [getAllComments.pending]: (state, action) => {
            state.isLoading = true;
            state.hasError = false;
        },
        [getAllComments.fulfilled]: (state, action) => {
            //change the comments related state here
            state.isLoading = false;
            state.hasError = false;
        },
        [getAllComments.rejected]: (state, action) => {
            state.isLoading = false;
            state.hasError = true;
        }
    }
};

//const commentsSlice = createSlice(options);


//EXPORT SELECTORS AND REDUCER

//const selectComments = state => state.comments.postObjects.find(postObject => postObject.id === postId).comments
    //possibly use an array of objects. One object for each post (postObjects), and the object contains an id for the post and an array of comments for the post

//export default commentsSlice.reducer

