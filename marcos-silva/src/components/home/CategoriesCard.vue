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
    filter: brightness(95%);
    display: grid;
    grid-template-rows: 85%;
    grid-template-areas:
    "image"
    "title";
    background-color: white;
    transition: 200ms;
    &__image {
      place-self: center;
      grid-area: image;
      overflow: hidden;
      max-width: 200px;
    }
    &__title {
      display: flex;
      align-items: center;
      justify-content: center;
      grid-area: title;
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
