import axios from 'axios';

export default {
  namespaced: true,
  state: {
    items: []
  },
  actions: {
    async fetchCategories({ state, commit }) {
      const res = await axios.get('/api/categories');
      const categories = res.data;
      commit(
        'setItems',
        { resource: 'categories', items: categories },
        { root: true }
      );
      return state.items;
    }
  }
};
