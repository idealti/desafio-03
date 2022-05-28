<template>
  <main class="c-search-result">
    <loading-component v-if="isLoading"/>
    <section v-else class="search-result">
      <div class="search-result__details" v-if="products !== null">
        <h1 class="search-result__query" v-if="query == ''">
          Mostrando todos os produtos<b v-if="category !== ''">: {{category}}.</b>
        </h1>
        <h1 v-else class="search-result__query">
          Resultados de <mark>{{ query }}</mark> em:
          <mark>{{ category ? `${category}` : 'all'}}.</mark>
        </h1>
        <h3 class="search-result__quantity">Encontramos {{ products.length }} produtos.</h3>
        <label for="sortingMethod">
          Ordernar por:
          <select
            class="search-result__sorting"
            name="sortingMethod"
            @change.prevent="sortProducts"
          >
            <option value="priceAsc">menor preço</option>
            <option value="priceDesc">maior preço</option>
            <option value="rateDesc">melhores notas</option>
            <option value="rateAsc">piores notas</option>
          </select>
        </label>
      </div>
      <div class="search-result__c-products">
        <product-card
          v-for="product in products"
          :key="product.id"
          :product="product"
          :showRating="true"
        />
      </div>
    </section>
  </main>
</template>

<script setup>
import { useStore } from 'vuex';
import productsServices from '@/services/products';
import LoadingComponent from '@/components/shared/LoadingComponent.vue';
import ProductCard from '@/components/shared/ProductCard.vue';

import {
  watch,
  computed,
  onMounted,
  ref,
} from 'vue';

const store = useStore();
const category = computed(() => store.getters['search/getCategory']);
const query = computed(() => store.getters['search/getQuery']);

const products = ref(null);
const isLoading = ref(false);

async function updateFoundProducts() {
  isLoading.value = true;
  let allProducts;
  if (category.value === '') {
    allProducts = await productsServices.fetch.getAll();
  } else {
    allProducts = await productsServices.fetch.getProductFromCategory(category.value);
  }
  products.value = productsServices.sort
    .sortByQuery(allProducts, store.getters['search/getQuery'])
    .sort((a, b) => a.price - b.price);
  isLoading.value = false;
}

function sortProducts(event) {
  switch (event.target.value) {
    case 'priceAsc':
      products.value.sort((a, b) => a.price - b.price);
      break;
    case 'priceDesc':
      products.value.sort((a, b) => b.price - a.price);
      break;
    case 'rateAsc':
      products.value.sort((a, b) => a.rating.rate - b.rating.rate);
      break;
    case 'rateDesc':
      products.value.sort((a, b) => b.rating.rate - a.rating.rate);
      break;
    default:
      break;
  }
}

watch([category, query], async () => {
  updateFoundProducts();
});

onMounted(async () => {
  updateFoundProducts();
});
</script>

<style scoped lang="scss">
  @import '@/styles/variables';

  .search-result {
    padding: 30px  $desktop-big-padding;
    min-height: 80vh;
    &__c-products {
      display: flex;
      flex-wrap: wrap;
      gap: 5px;
      justify-content: center;
    }
    &__query {
      font-weight: $thin;
      flex-basis: 2;
      width: 100%;
      mark {
        font-weight: $bold;
      }
    }
    &__quantity {
      font-weight: $thin;
    }
  }
  .search-result__details {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-bottom: 35px;
  }
  .search-result__sorting {
    border-radius: 1px;
    height: 30px;
  }

  @media screen and (max-width: 1900px) {
    .search-result{
      padding-inline: $desktop-medium-padding;
    }
  }
</style>
