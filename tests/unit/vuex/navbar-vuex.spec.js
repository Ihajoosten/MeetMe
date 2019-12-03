/* eslint-disable no-undef */
import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import Navbar from '../../../src/components/shared/Navbar';
import { expect } from 'chai'

const localVue = createLocalVue();

localVue.use(Vuex);

describe('Navbar.vue', () => {
  let state;
  let store

  beforeEach(() => {
    state = {
      isLoggedIn: () => false,
      username: () => 'luc'
    };

    store = new Vuex.Store({
      state
    });
  });

  it('Renders store.state.username', () => {
    const wrapper = shallowMount(Navbar, { store, localVue });
    const i = wrapper.find('i');
    expect(i.text()).to.equal('Welcome ' + state.username + '!');
  });
  
});
