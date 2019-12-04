/* eslint-disable no-undef */
import mutations from './store/mutations';
import { expect } from 'chai';

describe('Testing mutations', () => {
  it('SetItems', () => {
    const state = {
      items: []
    };
    const items = [{}, {}];
    mutations.setItems(state, { items });

    expect(state.items).to.eq(items);
  });

  it('SetItem', () => {
    const state = {
      item: {}
    };
    const item = {};
    mutations.setItem(state, { item });

    expect(state.item).to.eq(item);
  });
});
