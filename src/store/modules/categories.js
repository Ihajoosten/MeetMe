import axios from 'axios';

export default {
  namespaced: true,
  state: {
    items: []
  },
  actions: {
    fetchCategories({ state, commit }) {
      return axios.get('/api/categories').then(res => {
        const categories = res.data;
        commit(
          'setItems',
          { resource: 'categories', items: categories },
          { root: true }
        );
        return state.items;
      });
    }
  }
};
