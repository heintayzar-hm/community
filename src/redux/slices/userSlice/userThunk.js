import { createAsyncThunk } from '@reduxjs/toolkit';
import { logIn } from '../../api/user';
import { SLICES } from '../../constants';

const storeUserData = (userData) => {
  const { token, expiresAt, expiresIn, user } = userData;
  const { id, name, profile_image, last_active_at } = user;

  const userDataToStore = {
    token,
    expiresAt,
    expiresIn,
    details: {
      id,
      name,
      profile_image,
      last_active_at
    }
  };

  return userDataToStore;
};

export const loginThunk = createAsyncThunk(
  SLICES.USER_SLICE.THUNK_ACTIONS.LOGIN,
  async (userData, { rejectWithValue }) => {
    try {
      const response = await logIn(userData);
      if (response.success) {
        const userDataToStore = storeUserData(response);
        return userDataToStore;
      }
      throw new Error(response.response.data.message);
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const handleLogin = (state, action) => {
  if (action.type === loginThunk.rejected.type) {
    return {
      ...state,
      isLoggedIn: false,
      data: null,
      error: action.payload
    };
  }
  return {
    ...state,
    data: action.payload,
    isLoggedIn: true
  };
};
