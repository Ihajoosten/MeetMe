/* eslint-disable no-unused-vars */
import axios from 'axios';
import axiosInstance from '../../services/axiosInstance';
import Vue from 'vue';
import { applyFilters } from '../../services/filter';

export default {
  namespaced: true,
  state: {
    isAllThreadsLoaded: false,
    items: []
  },
  actions: {
    async fetchThreads ({state, commit}, {meetingId, filter = {}, init}) {
      if (init) {
        commit('setItems', {resource: 'threads', items: []}, {root: true})
      }

      const url = applyFilters(`/api/threads?meetingId=${meetingId}`, filter)
      const res = await axios.get(url);
      const { threads, isAllDataLoaded } = res.data;
      commit('setAllDataLoaded', isAllDataLoaded);
      commit('mergeThreads', threads);
      return state.items;
    },
    async postThread({ commit, state }, { title, meetingId }) {
      const thread = {};
      thread.title = title;
      thread.meeting = meetingId;

      const res = await axiosInstance.post('/api/threads', thread);
      const created = res.data;
      const index = state.items.length;
      commit(
        'addItemToArray',
        { item: created, index, resource: 'threads' },
        { root: true }
      );
      return created;
    },
    async sendPost({ dispatch }, { text, threadId }) {
      const post = { text, thread: threadId };

      const res = await axiosInstance.post('/api/posts', post);
      dispatch('addPostToThread', { post: res.data, threadId });
      return res.data
    },
    addPostToThread({ commit, state }, { post, threadId }) {
      const threadIndex = state.items.findIndex(item => item._id === threadId);

      if (threadIndex > -1) {
        const threadPosts = state.items[threadIndex].posts;
        threadPosts.unshift(post);
        commit('savePostToThread', { threadPosts, index: threadIndex });
      }
    },
    async deleteThread(_, threadId) {
      const res = await axiosInstance.delete(`/api/threads/${threadId}`);
      const id = res.data;
      return id;
    }
  },
  mutations: {
    savePostToThread(state, { threadPosts, index }) {
      Vue.set(state.items[index], 'posts', threadPosts);
    },
    setAllDataLoaded(state, isAllDataLoaded) {
      state.isAllThreadsLoaded = isAllDataLoaded;
    },
    mergeThreads(state, threads) {
      state.items = [...state.items, ...threads];
    }
  }
};
