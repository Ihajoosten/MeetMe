/* eslint-disable no-undef */
import UpdateComponent from '@/components/meeting/UpdateMeeting'; // name of your Vue component
import { expect } from 'chai';

describe('UpdateMeeting.vue', () => {
  it('has a name property called meeting-update', () => {
    expect(typeof UpdateComponent.name).to.equal('string');
    expect(UpdateComponent.name).to.equal('meeting-update')
  });

  it('has a data function', () => {
    expect(typeof UpdateComponent.data).to.equal('function');
  });

  it('has a show property inside the data function that is true', () => {
    expect(typeof UpdateComponent.data().show).to.equal('boolean');
    expect(UpdateComponent.data().show).to.equal(true);
  });

  it('Has computed property that is an object', () => {
    expect(typeof UpdateComponent.computed).to.equal('object');
  });

  it('has a methods object', () => {
    expect(typeof UpdateComponent.methods).to.equal('object');
  });

  it('has an onRest function', () => {
    expect(typeof UpdateComponent.methods.onReset).to.equal('function');
  });

  it('has an updateMeetingHandler function', () => {
    expect(typeof UpdateComponent.methods.updateMeetingHandler).to.equal('function');
  });

  it('has created life-circle function', () => {
    expect(typeof UpdateComponent.created).to.equal('function');
  });

  it('has an onRest function', () => {
    expect(typeof UpdateComponent.methods.onReset).to.equal('function');
  });
});