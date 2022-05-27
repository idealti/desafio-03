<template>
  <section class="best-sellers">
    <h1 class="best-sellers__title">Campeões de venda.</h1>
    <div class="c-best-seller-cards">
      <product-card
        v-for="product in topEightProducts"
        :key="product.id + product.title"
        :product="product"
      />
    </div>
  </section>
</template>

<script setup>
import productService from '@/services/products';
import ProductCard from '@/components/shared/ProductCard.vue';

const products = await productService.fetch.getAll();
const topEightProducts = productService.sort.sortByRateCount(products).slice(0, 8);
</script>

<style scoped lang="scss">
  @import '@/styles/colors';
  @import '@/styles/variables';
  .best-sellers {
    padding: 2.2rem $page-padding;
    background-color: $base-purple;
    width: 100%;
    &__title {
      color: white;
      margin-bottom: 2rem;
      text-align: center;
      font-size: 2.2rem;
      font-weight: $regular;
    }
  }

  .c-best-seller-cards {
    display: flex;
    flex-wrap: wrap;
    gap: 10px
  }
</style>
