/* eslint-disable no-undef */
// import { shallowMount } from '@vue/test-utils';
import MeetingItem from '@/components/meeting/MeetingItem'; // name of your Vue component
import { expect } from 'chai';

describe('MeetingItem.vue', () => {
  it('has a props object', () => {
    expect(typeof MeetingItem.props).to.equal('object');
  });

  it('props object has meeting object', () => {
    expect(typeof MeetingItem.props.meeting).to.equal('object');
  });

  it('meeting object has required property that equals true as default', () => {
    expect(typeof MeetingItem.props.meeting.required).to.equal('boolean');
    expect(MeetingItem.props.meeting.required).to.equal(true);
  });

  it('meeting object has type property that equals object as default', () => {
    expect(typeof MeetingItem.props.meeting.type).to.equal('function');
    expect(MeetingItem.props.meeting.type).to.equal(Object);
  });

  // it('Count of div elements equals 5', () => {
  //   const wrapper = shallowMount(MeetingItem);
  //   expect(wrapper.findAll('div').length).to.equal(5);
  // });

  // it('Count of h3 elements equals 1', () => {
  //   const wrapper = shallowMount(MeetingItem);
  //   expect(wrapper.findAll('h3').length).to.equal(1);
  // });

  // it('h3 elements equals {{meeting.title}}', () => {
  //   const wrapper = shallowMount(MeetingItem);
  //   expect(wrapper.find('h3').text()).to.equal(MeetingItem.props.meeting.title);
  // });
});
