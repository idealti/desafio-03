<template>
    <div>
        <button class="toggle-btn" @mouseover="openView()" @click.prevent="toggleCartView()">
            <img class="basket-img" src="../assets/image/shopping-basket.png" alt="">
        </button>
    </div>
</template>

<script>

export default {
  name: 'CartButton',
  setup (props, { emit }) {
    function toggleCartView(){
        emit('toggleBtn')
    }
    function openView () {
        emit('openView')
    }
    return {
        toggleCartView,
        openView
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
</style>