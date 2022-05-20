<script setup lang="ts">
import { ref } from 'vue';
import ProductsAPI from '../services/ProductsAPI';

const emit = defineEmits<{
  (e: 'changeCategory', newCategory: string): void,
  (e: 'changeSort', newFilter: string): void
}>()

const handleCategory = () => {
   emit('changeCategory', categorySelected.value)
}
const handleSort = () => {
   emit('changeSort', sorterSelected.value)
}

const categoriesAvailable = ref<string[]>([]);
const fecthCategories = async () => {
  const { data } = await ProductsAPI.getCategories();
  categoriesAvailable.value = data;
};
fecthCategories();

const sorterSelected = ref('descRating')
const categorySelected = ref('all')
</script>

<template>
   <div>
      <div class="container">
         <section class="categorySelector">
            <label for="categories">Selecione uma categoria: </label>
            <select name="categories" id="categories" v-model="categorySelected" @change="handleCategory">
               <option value="all" selected>Todas</option>
               <option v-for="category in categoriesAvailable" :value="category">
                  {{ category }}
               </option>
            </select>
         </section>
         <section class="sorterInput">
            <label for="sorter">Ordene por: </label>
            <select name="sorter" id="sorter" v-model="sorterSelected" @change="handleSort">
               <option value="descPrice">Maior preço</option>
               <option value="ascPrice">Menor preço</option>
               <option value="descRating">Maior avaliação</option>
               <option value="ascRating">Menor avaliação</option>
            </select>
         </section>
      </div>
   </div>
</template>

<style scoped lang="scss">
div {
   width: 100%;
   background-color: #e1e1e1;
   padding-top: 5rem;

   .container {
      max-width: 1020px;
      margin: 0 auto;

      display: flex;
      align-items: center;
      justify-content: space-between;
   }
}
</style>