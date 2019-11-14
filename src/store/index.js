import Vue from "vue";
import Vuex from "vuex";

import meetings from "./modules/meetings";
import threads from "./modules/threads";
import categories from "./modules/categories";
import * as auth from "../services/authService";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    meetings,
    threads,
    categories
    //auth
  },
  state: {
    isLoggedIn: false,
    username: null,
    email: null,
    userId: null,
    token: localStorage.getItem("token") || null,
  },
  // Functions to mutate the state
  mutations: {
    setItems(state, { resource, items }) {
      state[resource].items = items;
    },
    setItem(state, { resource, item }) {
      state[resource].item = item;
    },
    authenticate(state) {
      if (auth.isLoggedIn()) {
        state.isLoggedIn = true;
        state.email = auth.getEmail();
        state.userId = auth.getUserId();
        state.username = auth.getUsername();
      } else {
        localStorage.clear();
        state.isLoggedIn = false;
        state.email = null;
        state.userId = null;
        state.username = null;
      }
    }
  },
  actions: {
    authenticate(context) {
      context.commit("authenticate");
    }
  }
});
