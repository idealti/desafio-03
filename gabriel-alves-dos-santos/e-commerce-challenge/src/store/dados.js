import { types } from './mutationTypes'
const {ADD_TO_DATA_CONTAINER, CHANGE_LOADING_MSG} = types
export default {
    state: () => ({
        dataContainer: [],
        loadingMessage: 'Carregando dados',
        allItensUrl: 'https://fakestoreapi.com/products',
        selectedCategory: '',
    }),
    mutations: { 
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
        SORT_BY_AZ (state){
            const newData = state.dataContainer.sort((a, b) => {
                return a.title > b.title
            })
            state.dataContainer = [...newData]
        },
        SORT_BY_ZA (state){
            const newData = state.dataContainer.sort((a, b) => {
                return a.title < b.title
            })
            state.dataContainer = [...newData]
        },
        CLEAN_DATA (state) {
            state.dataContainer = []
        },
        CHANGE_LOADING_MSG (state, payload) {
            state.loadingMessage = payload
        },
        ADD_CATEGORY (state, payload) {
            state.selectedCategory = payload
        },  
    },
    actions: {
        async getSpecificCategory({ commit }, payload) {
            try{
                const req = await fetch(`https://fakestoreapi.com/products/category/${payload}`)
                if(req.status === 408) throw new Error(`Erro ${req.status} - Tempo de resposta excedido, verifique sua conexão`)
                if(req.status === 500) throw new Error(`Erro ${req.status} - Erro no servidor`)
                const res = await req.json()
                commit(ADD_TO_DATA_CONTAINER, res)
            }catch(error){
                commit(CHANGE_LOADING_MSG, error)
            }
        },
        async getAllData({ commit, state }) {
            try{
                const req = await fetch(state.allItensUrl)
                if(req.status === 408) throw new Error('Tempo de resposta excedido, verifique sua conexão')
                if(req.status === 500) throw new Error('Erro no servidor')
                const res = await req.json()
                commit(ADD_TO_DATA_CONTAINER, res)
            } catch(error){
                commit(CHANGE_LOADING_MSG, error)
            }
            
        }
    }
  }
  