import { createStore } from 'vuex'
import { types } from '../store/mutationTypes'
const { ADD_TO_DATA_CONTAINER } = types
export default createStore({
  state: {
    listaDeCompras: [],
    dataContainer: [],
    selectedCategory: '',
    allItensUrl: 'https://fakestoreapi.com/products'
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
        return total
      },
      getTotalItens (state) {
        const arraySoma = []
        state.listaDeCompras.filter((el) => {
          return arraySoma.push(el.amount)
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
          el.amount += 1
        }
      })
      const contemEl = state.listaDeCompras.some((x) => {
        return x.id === payload.id
      })
      if(contemEl === false){
        payload.amount += 1
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
          if(x.amount === 1){
            return state.listaDeCompras.splice(state.listaDeCompras.indexOf(x),1)
          }
          x.amount--
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
  async getSpecificCategory({ commit }, payload) {
    try{
      const req = await fetch(`https://fakestoreapi.com/products/category/${payload}`)
      if(navigator.onLine === false) throw new Error('Erro de rede, erifique sua conexão com a Internet')
      if(req.status === 408) throw new Error('Tempo de resposta excedido, verifique sua conexão')
      if(req.status === 500) throw new Error('Erro no servidor')
      const res = await req.json()
      commit(ADD_TO_DATA_CONTAINER, res)
    }catch(error){
      window.alert(error)
    }
  },
  async getAllData({ commit, state }) {
    try{
      const req = await fetch(state.allItensUrl)
      if(navigator.onLine === false) throw new Error('Errp de rede, verifique sua conexão com a Internet')
      if(req.status === 408) throw new Error('Tempo de resposta excedido, verifique sua conexão')
      if(req.status === 500) throw new Error('Erro no servidor')
      const res = await req.json()
      commit(ADD_TO_DATA_CONTAINER, res)
    } catch(error){
      window.alert(error)
    }
    
  }
},
  modules: {
  }
})
