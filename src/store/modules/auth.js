//import axios from "axios";
import * as auth from '../../services/authService'

export default {
  namespaced: true,
  state: {
    isLoggedIn: false,
    email: null,
    userId: null,
    token: localStorage.getItem("token") || null,
  },
  mutations: {
    authenticate(state) {
      state.isLoggedIn = auth.isLoggedIn();
      if (state.isLoggedIn) {
        state.email = auth.getEmail();
        state.userId = auth.getUserId();
      } else {
        state.email = null;
        state.userId = null;
      }
    }
  },
  actions: {
    authenticate(context) {
      context.commit("authenticate");
    }
  }
};
