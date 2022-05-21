<template>
    <div>
        <button class="remove-one" @click.prevent="removeOne(id)">Remover 1</button>
        <button class="remove-all" @click.prevent="removeAll(id)">Remover Tudo</button>
    </div>
</template>

<script>
import { useStore } from 'vuex'
export default {
  name: 'RemoveFromCartBtn',
  props: {
    id: Number,
    objeto: Object
  },
  setup () {
      const store = useStore()
    function removeOne (id) {
        store.commit('REMOVE_ONE', id)
    }
    function removeAll(id) {
        store.commit('REMOVE_ALL', id)
    }
    return{
        removeOne,
        removeAll
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../variaveis/variaveis.scss';
  div{
    & button{
      padding: 5px 8px;
      border-radius: 8px;
      margin: 0 10px;
      cursor: pointer;
      font-weight: bold;
    }
    & .remove-one{
      background-color: orange;
      border: 2px solid orangered;
    }
    & .remove-all{
      background-color: red;
      color: white;
      border: 2px solid red;
    }
  }

</style>