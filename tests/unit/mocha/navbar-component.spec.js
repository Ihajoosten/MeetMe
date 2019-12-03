/* eslint-disable no-undef */
import Navbar from '@/components/shared/Navbar'; // name of your Vue component
import { expect } from 'chai';

describe('Navbar.vue', () => {

  it('has a name property that equals Navbar of type String', () => {
    expect(typeof Navbar.name).to.equal('string');
    expect(Navbar.name).to.equal('Navbar')
  });

  it('has a computed object', () => {
    expect(typeof Navbar.computed).to.equal('object');
  });

  it('has a mapState function', () => {
    expect(typeof Navbar.methods.logout).to.equal('function');
  });

  it('has a methods object', () => {
    expect(typeof Navbar.methods).to.equal('object');
  });

//   it('Count of ul elements equals 1', () => {
//     expect(Navbar.findAll('ul').length).to.equal(1);
//   });

//   it('Count of li elements equals 18', () => {
//     expect(Navbar.findAll('li').length).to.equal(18);
//   });
});
