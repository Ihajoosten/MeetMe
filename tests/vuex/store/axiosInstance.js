import axios from 'axios';
import jwt from 'jsonwebtoken'

const axiosInstance = axios.create({
  timeout: 3000
});

axiosInstance.interceptors.request.use(
  function(config) {
    const user = {
        _id: '5de50756031782216877c323',
        username: 'LuccieBoy'
    }
    const token = jwt.sign({ user }, 'token');

    if (token) {
      const headers = {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      };
      config.headers = headers;
    }

    return config;
  },
  function(err) {
    return Promise.reject(err);
  }
);

module.exports = axiosInstance;
