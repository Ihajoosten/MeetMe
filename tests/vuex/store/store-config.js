// create-store-config.js

import mutations from './mutations';
import actions from './actions';
import getters from './getters';

export default function createStoreConfig() {
  const state = {
    items: [],
    item: {}
  };

  return {
    state,
    getters,
    actions,
    mutations
  };
}
