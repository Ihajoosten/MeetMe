// mutations.js
import Vue from 'vue';

export default {
  /** MEETINGS **/
  setItems(state, { items }) {
    state.items = items;
  },
  setItem(state, { item }) {
    state.item = item;
  },
  setMeeting(state, { meeting }) {
    state.item = meeting;
  },
  addUsertoMeeting(state, joinedPeople) {
    Vue.set(state.item, 'joinedPeople', joinedPeople);
  },

  /** THREADS **/
  savePostToThread(state, { threadPosts, index }) {
    Vue.set(state.items[index], 'posts', threadPosts);
  },
  saveCommentToPost(state, { postComments, tIndex, pIndex }) {
    Vue.set(state.items[tIndex].posts[pIndex], 'comments', postComments);
  },
  setAllDataLoaded({ state, isAllDataLoaded }) {
    Vue.bind(state.isAllDataLoaded, isAllDataLoaded);
  },
  deleteThread(state, index) {
    Vue.set(state.items.splice(index, 1));
  },
  deletePost(state, threadIndex, postIndex) {
    Vue.set(state.items[threadIndex].posts.splice(postIndex, 1));
  },

  /** STATS **/
  setStats(state, stats) {
    return Object.assign(state, {}, stats);
  },
  deleteResource(state, { resource, itemId }) {
    const index = state[resource].data.findIndex(item => item._id === itemId);
    state[resource].data.splice(index, 1);
    state[resource].count--;
  }
};
