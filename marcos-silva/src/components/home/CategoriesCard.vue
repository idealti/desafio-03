<template>
  <a
    @click="handleRedirect(props.category)"
    @keydown="handleRedirect(props.category)"
  >
    <div class="suggested-card">
      <img class="suggested-card__image" alt="cool" :src="props.image">
      <div class="suggested-card__title">
        <h2>{{ props.category }}</h2>
      </div>
    </div>
  </a>
</template>

<script setup>
import { defineProps } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';

const router = useRouter();
const store = useStore();

const props = defineProps({
  category: String,
  image: String,
  route: String,
});

function handleRedirect(category) {
  store.commit({
    type: 'search/updateCategory',
    value: category,
  });

  router.push('/search');
}
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
      object-fit: contain;
      width: 100%;
      height: 300px;
    }
    &:hover {
      transform: scale(1.02);
      filter: brightness(100%);
    }
  }
  .suggested-card__title {
    h2 {
      &::first-letter {
        text-transform: uppercase;
      }
      text-align: center;
      font-style: italic;
      font-weight: $bold;
      color: white;
      font-size: 2rem;
    }
    margin-top: auto;
    display: flex;
    width: 100%;
    height: 82px;
    align-items: center;
    justify-content: center;
    background-color: black;

  }
</style>
