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
    async fetchThreads({ state, commit }, { meetingId, filter = {}, init }) {
      if (init) {
        commit('setItems', { resource: 'threads', items: [] }, { root: true });
      }

      const url = applyFilters(`/api/threads?meetingId=${meetingId}`, filter);
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
      return res.data;
    },
    async sendComment({ dispatch }, { content, postId, threadId }) {
      const comment = { content, post: postId };

      const res = await axiosInstance.post('/api/comments', comment);
      dispatch('addCommentToPost', { comment: res.data, postId, threadId });
      return res.data;
    },
    addPostToThread({ commit, state }, { post, threadId }) {
      const threadIndex = state.items.findIndex(item => item._id === threadId);

      if (threadIndex > -1) {
        const threadPosts = state.items[threadIndex].posts;
        threadPosts.unshift(post);
        commit('savePostToThread', { threadPosts, index: threadIndex });
      }
    },
    addCommentToPost({ commit, state }, { comment, postId, threadId }) {
      const threadIndex = state.items.findIndex(item => item._id === threadId);
      const postIndex = state.items[threadIndex].posts.findIndex(
        item => item._id === postId
      );
      if (postIndex > -1) {
        const postComments = state.items[threadIndex].posts[postIndex].comments;
        postComments.unshift(comment);
        commit('saveCommentToPost', {
          postComments,
          tIndex: threadIndex,
          pIndex: postIndex
        });
      }
    },
    async deleteThread({ dispatch }, threadId) {
      const res = await axiosInstance.delete(`/api/threads/${threadId}`);
      dispatch('deleteThreadFromMeeting', threadId);
      return res.data;
    },
    deleteThreadFromMeeting({commit, state }, threadId) {
      const threadIndex = state.items.findIndex(item => item._id === threadId);
      commit('deleteResource', threadIndex);
    },
    async deletePost(_, postId) {
      const res = await axiosInstance.delete(`/api/posts/${postId}`);
      const id = res.data;
      return id;
    },
    deletePostFromThread() {},
    async deleteComment(_, commentId) {
      const res = await axiosInstance.delete(`/api/comments/${commentId}`);
      const id = res.data;
      return id;
    },
    deleteCommentFromPost() {}
  },
  mutations: {
    savePostToThread(state, { threadPosts, index }) {
      Vue.set(state.items[index], 'posts', threadPosts);
    },
    saveCommentToPost(state, { postComments, tIndex, pIndex }) {
      Vue.set(state.items[tIndex].posts[pIndex], 'comments', postComments);
    },
    setAllDataLoaded(state, isAllDataLoaded) {
      state.isAllThreadsLoaded = isAllDataLoaded;
    },
    mergeThreads(state, threads) {
      state.items = [...state.items, ...threads];
    },
    deleteResource(state, index) {
      Vue.set(state.items.splice(index, 1));
    }
  }
};
