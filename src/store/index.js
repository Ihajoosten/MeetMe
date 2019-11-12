import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  // In state we will keep our data that is been shared within the components.
  state: {
    meetings: [],
    categories: [],
    threads: [],
    meeting: {}
  },
  // Getters are like computed properties, they're simple to use functions to get a state.
  getters: {},
  // Actions are like methods in the vue component. They should not mutate the state.
  // Good spot to fetch data. Action call should resolve into data
  actions: {
    fetchMeetings({ state, commit }) {
      axios.get("/api/v1/meetings").then(res => {
        const meetings = res.data;
        commit("setMeetings", meetings);
        return state.meetings;
      });
    },
    fetchCategories({ state, commit }) {
      axios.get("/api/v1/categories").then(res => {
        const categories = res.data;
        commit("setCategories", categories);
        return state.categories;
      });
    },
    fetchMeeting({ state, commit }, meetingId) {
      axios.get(`/api/v1/meetings/${meetingId}`).then(res => {
        const meeting = res.data;
        commit("setMeeting", meeting);
        return state.meeting;
      });
    },
    fetchThreads({ state, commit }, meetingId) {
      axios.get(`/api/v1/threads?meetingId=${meetingId}`).then(res => {
        const threads = res.data;
        commit("setThreads", threads);
        return state.threads;
      });
    }
  },
  // Functions to mutate the state
  mutations: {
    setMeetings(state, meetings) {
      state.meetings = meetings;
    },
    setCategories(state, categories) {
      state.categories = categories;
    },
    setMeeting(state, meeting) {
      state.meeting = meeting;
    },
    setThreads(state, threads) {
      state.threads = threads;
    }
  }
});
