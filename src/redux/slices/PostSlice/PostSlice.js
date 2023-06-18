// postSlice.js

import { createSlice } from '@reduxjs/toolkit';
import { SLICES } from '../../constants';
import { getNewFeed, getPost, handleGetPost, handleNewFeed } from './PostThunk';

const initialState = SLICES.POST_SLICE.INITIAL_STATE;

const postSlice = createSlice({
  name: SLICES.POST_SLICE.NAME,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // thunk
    builder.addCase(getNewFeed.fulfilled, handleNewFeed);
    builder.addCase(getNewFeed.rejected, handleNewFeed);
    builder.addCase(getPost.fulfilled, handleGetPost);
  }
});

// if needed to export actions

export default postSlice.reducer;
