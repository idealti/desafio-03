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
  }
}
</script>

<style lang="scss" >
@import '../variaveis/variaveis.scss';
section{
    & div.config{
      box-shadow: 1px 1px 10px black;
      background-color: white;
      display: flex;
      justify-content: space-around;
      width: 95%;
      padding: 20px;
      margin: 10px auto;
      & label{
        color: black;
      }
      & select{
        padding: 3px 7px;
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
