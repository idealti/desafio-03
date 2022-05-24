import ProductService from "../../services/productService";
const api = new ProductService()

const state = {
    loading:false,
    products:[],
    categories:[],
};

const getters = {
    StateProductsLoading: state => state.loading,
    StateProducts: state => state.products,
    StateCategories: state => state.categories,
};
const mutations = {
    setProducts(state, value){
        state.products = value
    },
    setCategories(state, value){
        state.categories = value
    },
    setLoading(state, value){
        state.loading = value
    },
};
const actions = {
    async ListProducts({commit}, params={}){
        commit('setLoading', true)
        try{
            let response = await api.get('', params)
            commit('setProducts', response.data)
        }catch(err){
            alert('Falha na requisição de produtos')
        }
        commit('setLoading', false)
    },
    async ListCategories({commit}, params={}){
        commit, params
        let response = await api.get('/categories', params)
        commit('setCategories', response.data)
    }
};

export default {
    state,
    getters,
    actions,
    mutations
};