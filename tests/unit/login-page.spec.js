/* eslint-disable no-undef */
import Login from '@/pages/account/Login'; // name of your Vue component
import { shallowMount } from '@vue/test-utils'
import { expect } from 'chai';

describe('Login.vue', () => {

    it('has a name property that equals login of type String', () => {
        expect(typeof Login.name).to.equal('string');
        expect(Login.name).to.equal('login')
      });

      it('has a data function', () => {
        expect(typeof Login.data).to.equal('function');
      });
    
      it('data() is object', () => {
        expect(typeof Login.data()).to.equal('object');
      });
    
      it('data function returns form object', () => {
        expect(typeof Login.data().form).to.equal('object');
      });

      it('form prop equals email that is null', () => {
        expect(typeof Login.data().form.email).to.equal('object');
        expect(Login.data().form.email).to.equal(null)
      });

      it('form prop equals password that is null', () => {
        expect(typeof Login.data().form.password).to.equal('object');
        expect(Login.data().form.password).to.equal(null)
      });

      it('has a methods object', () => {
        expect(typeof Login.methods).to.equal('object');
      });

      it('has a validations object', () => {
        expect(typeof Login.validations).to.equal('object');
      });

      it('has a computed object', () => {
        expect(typeof Login.computed).to.equal('object');
      });

      it('has a form object withing validations object', () => {
        expect(typeof Login.validations.form).to.equal('object');
      });

      it('has a form object with two props: email and password', () => {
        expect(typeof Login.validations.form).to.equal('object');
        expect(typeof Login.validations.form.email).to.equal('object');
        expect(typeof Login.validations.form.password).to.equal('object');
        expect(typeof Login.validations.form.password.required).to.equal('function');
        expect(typeof Login.validations.form.email.required).to.equal('function');
      });

      it('has a notValid function inside computed object', () => {
        expect(typeof Login.computed.notValid).to.equal('function');
      });
    
      it('the methods object should contain function login()', () => {
        expect(typeof Login.methods.login).to.equal('function');
      });

      it('renders data() correctly', () => {
        const factory = (form = {email, password}) => {
            return shallowMount(Login, {
              data () {
                return {
                  ...form
                }
              }
            })
          }

          it('renders email prop correctly', () => {
              const wrapper = factory();

              expect(wrapper.find('.email'.text()).to.equal(null))
          })

          it('renders password prop correctly', () => {
            const wrapper = factory();

            expect(wrapper.find('.password'.text()).to.equal(null))
        })
      })

});