<template>
  <section class="hero">
    <img
      class="hero__image"
      :src="topRated.image"
      :alt="topRated.description"
    >
    <div class="details">
      <h1 class="details__title">{{ topRated.title }}</h1>
      <p class="details__description"> {{ topRated.description }}</p>
      <div class="c-rate-price">
        <div class="rate">
          <p class="rate__value"> {{topRated.rating.rate}}</p>
          <img alt="Star icon" class="rate__icon" :src="starIcon">
        </div>
        <h2 class="price">
          R$  <mark>{{topRated.price.toString().replace('.', ',')}}</mark>
        </h2>
      </div>
    </div>
  </section>
</template>

<script setup>
import { reactive } from 'vue';
import productService from '@/services/products';
import starIcon from '@/assets/star.png';

const products = await productService.fetch.getAll();
const topRated = reactive(productService.sort.sortbyRate(products)[0]);

</script>

<style scoped lang="scss">
  @import '@/styles/variables';
  .hero {
    background-color: white;
    position: relative;
    overflow: hidden;
    display: flex;
    align-items: center;
    height: 532px;
    padding-inline: $page-padding;
    &__image {
      max-width: 450px;
      left: $page-padding;
    }
  }
  .details {
    position: absolute;
    max-height: 400px;
    opacity: 95%;
    width: 802px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: black;
    border-radius: 2px;
    margin-left: auto;
    right: $page-padding;
    padding: 28px 40px;
    * {
      color: white;
    }
    &__description {
      margin-top: 15px;
      font-weight: 100;
    }
  }
  .details__title {
    &::after {
      content: '';
      height: 4px;
      width: 40%;
      display: block;
      background-color: white;
      margin-top: 10px;
    }
  }
  .c-rate-price {
    margin-top: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .price {
    font-size: 2.2rem;
    font-weight: $thin;
    mark {
      background-color: transparent;
      font-weight: $regular;
      font-size: 4rem;
    }
  }
  .rate {
    display: flex;
    padding: 13px 10px;
    width: 129px;
    height: 61px;
    align-items: center;
    justify-content: center;
    background-color: white;
    gap: 10px;
    border-radius: 3px;
    &__value {
      font-size: 2.2rem;
      font-weight: bold;
      color: black;
    }
    &__icon {
      width: 35px;
      height: 33px;
      aspect-ratio: 1 / 1;
    }
  }
</style>
