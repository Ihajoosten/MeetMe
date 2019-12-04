// actions.js
import { applyFilters } from '../../../src/services/filter';
import axios from 'axios';



export default {
  async fetchMeetings({ state, commit }, options = {}) {
    const url = applyFilters('/api/meetings', options.filter);
    const res = await axios.get(url);
    commit('setItems',{ resource: 'meetings', items: res.data });
    return state.items;
  }
  
}