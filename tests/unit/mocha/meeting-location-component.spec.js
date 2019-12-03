/* eslint-disable no-undef */
import MeetingLocation from '@/components/meeting/MeetingLocation'; // name of your Vue component
import { expect } from 'chai';

describe('MeetingLocation.vue', () => {
  it('has a name property that equals post-create of type String', () => {
    expect(typeof MeetingLocation.name).to.equal('string');
    expect(MeetingLocation.name).to.equal('meeting-location');
  });

  it('has a data function', () => {
    expect(typeof MeetingLocation.data).to.equal('function');
  });

  it('data function returns form object', () => {
    expect(typeof MeetingLocation.data().form).to.equal('object');
  });

  it('form object has location property that equals null as default', () => {
    expect(typeof MeetingLocation.data().form.location).to.equal('object');
    expect(MeetingLocation.data().form.location).to.equal(null);
  });

  it('has a emitFormData function', () => {
    expect(typeof MeetingLocation.methods.emitFormData).to.equal('function');
  });

  it('has a methods object', () => {
    expect(typeof MeetingLocation.methods).to.equal('object');
  });

  it('has a validations object', () => {
    expect(typeof MeetingLocation.validations).to.equal('object');
  });

  it('Validations has form object', () => {
    expect(typeof MeetingLocation.validations.form).to.equal('object');
  });

  it('form object has location object', () => {
    expect(typeof MeetingLocation.validations.form.location).to.equal('object');
  });

  it('location object has required function', () => {
    expect(typeof MeetingLocation.validations.form.location.required).to.equal(
      'function'
    );
  });
});
