import axios from 'axios';
import { API } from '../../constants';

const axiosConfig = {
  baseURL: API.BASE_URL
};

const axiosInstance = axios.create(axiosConfig);

export default axiosInstance;
