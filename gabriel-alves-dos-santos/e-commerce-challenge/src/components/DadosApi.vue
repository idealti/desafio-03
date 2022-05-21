<template>
    <section>
        <div class="config">
            <select-category-component/>
            <data-sorting/>
        </div>
        <section>
            <data-container />
        </section>
    </section>
</template>

<script>
import { reactive } from '@vue/reactivity'
import SelectCategoryComponent from './SelectCategoryComponent.vue'
import LoadingComponent from './LoadingComponent.vue'
import DataContainer from './DataContainer.vue'
import DataSorting from './DataSorting.vue'
export default {
  name: 'DadosApi',
  components: {
    SelectCategoryComponent,
    LoadingComponent,
    DataContainer,
    DataSorting
  },
  setup () {
    const state = reactive({
      
    })
    return {
      state
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../variaveis/variaveis.scss';
section{
    & div.config{
        display: flex;
        justify-content: space-around;
        border: 2px solid $militar-green-var;
        width: 95%;
        padding: 20px;
        margin: 10px auto;
        & div{
            flex-direction: column;
        }
    }
    & section{
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        gap: 30px;
        min-height: 600px;
        margin: 20px auto;
    }
}
</style>
