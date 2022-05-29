<template>
  <section class="best-sellers">
    <h1 class="best-sellers__title">Campeões de venda.</h1>
    <div class="best-sellers__c-cards">
      <product-card
        v-for="product in topEightProducts"
        :key="product.id + product.title"
        :product="product"
      />
    </div>
  </section>
</template>

<script setup>
import ProductCard from '@/components/shared/ProductCard.vue';
import useProducts from '@/hooks/useProducts';
import { reactive } from 'vue';

const [, methods] = await useProducts(8);
const topEightProducts = reactive(methods.sortByRateCount());

</script>

<style scoped lang="scss">
  @import '@/styles/colors';
  @import '@/styles/variables';

  .best-sellers {
    padding: 2.2rem $desktop-big-padding;
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
  .best-sellers__c-cards {
    display: flex;
    flex-wrap: wrap;
    flex-basis: 0;
    justify-content: center;
    gap: 5px;
  }
  @media screen and (max-width: 1900px) {
    .best-sellers {
      padding-inline: $desktop-medium-padding;
    }
  }
  @media screen and (max-width: 1600px) {
    .best-sellers {
      padding-inline: $desktop-small-padding;
    }
  }
</style>
