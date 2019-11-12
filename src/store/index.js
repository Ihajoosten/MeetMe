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
        commit("setItems", { resource: "meetings", items: [] });
        const meetings = res.data;
        commit("setItems", { resource: "meetings", items: meetings });
        return state.meetings;
      });
    },
    fetchCategories({ state, commit }) {
      axios.get("/api/v1/categories").then(res => {
        commit("setItems", { resource: "categories", items: [] });
        const categories = res.data;
        commit("setItems", { resource: "categories", items: categories });
        return state.categories;
      });
    },
    fetchMeeting({ state, commit }, meetingId) {
      commit("setItem", { resource: "meeting", item: {} });
      axios.get(`/api/v1/meetings/${meetingId}`).then(res => {
        const meeting = res.data;
        commit("setItem", { resource: "meeting", item: meeting });
        return state.meeting;
      });
    },
    fetchThreads({ state, commit }, meetingId) {
      commit("setItems", { resource: "threads", items: [] });
      axios.get(`/api/v1/threads?meetingId=${meetingId}`).then(res => {
        const threads = res.data;
        commit("setItems", { resource: "threads", items: threads });
        return state.threads;
      });
    }
  },
  // Functions to mutate the state
  mutations: {
    setItems(state, { resource, items }) {
      state[resource] = items;
    },
    setItem(state, { resource, item }) {
      state[resource] = item;
    }
  }
});
