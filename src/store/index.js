import Vue from 'vue';
import Vuex from 'vuex';

import meetings from './modules/meetings';
import threads from './modules/threads';
import categories from './modules/categories';
import stats from './modules/stats';
import * as auth from '../services/authService';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    meetings,
    threads,
    categories,
    stats
  },
  state: {
    isLoggedIn: false,
    username: null,
    email: null,
    userId: null,
    user: null,
    token: null
  },
  getters: {
    isOwner: state => {
      return authorId => {
        if (!state.user) {
          return false;
        } else {
          return state.userId === authorId;
        }
      };
    },
    isMember: state => {
      return meetingId => {
        return (
          state.user &&
          state.user.joinedMeetings &&
          state.user.joinedMeetings.includes(meetingId)
        );
      };
    }
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
      state.isLoggedIn = auth.isLoggedIn();
      if (state.isLoggedIn) {
        state.email = auth.getEmail();
        state.userId = auth.getUserId();
        state.username = auth.getUsername();
        state.user = auth.getUser();
      } else {
        state.email = null;
        state.userId = null;
        state.username = null;
        state.user = null;
      }
    },
    setMeetings(state, meetings) {
      return Vue.set(state.user, 'joinedMeetings', meetings);
    },
    addItemToArray(state, { item, index, resource }) {
      Vue.set(state[resource].items, index, item);
    }
  },
  actions: {
    authenticate(context) {
      context.commit('authenticate');
    },
    addMeeting({ commit, state }, meetingId) {
      const userMeeting = [...state.user['joinedMeetings'], meetingId];
      commit('setMeetings', userMeeting);
      return true;
    },
    removeMeeting({ commit, state }, meetingId) {
      const userMeetings = [...state.user['joinedMeetings']];
      const index = userMeetings.findIndex(id => id === meetingId);

      userMeetings.splice(index, 1);
      commit('setMeetings', userMeetings);
    }
  }
});
