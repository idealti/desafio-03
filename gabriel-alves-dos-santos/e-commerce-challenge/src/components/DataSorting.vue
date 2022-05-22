<template>
    <div>
        <label for="sort">Ordenar Por: </label>
        <select name="sort" id="sort">
            <option >Selecione</option>
            <option @click.prevent="sortByDesc()">Maiores preços</option>
            <option @click.prevent="sortByAsc()">Menores preços</option>
            <option @click.prevent="sortByAscRate()">Menor avaliação</option>
            <option @click.prevent="sortByDescRate()">Maior avaliação</option>
        </select>
    </div>
</template>

<script>
import { useStore } from 'vuex'
import { types } from '../store/mutationTypes'
export default {
  name: 'DataSorting',
  setup () {
    const store = useStore()
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
    
    return{
        sortByDesc,
        sortByAsc,
        sortByAscRate,
        sortByDescRate
        
    }
  }
}
</script>

<style lang="scss" scoped>

</style>