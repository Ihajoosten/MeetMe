/* eslint-disable no-undef */
import { shallowMount } from '@vue/test-utils';
import Footer from '@/components/shared/Footer'; // name of your Vue component
import { expect } from 'chai';

describe('Footer.vue', () => {
  it('Has a P element', () => {
    const wrapper = shallowMount(Footer);
    expect(wrapper.find('p').text()).to.equal(
      'Meet me by Luc Joosten - 23INVT2A - 2140212'
    );
  });

  it('Count of p elements equals 1', () => {
    const wrapper = shallowMount(Footer);
    expect(wrapper.findAll('p').length).to.equal(1);
  });

  it('Count of footer elements equals 1', () => {
    const wrapper = shallowMount(Footer);
    expect(wrapper.findAll('footer').length).to.equal(1);
  });

  it('Text of strong element equals Meet me', () => {
    const wrapper = shallowMount(Footer);
    expect(wrapper.find('strong').text()).to.equal('Meet me');
  });

  it('Count of strong elements equals 1', () => {
    const wrapper = shallowMount(Footer);
    expect(wrapper.findAll('strong').length).to.equal(1);
  });
});
