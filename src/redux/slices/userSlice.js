// userSlice.js

import { createSlice } from '@reduxjs/toolkit';
import { SLICES } from '../constants';

const initialState = SLICES.USER_SLICE.INITIAL_STATE;

const changeMode = (state) => {
    return {
        ...state,
        darkMode: !state.darkMode,
    }
}

const userSlice = createSlice({
  name: SLICES.USER_SLICE.NAME,
  initialState,
    reducers: {
      changeModeFunc: changeMode,
  },
  extraReducers: () => {
    // thunk
    },
});


// if needed to export actions
export const { changeModeFunc } = userSlice.actions;

export default userSlice.reducer;
