/* eslint-disable no-undef */
import actions from './store/actions';
// import mutations from './store/mutations'

describe('Meeting actions', () => {
  it('fetchMeetings', async () => {
    const commit = jest.fn();
    const state = {
      items: []
    };

    const res = await actions.fetchMeetings({ state, commit });
    expect(res).toEqual(state.items);
    expect(commit).toHaveBeenCalled();
  });

  it('fetchMeeting', async () => {
    const commit = jest.fn();
    const state = {
      item: {}
    };

    const res = await actions.fetchMeeting(
      { state, commit },
      '5de51758995e0d8d24750a4f'
    );
    expect(res).toEqual(state.item);
    expect(commit).toHaveBeenCalled();
  });

  it('CreateMeeting', async () => {
    const commit = jest.fn();
    const meeting = {
      location: 'Deurne, NL',
      title: 'test title',
      startDate: new Date(),
      timeTo: '18:00',
      timeFrom: '19:45',
      category: '5dda8f7db557a05df8b074d3',
      image: 'testimage.jpg',
      description: 'test description'
    };

    const state = {
      item: {}
    };

    const res = await actions.createMeeting(
      '5de50756031782216877c323',
      meeting
    );
    const result = await actions.fetchMeeting({ state, commit }, res._id);
    expect(state.item).toEqual(result);
    const deleted = await actions.deleteMeeting({}, res._id);
    expect(deleted);
  });

  it('fetchMeeting', async () => {
    const commit = jest.fn();
    const state = {
      item: {}
    };

    const res = await actions.fetchMeeting(
      { state, commit },
      '5de51758995e0d8d24750a4f'
    );
    expect(res).toEqual(state.item);
    expect(commit).toHaveBeenCalled();
  });

  it('DeleteMeeting', async () => {
    const meeting = {
      location: 'Deurne, NL',
      title: 'test title',
      startDate: new Date(),
      timeTo: '18:00',
      timeFrom: '19:45',
      category: '5dda8f7db557a05df8b074d3',
      image: 'testimage.jpg',
      description: 'test description'
    };

    const res = await actions.createMeeting(
      '5de50756031782216877c323',
      meeting
    );
    const deleted = await actions.deleteMeeting({}, res._id);
    expect(deleted);
  });

  it('UpdateMeeting', async () => {
    const commit = jest.fn();
    const meeting = {
      location: 'Deurne, NL',
      title: 'test title',
      startDate: new Date(),
      timeTo: '18:00',
      timeFrom: '19:45',
      category: '5dda8f7db557a05df8b074d3',
      image: 'testimage.jpg',
      description: 'test description'
    };

    const res = await actions.createMeeting(
      '5de50756031782216877c323',
      meeting
    );

    const updateMeeting = {
      _id: res._id,
      location: 'Vlierden, NL',
      author: { _id: res.author }
    };
    const updated = await actions.updateMeeting({ commit }, updateMeeting);
    expect(updated);
    expect(commit).toHaveBeenCalledWith('mergeMeetings', updated);
    await actions.deleteMeeting({}, res._id);
  });
});

describe('Thread actions', () => {
  it('FetchThreads', async () => {
    const commit = jest.fn();
    const meeting = {
      location: 'Deurne, NL',
      title: 'test title',
      startDate: new Date(),
      timeTo: '18:00',
      timeFrom: '19:45',
      category: '5dda8f7db557a05df8b074d3',
      image: 'testimage.jpg',
      description: 'test description'
    };

    const state1 = {
      item: {}
    };

    const state2 = {
      items: []
    };

    const res = await actions.createMeeting(
      '5de50756031782216877c323',
      meeting
    );
    const result = await actions.fetchMeeting(
      { state: state1, commit },
      res._id
    );
    expect(state1.item).toEqual(result);

    const threads = await actions.fetchThreads(
      { state: state2.items, commit },
      res._id
    );
    expect(threads);
    expect(commit).toHaveBeenCalled();
    expect(commit).toHaveBeenCalledWith('setAllDataLoaded', true);

    const deleted = await actions.deleteMeeting({}, res._id);
    expect(deleted);
  });

  it('PostThread', async () => {
    const commit = jest.fn();
    const thread = {
      title: 'test title'
    };

    const meeting = {
      location: 'Deurne, NL',
      title: 'test title',
      startDate: new Date(),
      timeTo: '18:00',
      timeFrom: '19:45',
      category: '5dda8f7db557a05df8b074d3',
      image: 'testimage.jpg',
      description: 'test description'
    };

    const state = {
      items: []
    };

    const res = await actions.createMeeting(
      '5de50756031782216877c323',
      meeting
    );
    expect(res);

    const post = await actions.postThread(
      { commit, state },
      { title: thread.title, meeting: res._id }
    );
    expect(post);
    expect(commit).toHaveBeenCalledWith('addItemToArray', {
      item: post,
      index: 0,
      resource: 'threads'
    });
    const deleted = await actions.deleteMeeting({}, res._id);
    expect(deleted);
  });
});
