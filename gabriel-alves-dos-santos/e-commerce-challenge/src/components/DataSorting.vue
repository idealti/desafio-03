<template>
    <div>
        <label for="sort">Ordenar Por: </label>
        <select name="sort" id="sort" v-model="state.selected">
            <option >Selecione</option>
            <option @click="sortByDesc()" value="1">Maiores preços</option>
            <option @click="sortByAsc()" value="2">Menores preços</option>
            <option @click="sortByAscRate()" value="3">Menor avaliação</option>
            <option @click="sortByDescRate()" value="4">Maior avaliação</option>
        </select>
    </div>
</template>

<script>
import { reactive, watch } from '@vue/runtime-core'
import { useStore } from 'vuex'
import { types } from '../store/mutationTypes'
export default {
  name: 'DataSorting',
  setup () {
    const store = useStore()
    const state = reactive({
        selected: null
    })
    const {
        SORT_BY_ASC,
        SORT_BY_DESC,
        SORT_BY_ASC_RATE,
        SORT_BY_DESC_RATE
    } = types
    function sortByDesc () {
        store.commit (SORT_BY_DESC)
    }
    function sortByAsc () {
        store.commit (SORT_BY_ASC)
    }
    function sortByAscRate () {
        store.commit (SORT_BY_ASC_RATE)
    }
    function sortByDescRate () {
        store.commit (SORT_BY_DESC_RATE)
    }
    watch(
        () => state.selected,
        () => {
            if(state.selected === '1'){sortByDesc()}
            if(state.selected === '2'){sortByAsc()}
            if(state.selected === '3'){sortByAscRate()}
            if(state.selected === '4'){sortByDescRate()}
        }
    )
    return{
        state        
    }
  }
}
</script>

<style lang="scss" scoped>

</style>