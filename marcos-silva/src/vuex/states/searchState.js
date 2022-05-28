export default {
  namespaced: true,
  state() {
    return {
      query: '',
      category: '',
    };
  },
  mutations: {
    UPDATE_QUERY(state, payload) {
      state.query = payload.value;
    },
    UPDATE_CATEGORY(state, payload) {
      state.category = payload.value;
    },
  },
  getters: {
    getCategory(state) {
      return state.category;
    },
    getQuery(state) {
      return state.query;
    },
  },
};
