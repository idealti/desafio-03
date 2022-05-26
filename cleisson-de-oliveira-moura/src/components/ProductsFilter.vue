<script setup lang="ts">
   import { ref } from 'vue';

   import ProductsAPI from '../services/ProductsAPI';

   // Sending the filter and sort value to Home
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

   // Fetching the products categories from API
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
            <label for="categories">Select a category: </label>
            <select name="categories" id="categories" v-model="categorySelected" @change="handleCategory">
               <option value="all" selected>All</option>
               <option v-for="category in categoriesAvailable" :value="category">
                  {{ category }}
               </option>
            </select>
         </section>
         <section class="sorterInput">
            <label for="sorter">Sort by: </label>
            <select name="sorter" id="sorter" v-model="sorterSelected" @change="handleSort">
               <option value="descPrice">Highest price</option>
               <option value="ascPrice">Lowest Price</option>
               <option value="descRating">Highest rating</option>
               <option value="ascRating">Lowest rating</option>
            </select>
         </section>
      </div>
   </div>
</template>

<style scoped lang="scss">
div {
   width: 100vw;
   background-color: #fff;
   padding-top: 4rem; 

   .container {
      max-width: 1020px;
      margin: 0 auto;
      padding-bottom: 0.5rem;

      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-direction: row;
      font-size: 1.25rem;

      section {
         height: 2rem;
         
         display: flex;
         align-items: center;
         justify-content: center;

         label {
            margin-right: 1rem;
            line-height: 2rem;
         }

         select {
            height: 100%;
            font-size: 1rem;
            border: 1.5px solid #121414;
            border-radius: 0.25rem;
            padding: 0 1rem;
         }
      }

      .categorySelector {
         margin-left: 2rem;
      }
      .sorterInput {
         margin-right: 1rem;
      }
   }
   @media (max-width: 648px) {
      .container {
         flex-direction: column;
      }
      .sorterInput {
         margin-top: 1rem;
      }
   }
}

@media (max-width: 1020px) {
   .sorterInput {
      margin-right: 2rem;
   }
}
</style>