<template>
  <main class="c-search-result">
    <loading-component v-if="isFetching"/>
    <section v-else class="search-result">
      <div class="search-result__details">
        <h1 class="search-result__query" v-if="query == ''">
          Mostrando todos os produtos<b v-if="category !== ''">: {{ category }}.</b>
        </h1>
        <h1 v-else class="search-result__query">
          Resultados de <mark>{{ query }}</mark> em:
          <mark>{{ category ? `${category}` : 'all'}}.</mark>
        </h1>
        <h3 class="search-result__quantity">
          Encontramos {{ productsList.length }} produtos.
        </h3>
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
          v-for="product in productsList"
          :key="product.id + product.title"
          :product="product"
          :showRating="true"
        />
      </div>
    </section>
  </main>
</template>

<script setup>
import LoadingComponent from '@/components/shared/LoadingComponent.vue';
import { useStore } from 'vuex';
import { computed } from 'vue';
import ProductCard from '@/components/shared/ProductCard.vue';
import useProducts from '@/hooks/useProducts';

const store = useStore();
const category = computed(() => store.getters['search/getCategory']);
const query = computed(() => store.getters['search/getQuery']);

const { productsList, productsController, isFetching } = await useProducts();

function sortProducts(event) {
  switch (event.target.value) {
    case 'priceAsc':
      productsController.sortByPrice();
      break;
    case 'priceDesc':
      productsController.sortByPrice('desc');
      break;
    case 'rateAsc':
      productsController.sortbyRate();
      break;
    case 'rateDesc':
      productsController.sortbyRate('desc');
      break;
    default:
      break;
  }
}
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

  @media screen and (max-width: 1600px) {
    .search-result{
      padding-inline: $desktop-small-padding;
    }
  }
</style>
