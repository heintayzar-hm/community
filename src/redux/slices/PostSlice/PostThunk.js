import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchNewFeed, fetchPost } from '../../api/post';
import { SLICES } from '../../constants';

export const getNewFeed = createAsyncThunk(
  SLICES.POST_SLICE.THUNK_ACTIONS.GET_NEW_FEED,
  async ({ page, token }, { rejectWithValue }) => {
    try {
      const response = await fetchNewFeed(page, token);
      return response;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const handleNewFeed = (state, action) => {
  return {
    ...state,
    newFeed: {
      ...state.newFeed,
      posts: [...state.newFeed.posts, ...action.payload.data],
      pageId: action.payload.page,
      hasNextPage: action.payload.has_next_page
    }
  };
};

export const getPost = createAsyncThunk(
  SLICES.POST_SLICE.THUNK_ACTIONS.GET_POST,
  async ({ postId, token }, { rejectWithValue }) => {
    try {
      const response = await fetchPost(postId, token);
      if (response.success) {
        return response;
      }
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const handleGetPost = (state, action) => {
  return {
    ...state,
    post: action.payload.data
  };
};
