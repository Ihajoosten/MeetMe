/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import Home from '@/pages/other/Home';
import { expect } from 'chai'

const localVue = createLocalVue();

localVue.use(Vuex);

describe('MeetingDetail - Vuex', () => {
  let state;
  let actions;
  let store
  let id = '5de6523b7cbb0c792c9acbb1'

  beforeEach(() => {
    actions = {
        fetchMeeting: () => this.$store.dispatch('meetings/fetchMeeting', id),
        fetchThreads: () => this.$store.dispatch('threads/fetchThreads', id)
    }
    state = {
      location: () => 'Deurne, NL',
      meeting: () => {},
      threads: () => []
    };

    store = new Vuex.Store({
      state,
      actions
    });
  });

  it('Set meeting in the state and renders correctly', () => {
    state.meeting = actions.fetchMeeting
    expect(state.meeting).to.equal(actions.fetchMeeting);
    expect(state.categories).to.not.equal(actions.fetchMeeting);

  });

  it('Set threads in the state and renders correctly', () => {
    state.threads = actions.fetchThreads
    expect(state.threads).to.equal(actions.fetchThreads);
    expect(state.meeting).to.not.equal(state.threads)
  });
  
});
