/* eslint-disable no-undef */
import { shallowMount } from '@vue/test-utils';
import Spinner from '@/components/shared/Spinner'; // name of your Vue component
import { expect } from 'chai';

describe('Spinner.vue', () => {
  
  it('Count of div elements equals 7', () => {
    const wrapper = shallowMount(Spinner);
    expect(wrapper.findAll('div').length).to.equal(7);
  });

});
