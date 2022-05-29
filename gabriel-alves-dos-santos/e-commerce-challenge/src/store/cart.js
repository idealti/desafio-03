export default {
    state: () => ({
        listaDeCompras: [],
    }),
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
}