import { http } from '../../services/config'

export default {
  state: {
    products: [],
    filteredProducts: '',
    isFilter: false
  },
  mutations: {
    setProducts (state, payload) {
      state.products = payload
    },
    setFilteredProducts (state, payload) {
      state.filteredProducts = state.products.filter(
        product => product.category.toLowerCase() === payload.toLowerCase()
      )
      state.isFilter = true
    },
    searchFilter (state, payload) {
      if (payload.length > 0) {
        state.filteredProducts = state.products.filter(
          product =>
            product.category.toLowerCase().includes(payload.toLowerCase()) ||
            product.title.toLowerCase().includes(payload.toLowerCase())
        )
        state.isFilter = true
      } else {
        state.isFilter = false
      }
    },
    setIsFilter (state, payload) {
      state.isFilter = payload
    }
  },
  actions: {
    getProducts ({ commit }) {
      return http
        .get('/products')
        .then(response => commit('setProducts', response.data))
        .catch(err => console.log(err))
    },
    setFilteredProducts ({ commit }, payload) {
      commit('setFilteredProducts', payload)
    },
    setIsFilter ({ commit }, payload) {
      commit('setIsFilter', payload)
    },
    searchFilter ({ commit }, payload) {
      commit('searchFilter', payload)
    }
  }
}
