import { createStore } from 'vuex'

export const useStore = createStore({
    state: {
      count: 0,
      cart: ['bola'],
    },
    mutations: {
      increment (state) {
        state.count++
      },

      addInCart (state, item) {

         const inCart = state.cart.find(product => product.id === item.id);

         if(!inCart){
           item.qtd=1;
           console.log("não tem")
         }else{
           
           console.log("tem")
         }

       
        console.log("item", item)
        state.cart.push( item)

       

     
      
      },



    },
    actions: {
      increment (context) {
        context.commit('increment')
      },

      addInCart(context){
        context.commit('addInCart')
      }
    },


   /*  getters: {
      inCart (state, item) {
        return state.cart.find(product => product.id ===item.id);
      }
    } */
    
  })