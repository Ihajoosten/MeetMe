// actions.js
import { applyFilters } from '../../../src/services/filter';
import axios from 'axios';

export default {
  async fetchMeetings({ state, commit }, options = {}) {
    commit('setItems', { resource: 'meetings', items: [] }, { root: true });
    const url = applyFilters('/api/meetings', options.filter);
    const res = await axios.get(url);
    commit(
      'setItems',
      { resource: 'meetings', items: res.data },
      { root: true }
    );
    return state.items;
  }
  
}