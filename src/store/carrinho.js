export default {
  state: {
    carrinho: [],
 
  },
  mutations: {
    addProduto (state, payload) {
      const igual = state.carrinho.find(item => item.id === payload.id)
      if (igual === undefined) {
        state.carrinho.push(payload)
      }
    }

  },
  actions: {
    addProduto ({ commit }, payload) {
      commit('addProduto', payload)
    }

  }
}
