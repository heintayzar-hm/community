import { API } from '../../constants';
import axiosInstance from './axios';

export const logIn = async (userData) => {
  try {
    const response = await axiosInstance.post(API.ENDPOINTS.AUTH.LOGIN, userData);
    return response.data;
  } catch (error) {
    return error;
  }
};
