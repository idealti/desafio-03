const state = {
    cart:[]
};

const getters = {
    StateCart: state => state.cart,
    StateCartTotal: state => {
        const sum = state.cart.map(item => item.price*item.qtde).reduce((prev, curr) => prev + curr, 0);
        return sum        
    },
    StateCartItensTotal: state => {
        const sum = state.cart.map(item => item.qtde).reduce((prev, curr) => prev + curr, 0);
        return sum        
    }
};
const mutations = {
    setCart(state, value){
        state.cart = value
    },
};
const actions = {
    addCart({commit, getters}, item){
        let items = getters.StateCart
        items.push(item)
        commit('setCart', items)
    },
    removeCart({commit, getters}, item){
        let items = getters.StateCart
        let index = items.findIndex(obj => obj.id == item.id)
        items.splice(index,1)
        commit('setCart', items)
    }
};

export default {
    state,
    getters,
    actions,
    mutations
};