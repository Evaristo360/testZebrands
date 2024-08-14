import axios from 'axios';
// import { getItem } from '../../utils/persistentStorage';
import { config } from '../config';
const { token } = config
export const instance = axios.create({
  baseURL: config.endpoints.mainBackendUrl,
  timeout: 60000,
  headers: {
    'Content-Type': 'application/json'
  }
});

// TODO: Config nedeed interceptors to check requests & responses
instance.interceptors.request.use(
  (config) => {
    // const token = getItem('token');

    if (token !== '')
      config.headers.Authorization = `Bearer ${token}`;

    return config;
  },
  (error) => Promise.reject(error)
);

instance.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);
