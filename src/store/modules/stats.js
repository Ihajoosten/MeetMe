import axiosInstance from '../../services/axiosInstance';

export default {
  namespaced: true,

  state: {
    meetings: {
      data: [],
      count: null
    },
    threads: {
      data: [],
      count: null
    },
    posts: {
      data: [],
      count: null
    }
  },
  actions: {
    async fetchUserStats({ commit }) {
      const res = await axiosInstance.get('/api/users/account');
      const stats = res.data;
      commit('setStats', stats);
      return stats;
    },
    updateStats({ state, commit }, meetingId) {
      commit('deleteResource', { resource: 'meetings', itemId: meetingId });

      state.threads.data.filter(thread => {
          return thread.meeting === meetingId;
        }).flatMap(thread => {
          commit('deleteResource', { resource: 'threads', itemId: thread._id });
        }).map(postId => {
          commit('deleteResource', { resource: 'posts', itemId: postId });
        });
    },
    updateThreadsAndPosts({ state, commit }, threadId) {
      commit('deleteResource', { resource: 'threads', itemId: threadId });

      state.posts.data.filter(post => {
          return post.thread === threadId;
        }).flatMap(post => {
          commit('deleteResource', { resource: 'posts', itemId: post._id });
        })
    },
    updatePost({ commit }, postId) {
      commit('deleteResource', { resource: 'posts', itemId: postId });
    }
  },
  mutations: {
    setStats(state, stats) {
      return Object.assign(state, {}, stats);
    },
    deleteResource(state, { resource, itemId }) {
      const index = state[resource].data.findIndex(item => item._id === itemId);
      state[resource].data.splice(index, 1);
      state[resource].count--;
    }
  }
};
