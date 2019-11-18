/* eslint-disable no-unused-vars */
import axios from 'axios';
import axiosInstance from '../../services/axiosInstance';
import Vue from 'vue';

export default {
  namespaced: true,
  state: {
    items: []
  },
  actions: {
    fetchThreads({ state, commit }, meetingId) {
      commit('setItems', { resource: 'threads', items: [] }, { root: true });
      return axios.get(`/api/threads?meetingId=${meetingId}`).then(res => {
        const threads = res.data;
        commit('mergeThreads', threads);

        return state.items;
      });
    },
    postThread({ commit, state }, { title, meetingId }) {
      const thread = {};
      thread.title = title;
      thread.meeting = meetingId;

      return axiosInstance.post('/api/threads', thread).then(res => {
        const created = res.data;
        const index = state.items.length;

        commit(
          'addItemToArray',
          { item: created, index, resource: 'threads' },
           { root: true }
        );
        return created;
      });
    },
    sendPost({ dispatch }, { text, threadId }) {
      const post = { text, thread: threadId };
      console.log(post)

      return axiosInstance.post('/api/posts', post).then(res => {
        const createdPost = res.data;
        dispatch('addPostToThread', { post: createdPost, threadId });
        return createdPost;
      });
    },
    addPostToThread({ commit, state }, { post, threadId }) {
      const threadIndex = state.items.findIndex(
        item => item._id === threadId
      );

      if (threadIndex > -1) {
        const posts = state.items[threadIndex].posts;
        posts.unshift(post);
        commit('savePostToThread', { posts, index: threadIndex });
      }
    }
  },
  mutations: {
    savePostToThread(state, { posts, index }) {
      Vue.set(state.items[index], 'posts', posts);
    },
    mergeThreads(state, threads) {
      state.items = [...state.items, ...threads];
    }
  }
};
