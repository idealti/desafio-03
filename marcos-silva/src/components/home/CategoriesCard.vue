<template>
  <router-link :to="category.replace(' ', '-')">
    <div class="suggested-card">
      <img class="suggested-card__image" alt="cool" :src="props.image">
      <h1 class="suggested-card__title">{{ props.category }}</h1>
    </div>
  </router-link>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  category: String,
  image: String,
});
</script>

<style scoped lang="scss">
  @import '@/styles/variables';
  .suggested-card {
    border-radius: 5px 0;
    width: 290px;
    height: 428px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    filter: brightness(95%);
    background-color: white;
    transition: 200ms;
    flex-wrap: wrap;
    &__image {
      flex-basis: 2;
      place-self: center;
      grid-area: image;
      overflow: hidden;
      margin-inline: auto;
      max-width: 200px;
    }
    &__title {
      margin-top: auto;
      display: flex;
      width: 100%;
      height: 82px;
      align-items: center;
      justify-content: center;
      background-color: black;
      color: white;
      text-align: center;
      font-style: italic;
      font-weight: $bold;
      font-size: 2rem;
    }
    &:hover {
      transform: scale(1.02);
      filter: brightness(100%);
    }
  }
</style>
