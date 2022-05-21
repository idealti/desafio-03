<template>
    <header>
        <a href="/">Petit <br>Store</a>
        <nav>
            <router-link to="/">Início</router-link>
        </nav>
        <div>
            <cart-button @toggleBtn='toggleCartView()'/>
            <cart-component v-show="state.appearCart"/>
        </div>
    </header>
</template>

<script>
import { reactive } from '@vue/runtime-core'
import CartComponent from './CartComponent.vue'
import CartButton from './CartButton.vue'
export default {
  name: 'HeaderComponent',
  components:{
    CartComponent,
    CartButton
  },
  setup () {
    const state = reactive({
        appearCart: false    
    })
    function toggleCartView() {
        state.appearCart = !state.appearCart 
    }
    return{
        state,
        toggleCartView
    }
  }
}
</script>
<style lang="scss" scoped>
@import '../variaveis/variaveis.scss';
    header{
        display: flex;
        justify-content: space-around;
        align-items: center;
        height: 120px;
        background-color: $grey-var;
        position: relative;
        & a{
            text-decoration: none;
            text-transform: uppercase;
            font-weight: bold;
            color: $militar-green-var;
            border: 3px solid $militar-green-var;
            padding: 10px;
        }
        & nav{
            padding: 30px;
            & a{
                font-weight: bold;
                color: $militar-green-var;
                border: none;
                transition: .5s;
                &.router-link-exact-active {
                color: $brown-var;
                border-bottom: 3px solid $brown-var;
                }
                &:hover{
                    color: $brown-var;
                }
            }
        }
    }
</style>
