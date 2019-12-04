/* eslint-disable no-undef */
import mutations from './store/mutations';
import { expect } from 'chai';

describe('Testing Meeting mutations', () => {
  it('SetItems', () => {
    const state = {
      items: []
    };
    const items = [{}, {}];
    mutations.setItems(state, { items });

    expect(state.items).to.eq(items);
  });

  it('SetItem', () => {
    const state = {
      item: {}
    };
    const item = {};
    mutations.setItem(state, { item });

    expect(state.item).to.eq(item);
    expect(typeof state.item).to.eq('object');
    expect(typeof state.item).not.to.eq('array');
  });

  it('SetMeeting', () => {
    const state = {
      meeting: {}
    };
    const meeting = {};
    mutations.setMeeting(state, { meeting });

    expect(state.item).to.eq(meeting);
    expect(typeof state.item).to.eq('object');
    expect(typeof state.item).not.to.eq('array');
  });

  it('addUserToMeeting', () => {
    const state = {
      item: {
        joinedPeople: []
      }
    };
    const person = {};
    mutations.addUsertoMeeting(state, person);

    expect(state.item.joinedPeople).to.contain(person);
    expect(typeof state.item).to.eq('object');
    expect(typeof state.item).not.to.eq('array');
  });
});

describe('Testing Thread mutations', () => {
  it('SavePostToThread', () => {
    const state = {
      items: [
        {
          posts: []
        }
      ]
    };
    const post1 = { id: 1 };
    const post2 = { id: 2 };

    mutations.savePostToThread(state, { threadPosts: post1, index: 0 });
    expect(state.items[0].posts).contains(post1);

    mutations.savePostToThread(state, { threadPosts: post2, index: 0 });
    expect(state.items[0].posts).contains(post2);

    expect(typeof state.items[0]).to.eq('object');
    expect(typeof state.items[0].posts).to.eq('object');
  });

  it('SaveCommentToPost', () => {
    const state = {
      items: [
        {
          posts: []
        }
      ]
    };
    const post1 = {};
    const comment = {};

    state.items[0].posts.push(post1);

    mutations.saveCommentToPost(state, {
      postComments: comment,
      tIndex: 0,
      pIndex: 0
    });
    expect(state.items[0].posts[0].comments).to.contain(comment);

    expect(typeof state.items[0]).to.eq('object');
    expect(typeof state.items[0].posts).to.eq('object');
  });

  it('IsAllDataLoaded', () => {
    const state = {
      isAllDataLoaded: false
    };

    const isAllDataLoaded = false;

    mutations.setAllDataLoaded({ state, isAllDataLoaded });
    expect(typeof state.isAllDataLoaded).to.eq('boolean');
    expect(state.isAllDataLoaded).to.not.equal(true);

    mutations.setAllDataLoaded({ state, isAllDataLoaded });
    expect(typeof state.isAllDataLoaded).to.eq('boolean');
    expect(state.isAllDataLoaded).to.equal(isAllDataLoaded);
  });

  it('DeleteThread', () => {
    const state = {
      items: []
    };

    const thread1 = { id: 1 };
    const thread2 = { id: 2 };

    state.items.push(thread1);
    state.items.push(thread2);

    const index = state.items.findIndex(item => item.id === thread1.id);

    mutations.deleteThread(state, index);
    expect(state.items[0]).to.contain(thread2);
    mutations.deleteThread(state, index);
    expect(state.items[0]).to.eq(undefined);
    expect(state.items[1]).to.eq(undefined);
  });

  it('DeletePost', () => {
    const state = {
      items: [
        {
          posts: []
        }
      ]
    };

    const post1 = { id: 1 };
    const post2 = { id: 2 };

    const thread = state.items[0];

    thread.posts.push(post1);
    thread.posts.push(post2)

    mutations.deletePost(state, 0, 0);
    expect(state.items).to.contain(thread);
    expect(state.items[2]).to.eq(undefined);
    expect(state.items[0].posts).to.contain(post2)

    mutations.deleteThread(state, 0);
    expect(state.items[0]).to.eq(undefined);
    expect(state.items[1]).to.eq(undefined);
  });
});

describe('Testing Stats mutations', () => {});
