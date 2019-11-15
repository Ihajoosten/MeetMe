import axios from 'axios';
import axiosInstance from '../../services/axiosInstance';

export default {
  namespaced: true,
  state: {
    items: [],
    item: {}
  },
  actions: {
    fetchMeetings({ state, commit }) {
      return axios.get('/api/meetings').then(res => {
        commit('setItems', { resource: 'meetings', items: [] }, { root: true });
        const meetings = res.data;
        commit(
          'setItems',
          { resource: 'meetings', items: meetings },
          { root: true }
        );
        return state.items;
      });
    },
    fetchMeeting({ state, commit }, meetingId) {
      commit('setItem', { resource: 'meetings', item: {} }, { root: true });
      return axios.get(`/api/meetings/${meetingId}`).then(res => {
        const meeting = res.data;
        commit(
          'setItem',
          { resource: 'meetings', item: meeting },
          { root: true }
        );
        return state.item;
      });
    },
    createMeeting({ rootState }, meetingToCreate) {
      meetingToCreate.author = rootState.userId;
      return axiosInstance
        .post('/api/meetings', meetingToCreate)
        .then(res => res.data);
    }
  }
};
