/* eslint-disable no-undef */
import UpdateComponent from '@/components/account/UpdateAccountModal'; // name of your Vue component
import { expect } from 'chai';

describe('UpdateAccountModal.vue', () => {
  it('has a name property called update-account-modal', () => {
    expect(typeof UpdateComponent.name).to.equal('string');
    expect(UpdateComponent.name).to.equal('update-account-modal')
  });

  it('has a name property object', () => {
    expect(typeof UpdateComponent.props).to.equal('object');
  });

  it('props has property updateUser', () => {
    expect(typeof UpdateComponent.props.updateUser).to.equal('object');
  });

  it('updateUser has property required that is a boolean which returns true', () => {
    expect(typeof UpdateComponent.props.updateUser.required).to.equal('boolean');
    expect(UpdateComponent.props.updateUser.required).to.equal(true)
  });


  it('has data function with property user as an object', () => {
    expect(typeof UpdateComponent.data).to.equal('function');
  });

  it('has methods object has property type that is an object', () => {
    expect(typeof UpdateComponent.methods).to.equal('object');
  });

  it('methods object has function called emitUser', () => {
    expect(typeof UpdateComponent.methods.emitUser).to.equal('function');
  });
});