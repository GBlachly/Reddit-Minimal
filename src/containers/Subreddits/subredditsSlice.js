//import React from 'react'; (???)
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import { fetchSubredditsAPI } from '../../api/redditapi.js';

//ASYNC ACTION CREATOR
export const getAllSubreddits = createAsyncThunk(
    'subreddits/getAllSubreddits',
    async () => {                                   //(??? Confused about the arguments here since i dont need a first argument. Apparent thunkAPI is not needed here, so is it ever needed in the argument??
        const response = await fetchSubredditsAPI();
        return response;
    }
);

//SLICE CREATOR
const options = {
    name: 'subreddits',
    initialState: {
        subreddits: [],
        isLoading: true,
        hasError: false
    },
    reducers: {},
    extraReducers: {
        [getAllSubreddits.pending]: (state, action) => {       //not entirely sure about how the brackets work here. I think it is an operator that turns whatever is in the brackets into a string
            state.isLoading = true;
            state.hasError = false;
        },
        [getAllSubreddits.fulfilled]: (state, action) => {
            state.subreddits = action.payload;          //Initially use state.subreddits.push(action.payload), and this did not work. Not sure why, something to think about
            state.isLoading = false;
            state.hasError = false;
        },
        [getAllSubreddits.rejected]: (state, action) => {
            state.isLoading = false;
            state.hasError = true;
        },
    }
};

const subredditsSlice = createSlice(options);

//EXPORTED SELECTORS/REDUCER
export const selectSubreddits = (state) => state.subreddits.subreddits;
export const selectIsLoading = (state) => state.subreddits.isLoading;
export const selectHasError = (state) => state.subreddits.hasError;

export default subredditsSlice.reducer;

