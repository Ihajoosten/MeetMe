/* eslint-disable no-undef */
import ForgotPass from '@/pages/account/ForgotPassword'; // name of your Vue component
import { expect } from 'chai';

describe('ForgotPassword.vue', () => {

    it('has a name property that equals forgot-password of type String', () => {
        expect(typeof ForgotPass.name).to.equal('string');
        expect(ForgotPass.name).to.equal('forgot-password')
      });

      it('has a data function', () => {
        expect(typeof ForgotPass.data).to.equal('function');
      });
    
      it('data() is object', () => {
        expect(typeof ForgotPass.data()).to.equal('object');
      });
    
      it('data function returns form object', () => {
        expect(typeof ForgotPass.data().form).to.equal('object');
      });

      it('form prop equals email that is null', () => {
        expect(typeof ForgotPass.data().form.email).to.equal('object');
        expect(ForgotPass.data().form.email).to.equal(null)
      });

      it('form prop equals password that is null', () => {
        expect(typeof ForgotPass.data().form.password).to.equal('object');
        expect(ForgotPass.data().form.password).to.equal(null)
      });

      it('has a methods object', () => {
        expect(typeof ForgotPass.methods).to.equal('object');
      });

      it('has a validations object', () => {
        expect(typeof ForgotPass.validations).to.equal('object');
      });

      it('has a computed object', () => {
        expect(typeof ForgotPass.computed).to.equal('object');
      });

      it('has a form object withing validations object', () => {
        expect(typeof ForgotPass.validations.form).to.equal('object');
      });

      it('has a form object with two props: email and password', () => {
        expect(typeof ForgotPass.validations.form).to.equal('object');
        expect(typeof ForgotPass.validations.form.email).to.equal('object');
        expect(typeof ForgotPass.validations.form.password).to.equal('object');
        expect(typeof ForgotPass.validations.form.password.required).to.equal('function');
        expect(typeof ForgotPass.validations.form.email.required).to.equal('function');
      });

      it('has a notValid function inside computed object', () => {
        expect(typeof ForgotPass.computed.notValid).to.equal('function');
      });
    
      it('the methods object should contain function changePassword()', () => {
        expect(typeof ForgotPass.methods.changePassword).to.equal('function');
      });

});