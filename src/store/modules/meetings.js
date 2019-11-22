import axios from 'axios';
import axiosInstance from '../../services/axiosInstance';
import Vue from 'vue';

export default {
  namespaced: true,
  state: {
    items: [],
    item: {}
  },
  actions: {
    async fetchMeetings({ state, commit }) {
      const res = await axios.get('/api/meetings');
      commit('setItems', { resource: 'meetings', items: [] }, { root: true });
      const meetings = res.data;
      commit(
        'setItems',
        { resource: 'meetings', items: meetings },
        { root: true }
      );
      return state.items;
    },
    async fetchMeeting({ state, commit }, meetingId) {
      commit('setItem', { resource: 'meetings', item: {} }, { root: true });
      const res = await axios.get(`/api/meetings/${meetingId}`);
      const meeting = res.data;
      commit(
        'setItem',
        { resource: 'meetings', item: meeting },
        { root: true }
      );
      return state.item;
    },
    async createMeeting({ rootState }, meetingToCreate) {
      meetingToCreate.author = rootState.userId;
      const res = await axiosInstance.post('/api/meetings', meetingToCreate);
      return res.data;
    },
    async joinMeeting({ state, rootState, commit, dispatch }, meetingId) {
      const user = rootState.user;

      await axiosInstance.post(`/api/meetings/${meetingId}/join`);
      dispatch('addMeeting', meetingId, { root: true });
      const joinedPeople = state.item.joinedPeople;
      commit('addUsertoMeeting', [...joinedPeople, user]);
    },
    async leaveMeeting({ state, rootState, commit, dispatch }, meetingId) {
      const user = rootState.user;

      await axiosInstance.post(`/api/meetings/${meetingId}/leave`);
      dispatch('removeMeeting', meetingId, { root: true });
      const joinedPeople = state.item.joinedPeople;
      const index = joinedPeople.findIndex(jUser => jUser._id === user._id);
      joinedPeople.splice(index, 1);
      commit('addUsertoMeeting', joinedPeople);
    },
    async updateMeeting({ commit }, meeting) {
      return await axiosInstance
        .patch(`/api/meetings/${meeting._id}`, meeting)
        .then(res => {
          const updatedMeeting = res.data;
          commit('setMeeting', updatedMeeting);
          return updatedMeeting;
        });
    }
  },
  mutations: {
    addUsertoMeeting(state, joinedPeople) {
      Vue.set(state.item, 'joinedPeople', joinedPeople);
    },
    setMeeting(state, meeting) {
      return Vue.set(state.item, meeting);
    }
  }
};
