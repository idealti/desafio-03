export default {
  state: {
    cart: [],
    isProduct: false
  },

  getters: {
    valueTotal (state) {
      return state.cart
        .map(item => item.price)
        .reduce((preventValue, currentValue) => preventValue + currentValue, 0)
    }
  },
  mutations: {
    addItem (state, payload) {
      const record = state.cart.find(element => element.id === payload.id)
      if (record === undefined) {
        state.cart.push(payload)
      }
    },
    verifyProduct (state) {
      if (state.cart.length >= 0) {
        state.isProduct = true
      } else {
        state.isProduct = false
      }
    },
    removeAll (state) {
      state.cart = []
      state.isProduct = false
    },
    remove (state, payload) {
      state.cart = state.cart.filter(product => product.id !== payload.id)
      if(state.cart.length === 0){
        state.isProduct = false
      }
    }
  },
  actions: {
    addItem ({ commit }, payload) {
      commit('addItem', payload)
    },
    verifyProduct ({ commit }) {
      commit('verifyProduct')
    },
    removeAll ({ commit }) {
      commit('removeAll')
    },
    remove ({ commit }, payload) {
      commit('remove', payload)
    }
  }
}
