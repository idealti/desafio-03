<template>
    <div>
        <span>{{ state.totalItens }}</span>
        <button class="toggle-btn" @mouseover="openView()" @click.prevent="toggleCartView()">
            <img class="basket-img" src="../assets/image/shopping-basket.png" alt="">
        </button>
    </div>
</template>

<script>
import { reactive } from '@vue/reactivity'
import { computed } from '@vue/runtime-core'
import { useStore } from 'vuex'

export default {
  name: 'CartButton',
  setup (props, { emit }) {
    const state = reactive({
        totalItens: 0
    })
    const store = useStore()
    state.totalItens = computed(() => store.state.cart.listaDeCompras.length)
    function toggleCartView(){
        emit('toggleBtn')
    }
    function openView () {
        emit('openView')
    }

    return {
        state,
        toggleCartView,
        openView
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../variaveis/variaveis.scss';
    div{
        & span{
            position: relative;
            top: 0;
            left: 85%;
            color: white;
            font-size: 20px;
            font-weight: bold;
        }
        & .toggle-btn{
            padding: 10px 12px;
            border-radius: 50%;
            cursor: pointer;
            background-color: $grey-var;
            border: 2px solid $militar-green-var;
            transition: .5s;
            & .basket-img{
                width: 30px;
            }
            & ion-icon{
                color: $militar-green-var;
            }
            &:hover{
                border: 2px solid white;
            }
        }
    }

</style>