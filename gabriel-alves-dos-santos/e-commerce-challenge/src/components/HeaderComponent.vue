<template>
    <header :class="state.scroll" @scroll="getScroll()">
        <a href="/">Petit <br>Store</a>
        <div>
            <cart-button @toggleBtn='toggleCartView()' @openView='open()' />
            <cart-component v-show="state.appearCart" @closeView='toggleCartView()' />
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
        appearCart: false,
        scroll: ''
    })
    function open(){
        state.appearCart = true
    }
    function toggleCartView() {
        state.appearCart = !state.appearCart 
    }
    function getScroll(){
        console.log(window.scrollY)
    }
    /*
        'trabalha em conjunto' com o o cart component,
        caso o header diminua, o top do cart diminui tb,
        para não sobrar espaço entre eles
    */
    window.addEventListener('scroll',() => {
        if(window.scrollY > 99){
            state.scroll = 'scroll'
        } else {
            state.scroll = ''
        }
    })
    return{
        state,
        toggleCartView,
        open,
        getScroll
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
        width: 100%;
        background-color: $grey-var;
        position: fixed;
        z-index: 100;
        transition: .5s;
        &.scroll {
            height: 80px;
        }
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
