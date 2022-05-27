export default {
  namespaced: true,
  state() {
    return {
      query: '',
      category: '',
    };
  },
  mutations: {
    updateQuery(state, payload) {
      state.query = payload.value;
    },
    updateCategory(state, payload) {
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
