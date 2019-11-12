import axios from "axios";

export default {
  namespaced: true,
  state: {
    items: []
  },
  actions: {
    fetchThreads({ state, commit }, meetingId) {
      commit("setItems", { resource: "threads", items: [] },    );
      axios.get(`/api/v1/threads?meetingId=${meetingId}`).then(res => {
        const threads = res.data;
        commit(
          "setItems",
          { resource: "threads", items: threads },
          { root: true }
        );
        return state.threads;
      });
    }
  }
};
