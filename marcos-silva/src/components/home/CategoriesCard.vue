<template>
  <a
    @click="handleRedirect(props.category)"
    @keydown="handleRedirect(props.category)"
    data-cy="category_card"
  >
    <div class="category-card">
      <img class="category-card__image" alt="cool" :src="props.image">
      <div class="category-card__title">
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
  .category-card {
    border-radius: 5px 0;
    width: 16vw;
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
  .category-card__title {
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
  @media screen and(max-width: 1900px) {
    .category-card {
      &__title {
        h2 {
          font-size: 1.5rem;
        }
      }
    }
  }

  @media screen and(max-width: 1600px) {
    .category-card {
      width: 19vw;
      &__title {
        h2 {
          font-size: 1.2rem;
        }
      }
    }
  }
</style>
