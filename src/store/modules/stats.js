/* eslint-disable no-unused-vars */
import axiosInstance from '../../services/axiosInstance';
import Vue from 'vue';

export default {
  namespaced: true,
  state: {
    meetings: {
      data: [],
      count: null
    },
    threads: {
      data: [],
      count: null
    },
    posts: {
      data: [],
      count: null
    }
  },
  actions: {
    fetchUserStats({ commit }) {
      return axiosInstance.get('/api/users/account').then(res => {
        const stats = res.data;
        });
    }
  }
};
