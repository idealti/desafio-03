<template>
    <div>
        <label for="sort">Ordenar Por: </label>
        <select name="sort" id="sort" v-model="state.selected">
            <option >Selecione</option>
            <option  value="1">Maior preço</option>
            <option  value="2">Menor preço</option>
            <option  value="3">Menor avaliação</option>
            <option  value="4">Maior avaliação</option>
            <option  value="5">A-Z</option>
            <option  value="6">Z-A</option>
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
        SORT_BY_DESC_RATE,
        SORT_BY_AZ,
        SORT_BY_ZA
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
    function sortByAZ() {
        store.commit (SORT_BY_AZ)
    }
    function sortByZA () {
        store.commit (SORT_BY_ZA)

    }
    watch(
        () => state.selected,
        () => {
            if(state.selected === '1'){sortByDesc()}
            if(state.selected === '2'){sortByAsc()}
            if(state.selected === '3'){sortByAscRate()}
            if(state.selected === '4'){sortByDescRate()}
            if(state.selected === '5'){sortByAZ()}
            if(state.selected === '6'){sortByZA()}
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