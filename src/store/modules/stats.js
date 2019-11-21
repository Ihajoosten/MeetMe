import axiosInstance from '../../services/axiosInstance';

export default {
    namespaced: true,
  
    state: {
      meetings: {
        data: [],
        count: null,
      },
      threads: {
        data: [],
        count: null,
      },
      posts: {
        data: [],
        count: null,
      }
    },
    actions: {
      async fetchUserStats ({commit}) {
        const res = await axiosInstance.get('/api/users/account');
            const stats = res.data;
            commit('setStats', stats);
            return stats;
      }
    },
    mutations: {
      setStats (state, stats) {
        return Object.assign(state, {}, stats)
      }
    }
  }