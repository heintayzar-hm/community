import { API } from '../../constants';
import axiosInstance from './axios';

export const fetchNewFeed = async (pageId, token) => {
  // get new feed url format
  let url = API.ENDPOINTS.POSTS.NEWSFEED;
  // replace :id to pageId
  url = url.replace(':id', pageId);

  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  };
  try {
    const response = await axiosInstance.get(url, config);
    return response.data;
  } catch (error) {
    return error;
  }
};

export const likePost = async (data, token) => {
  const url = API.ENDPOINTS.POSTS.LIKE;
  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  };
  try {
    const response = await axiosInstance.post(url, data, config);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export const commentPost = async (data, token) => {
  const url = API.ENDPOINTS.POSTS.COMMENT;
  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  };
  try {
    const response = await axiosInstance.post(url, data, config);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export const getPostComments = async (postId, token) => {
  const url = API.ENDPOINTS.POSTS.GET_COMMENTS.replace(':id', postId);
  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  };
  try {
    const response = await axiosInstance.get(url, config);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export const fetchPost = async (postId, token) => {
  let url = API.ENDPOINTS.POSTS.POST;
  // replace :id with postID
  url = url.replace(':id', postId);
  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  };
  try {
    const response = await axiosInstance.get(url, config);
    return response.data;
  } catch (error) {
    return error;
  }
};
