import Vue from "vue";
import Vuex from "vuex";

import meetings from "./modules/meetings";
import threads from "./modules/threads";
import categories from "./modules/categories";
import auth from "./modules/auth";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    meetings,
    threads,
    categories,
    auth
  },
  // Functions to mutate the state
  mutations: {
    setItems(state, { resource, items }) {
      state[resource].items = items;
    },
    setItem(state, { resource, item }) {
      state[resource].item = item;
    }
  }
});
