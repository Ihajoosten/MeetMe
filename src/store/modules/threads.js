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
    deleteThreadFromMeeting({ commit, state }, threadId) {
      const threadIndex = state.items.findIndex(item => item._id === threadId);
      commit('deleteThread', threadIndex);
    },
    async deletePost({ dispatch }, { postId, threadId }) {
      const res = await axiosInstance.delete(`/api/posts/${postId}`);
      dispatch('deletePostFromThread', { postId, threadId });
      return res.data;
    },
    deletePostFromThread({ commit, state }, { postId, threadId }) {
      const threadIndex = state.items.findIndex(item => item._id === threadId);
      const postIndex = state.items[threadIndex].posts.findIndex(
        item => item._id === postId
      );
      commit('deletePost', { threadIndex, postIndex });
    },
    async deleteComment({ dispatch }, { commentId, postId, threadId }) {
      const res = await axiosInstance.delete(`/api/comments/${commentId}`);
      dispatch('deleteCommentFromPost', { threadId, postId, commentId });
      return res.data;
    },
    deleteCommentFromPost({ commit, state }, { threadId, postId, commentId }) {
      const threadIndex = state.items.findIndex(item => item._id === threadId);
      const postIndex = state.items[threadIndex].posts.findIndex(
        item => item._id === postId
      );
      const commentIndex = state.items[threadIndex].posts[
        postIndex
      ].comments.findIndex(item => item._id === commentId);
      commit('deleteComment', { threadIndex, postIndex, commentIndex });
    }
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
    deleteThread(state, index) {
      Vue.set(state.items.splice(index, 1));
    },
    deletePost(state, { threadIndex, postIndex }) {
      Vue.set(state.items[threadIndex].posts.splice(postIndex, 1));
    },
    deleteComment(state, { threadIndex, postIndex, commentIndex }) {
      Vue.set(
        state.items[threadIndex].posts[postIndex].comments.splice(
          commentIndex,
          1
        )
      );
    }
  }
};
