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
  getters: {
    meetings(state) {
      return state.meetings;
    },
    categories(state) {
      return state.categories;
    }
  },
  // Actions are like methods in the vue component. They should not mutate the state.
  // Good spot to fetch data. Action call should resolve into data
  actions: {
    fetchMeetings(context) {
      axios.get("/api/v1/meetings").then(res => {
        const meetings = res.data;
        context.commit("setMeetings", meetings);
      });
    },
    fetchCategories(context) {
      axios.get("/api/v1/categories").then(res => {
        const categories = res.data;
        context.commit("setCategories", categories);
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
    }
  }
});
