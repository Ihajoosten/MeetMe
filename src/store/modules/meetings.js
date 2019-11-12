import axios from "axios";

export default {
  namespaced: true,
  state: {
    items: [],
    item: {}
  },
  actions: {
    fetchMeetings({ state, commit }) {
      axios.get("/api/v1/meetings").then(res => {
        commit("setItems", { resource: "meetings", items: [] }, { root: true });
        const meetings = res.data;
        commit(
          "setItems",
          { resource: "meetings", items: meetings },
          { root: true }
        );
        return state.meetings;
      });
    },
    fetchMeeting({ state, commit }, meetingId) {
      commit("setItem", { resource: "meetings", item: {} }, { root: true });
      axios.get(`/api/v1/meetings/${meetingId}`).then(res => {
        const meeting = res.data;
        commit(
          "setItem",
          { resource: "meetings", item: meeting },
          { root: true }
        );
        return state.meeting;
      });
    }
  }
};
