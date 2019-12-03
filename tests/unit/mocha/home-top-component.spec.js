/* eslint-disable no-undef */
import { shallowMount } from '@vue/test-utils';
import Top from '@/components/shared/HomeTop'; // name of your Vue component
import { expect } from 'chai';

describe('HomeTop.vue', () => {
  it('Has 2 div elements', () => {
    const wrapper = shallowMount(Top);
    expect(wrapper.findAll('div').length).to.equal(2);
  });

  it('Has 1 h1 element', () => {
    const wrapper = shallowMount(Top);
    expect(wrapper.findAll('h1').length).to.equal(1);
  });

  it('H1 element equals Welcome to Meet Me', () => {
    const wrapper = shallowMount(Top);
    expect(wrapper.find('h1').text()).to.equal('Welcome to Meet Me')
  });

  it('Has 1 h4 element', () => {
    const wrapper = shallowMount(Top);
    expect(wrapper.findAll('h4').length).to.equal(1);
  });

  it('H4 element equals Plan your meetings - Comment to meetings - Become friends with others', () => {
    const wrapper = shallowMount(Top);
    expect(wrapper.find('h4').text()).to.equal('Plan your meetings - Comment to meetings - Become friends with others')
  });

 
});
