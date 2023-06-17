// userSlice.js

import { createSlice } from '@reduxjs/toolkit';
import { SLICES } from '../../constants';
import { handleLogin, loginThunk } from './userThunk';

const initialState = SLICES.USER_SLICE.INITIAL_STATE;

const changeMode = (state) => {
  return {
    ...state,
    darkMode: !state.darkMode
  };
};

const userSlice = createSlice({
  name: SLICES.USER_SLICE.NAME,
  initialState,
  reducers: {
    changeModeFunc: changeMode
  },
  extraReducers: (builder) => {
    // thunk
    builder.addCase(loginThunk.fulfilled, handleLogin);
    builder.addCase(loginThunk.rejected, handleLogin);
  }
});

// if needed to export actions
export const { changeModeFunc } = userSlice.actions;

export default userSlice.reducer;
