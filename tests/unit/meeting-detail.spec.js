/* eslint-disable no-undef */
import MeetingDetail from '@/components/meeting/MeetingDetail'; // name of your Vue component
import { expect } from 'chai';

describe('MeetingDetail.vue', () => {

  it('has a name property that equals meeting-detail of type String', () => {
    expect(typeof MeetingDetail.name).to.equal('string');
    expect(MeetingDetail.name).to.equal('meeting-detail')
  });

  it('has a computed object', () => {
    expect(typeof MeetingDetail.computed).to.equal('object');
  });

  it('Computed has function categories', () => {
    expect(typeof MeetingDetail.computed.categories).to.equal('function');
  });

  it('has a methods object', () => {
    expect(typeof MeetingDetail.methods).to.equal('object');
  });

  it('the methods object should contain function emitFormData()', () => {
    expect(typeof MeetingDetail.methods.emitFormData).to.equal('function');
  });

  it('the methods object should contain function setDate()', () => {
    expect(typeof MeetingDetail.methods.setDate).to.equal('function');
  });
  

  it('has a data function', () => {
    expect(typeof MeetingDetail.data).to.equal('function');
  });

  it('data() is object', () => {
    expect(typeof MeetingDetail.data()).to.equal('object');
  });

  it('data function returns form object', () => {
    expect(typeof MeetingDetail.data().form).to.equal('object');
  });

  it('form object has property title and equals null', () => {
    expect(typeof MeetingDetail.data().form.title).to.equal('object');
    expect(MeetingDetail.data().form.title).to.equal(null);
  });

  it('form object has property startDate and equals null', () => {
    expect(typeof MeetingDetail.data().form.startDate).to.equal('object');
    expect(MeetingDetail.data().form.startDate).to.equal(null);
  });

  it('form object has property timeFrom and equals null', () => {
    expect(typeof MeetingDetail.data().form.timeFrom).to.equal('object');
    expect(MeetingDetail.data().form.timeFrom).to.equal(null);
  });

  it('form object has property timeTo and equals null', () => {
    expect(typeof MeetingDetail.data().form.timeTo).to.equal('object');
    expect(MeetingDetail.data().form.timeTo).to.equal(null);
  });

  it('form object has property category and equals null', () => {
    expect(typeof MeetingDetail.data().form.category).to.equal('object');
    expect(MeetingDetail.data().form.category).to.equal(null);
  });

  it('has a validations object with a form object inside it', () => {
    expect(typeof MeetingDetail.validations.form).to.equal('object');
    expect(typeof MeetingDetail.validations.form.title).to.equal('object');
  });
});
