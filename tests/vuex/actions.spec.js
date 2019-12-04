/* eslint-disable no-undef */
// actions.spec.js

import actions from './store/actions';
import axios from 'axios';

jest.mock('../../src/store/modules/meetings');

test('fetchItems commits items returned by api method', async () => {
  async function getRes() { 
    return await axios.get('/api/meetings');
  }
  let state = {
    items: () => getRes()
  };

  const commit = jest.fn();
  await actions.fetchMeetings({ state, commit });
  expect(commit).toHaveBeenCalled()
});
