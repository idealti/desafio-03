import { createStore } from 'vuex'

export default createStore({
  state: {
    listaDeCompras: [],
    dataContainer: [],
    selectedCategory: ''
  },
  getters: {
    getTotalPrice (state){
      const arraySoma = []
      state.listaDeCompras.filter((el) => {
        return arraySoma.push(el.totalPrice)
      })
      const total = arraySoma.reduce((a, acc) => {
        return a + acc
      }, 0)
      return total.toFixed(2)
    },
    getTotalItens (state) {
      const arraySoma = []
      state.listaDeCompras.filter((el) => {
        return arraySoma.push(el.quantidade)
      })
      const total = arraySoma.reduce((a, acc) => {
        return a + acc
      }, 0)
      return total
    }
  },
  mutations: {
    ADD_TO_CART (state, payload) {
     
      state.listaDeCompras.filter((el) => {
        if(el.id === payload.id){
          el.totalPrice += el.price
          el.quantidade += 1
        }
      })
      const contemEl = state.listaDeCompras.some((x) => {
        return x.id === payload.id
      })
      if(contemEl === false){
        payload.quantidade += 1
        state.listaDeCompras.push(payload)
      }
    },
    ADD_CATEGORY (state, payload) {
      state.selectedCategory = payload
    },
    ADD_TO_DATA_CONTAINER (state, payload) {
      state.dataContainer = [...payload]
    },
    SORT_BY_DESC (state) {
      const newData = state.dataContainer.sort((a, b) => {
        return b.price - a.price
      })
      state.dataContainer = [...newData]
    },
    SORT_BY_ASC (state) {
      const newData = state.dataContainer.sort((a, b) => {
        return a.price - b.price
      })
      state.dataContainer = [...newData]
    },
    SORT_BY_ASC_RATE (state) {
      const newData = state.dataContainer.sort((a, b) => {
        return a.rating.rate - b.rating.rate
      })
      state.dataContainer = [...newData]
    },
    SORT_BY_DESC_RATE (state) {
      const newData = state.dataContainer.sort((a, b) => {
        return b.rating.rate - a.rating.rate
      })
      state.dataContainer = [...newData]
    },
    CLEAN_DATA (state) {
      state.dataContainer = []
    },
    CLEAN_LIST (state) {
      state.listaDeCompras = []
    },
    REMOVE_ONE (state, payload) {
      state.listaDeCompras.find((x) => {
        if(x.id === payload){
          if(x.quantidade === 1){
            return state.listaDeCompras.splice(state.listaDeCompras.indexOf(x),1)
          }
          x.quantidade--
          x.totalPrice -= x.price
        }
      })
    },
    REMOVE_ALL (state, payload) {
      state.listaDeCompras.find((x) => {
        if(x.id === payload){
          return state.listaDeCompras.splice(state.listaDeCompras.indexOf(x),1)
        }
      })
      
    }
  },
  actions: {
  },
  modules: {
  }
})
