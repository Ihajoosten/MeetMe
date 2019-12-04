/* eslint-disable no-undef */
// create-store-config.spec.js

import createStoreConfig from './store/store-config';
import Vuex from 'vuex';
import * as meet from '../../src/store/modules/meetings';
import { createLocalVue } from '@vue/test-utils';

const localVue = createLocalVue();
localVue.use(Vuex);

jest.mock('../../src/store/modules/meetings');

test('Store sets correct state items', async () => {
    let state = {
        items: async () => await store.dispatch('fetchMeetings')
      };
    
    const commit = jest.fn();

  meet.default.actions.fetchMeetings.mockResolvedValue({state, commit});

  const storeConfig = createStoreConfig();
  const store = new Vuex.Store(storeConfig);

  const result = await store.dispatch('fetchMeetings');

  expect(store.state.items).toEqual(result);
});
