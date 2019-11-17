/* eslint-disable no-unused-vars */
import axios from 'axios';
import axiosInstance from '../../services/axiosInstance';

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
        commit(
          'setItems',
          { resource: 'threads', items: threads },
          { root: true }
        );
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
    }
  }
};
