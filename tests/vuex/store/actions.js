// actions.js
import { applyFilters } from '../../../src/services/filter';
import axios from 'axios';
import axiosInstance from './axiosInstance';

const instance = axios.create({ baseURL: 'http://localhost:5000' });

export default {
  /** MEETINGS **/
  async fetchMeetings({ state, commit }, options = {}) {
    const url = applyFilters('/api/meetings', options.filter);
    const res = await instance.get(url);
    commit('setItems', { resource: 'meetings', items: res.data });
    return state.items;
  },

  async fetchMeeting({ state, commit }, id) {
    const res = await instance.get(`/api/meetings/${id}`);
    const meeting = res.data;
    commit('setItem', { resource: 'meetings', item: meeting });
    return state.item;
  },

  async createMeeting({ rootState }, meetingToCreate) {
    meetingToCreate.author = rootState;
    meetingToCreate.processedLocation = meetingToCreate.location
      .toLowerCase()
      .replace(/[\s,]+/g, '')
      .trim();

    const res = await axiosInstance.post('/api/meetings', meetingToCreate);
    return res.data;
  },
  async deleteMeeting(_, meetingId) {
    const res = await axiosInstance.delete(`/api/meetings/${meetingId}`);
    const id = res.data;
    return id;
  },
  async updateMeeting({ commit }, meeting) {
    const res = await axiosInstance.patch(
      `/api/meetings/${meeting._id}`,
      meeting
    );
    const updatedMeeting = res.data;
    commit('mergeMeetings', updatedMeeting);
    return updatedMeeting;
  },

  /** THREADS **/
  async fetchThreads({ state, commit }, meetingId) {
    const url = applyFilters(`/api/threads?meetingId=${meetingId}`);
    const res = await instance.get(url);
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
    commit('addItemToArray', { item: created, index, resource: 'threads' });
    return created;
  }
};
