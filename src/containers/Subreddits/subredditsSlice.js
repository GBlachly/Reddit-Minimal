//import React from 'react'; (???)
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import { fetchSubredditsAPI } from '../../api/redditapi.js';

const options = {
    name: 'subreddits',
    initialState: {
        subreddits: [],
        isLoading: true,
        hasError: false
    },
    reducers: {},
    extraReducers: {
        [fetchAllSubreddits.pending]: (state, action) => {
            isLoading = true;
            hasError = false;
        },
        [fetchAllSubreddits.fulfilled]: (state, action) => {
            state.subreddits.push(action.payload);
            isLoading = false;
            hasError = false;
        },
        [fetchAllSubreddits.rejected]: (state, action) => {
            isLoading = false;
            hasError = true;
        },
    }
};

//const subredditsSlice = createSlice(options);

const fetchAllSubreddits = createAsyncThunk(
    'subreddits/fetchAllSubreddits',
    async (thunkAPI) => {                                   //(??? Confused about the arguments here since i dont need a first argument)
        const response = await fetchSubredditsAPI();
        return response;
    }
);