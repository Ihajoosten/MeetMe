/* eslint-disable no-undef */
import actions from './store/actions'
// import mutations from './store/mutations'

describe("Meeting actions", () => {
  it("fetchMeeting", async () => {
    const commit = jest.fn()
    const state = {
      items: []
    }

    const res = await actions.fetchMeetings({state, commit })
    expect(res).toEqual(state.items)
    expect(commit).toHaveBeenCalled()
  })
})