/* eslint-disable no-undef */
import PostCreate from '@/components/post/PostCreate'; // name of your Vue component
import { expect } from 'chai';

describe('PostCreate.vue', () => {

  it('has a name property that equals post-create of type String', () => {
    expect(typeof PostCreate.name).to.equal('string');
    expect(PostCreate.name).to.equal('post-create')
  });

  it('has a computed object', () => {
    expect(typeof PostCreate.computed).to.equal('object');
  });

  it('Computed has function meeting', () => {
    expect(typeof PostCreate.computed.meeting).to.equal('function');
  });
  
  it('has a props object', () => {
    expect(typeof PostCreate.props).to.equal('object');
  });

  it('Props object contains threadId property to be object', () => {
    expect(typeof PostCreate.props.threadId).to.equal('object');
  });

  it('threadId property has boolean required', () => {
    expect(typeof PostCreate.props.threadId.required).to.equal('boolean');
    expect(PostCreate.props.threadId.required).to.equal(true);

  });

  it('threadId property has string Type', () => {
    expect(typeof PostCreate.props.threadId.type).to.equal('function');
    expect(PostCreate.props.threadId.type).to.equal(String);

  });

  it('has a data function', () => {
    expect(typeof PostCreate.data).to.equal('function');
  });

  it('has a savePost function', () => {
    expect(typeof PostCreate.methods.savePost).to.equal('function');
  });

  it('has a methods object', () => {
    expect(typeof PostCreate.methods).to.equal('object');
  });
});
