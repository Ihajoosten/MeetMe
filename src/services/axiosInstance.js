import axios from 'axios';

const axiosInstance = axios.create({
  timeout: 3000
});

axiosInstance.interceptors.request.use(
  function(config) {
    const token = localStorage.getItem('token') || '';

    if (token) {
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      };
      config.headers = headers;
    }

    return config;
  },
  function(err) {
    return Promise.reject(err);
  }
);

export default axiosInstance;
