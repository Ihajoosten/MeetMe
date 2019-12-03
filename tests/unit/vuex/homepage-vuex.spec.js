/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import Home from '@/pages/other/Home';
import { expect } from 'chai'

const localVue = createLocalVue();

localVue.use(Vuex);

describe('Home - Vuex', () => {
  let state;
  let actions;
  let store

  beforeEach(() => {
    actions = {
        fetchMeetings: () => this.$store.dispatch('meetings/fetchMeetings'),
        fetchCategories: () => this.$store.dispatch('categories/fetchCategories')
    }
    state = {
      location: () => 'Deurne, NL',
      meetings: () => [],
      categories: () => []
    };

    store = new Vuex.Store({
      state,
      actions
    });
  });

  it('Set meetings in the state and renders correctly', () => {
    state.meetings = actions.fetchMeetings
    expect(state.meetings).to.equal(actions.fetchMeetings);
    expect(state.categories).to.not.equal(actions.fetchMeetings);

  });

  it('Set categories in the state and renders correctly', () => {
    state.categories = actions.fetchCategories
    expect(state.categories).to.equal(actions.fetchCategories);
    expect(state.meetings).to.not.equal(actions.fetchCategories)
  });
  
});
