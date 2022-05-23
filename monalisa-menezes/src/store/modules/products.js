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
      console.log(payload)
      state.filteredProducts = state.products.filter(
        product => product.category === payload 
      )
      state.isFilter = true
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
    }
  }
}
