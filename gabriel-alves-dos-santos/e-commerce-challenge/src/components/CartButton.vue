<template>
    <div>
        <button class="toggle-btn" @click.prevent="toggleCartView()"><ion-icon name="basket" size="large"></ion-icon></button>
    </div>
</template>

<script>
import { reactive } from '@vue/reactivity'

export default {
  name: 'CartButton',
  setup (props, { emit }) {
    const state = reactive({
        active: false
    })
    function toggleCartView(){
        emit('toggleBtn')
        state.active = !state.active
    }
    return {
        state,
        toggleCartView
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../variaveis/variaveis.scss';
    .toggle-btn{
        padding: 5px 8px;
        border-radius: 50%;
        cursor: pointer;
        background-color: $grey-var;
        border: 2px solid $militar-green-var;
        transition: .5s;
        & ion-icon{
            color: $militar-green-var;
        }
        &:hover{
            border: 2px solid white;
        }
    }
</style>