<template>
    <div>
        <button @click.prevent="addOne(id)">+</button>
        <span> {{ quantidade }} </span>
        <button class="remove-one" @click.prevent="removeOne(id)">-</button>
        <button class="remove-all" @click.prevent="removeAll(id)">🗑️</button>
    </div>
</template>

<script>
import { useStore } from 'vuex'
import { types } from '../store/mutationTypes'
export default {
  name: 'RemoveFromCartBtn',
  props: {
    id: Number,
    quantidade: Number
  },
  setup () {
    const store = useStore()
    const { REMOVE_ONE, REMOVE_ALL, ADD_ONE } = types 
     
    function removeOne (id) {
      store.commit(REMOVE_ONE, id)
    }
    function removeAll(id) {
      store.commit(REMOVE_ALL, id)
    }
    function addOne(id) {
      store.commit(ADD_ONE, id)
    }
    return{
      removeOne,
      removeAll,
      addOne
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../variaveis/variaveis.scss';
  div{
    & button{
      width: 30px;
      height: 30px;
      border-radius: 8px;
      margin: 0 10px;
      cursor: pointer;
      font-weight: bold;
      background-color: black;
      color:white;
    }
    & .remove-all{
      background-color: red;
      color: white;
      box-shadow: 1px 1px 5px red;
      border: none;
    }
  }
</style>