// mutations.js

export default {
  setItems(state, { items }) {
    state.items = items;
  },
  setItem(state, { item }) {
    state.item = item;
  }
};
