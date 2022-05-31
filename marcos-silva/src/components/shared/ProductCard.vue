<template>
  <figure class="card">
    <img
      alt=""
      :src="props.product.image"
      class="card__image"
    >
    <section class="card-details">
      <div class="c-rate-title">
        <h2 class="card-details__title">{{ props.product.title }}</h2>
        <p class="card-details__rate">
          {{ props.product.rating.count }} avaliacoes.
          <mark v-if="props.showRating">{{ props.product.rating.rate }} de 5</mark>
        </p>
      </div>
      <div class="c-price-button">
        <p class="card-details__price">
          R$ <mark>{{ props.product.price.toFixed(2).toString().replace('.', ',') }}</mark>
        </p>
        <button
          class="card-details__button"
          @click="handleButtonClick"
          @keydown="handleButtonClick"
        >
          Comprar
        </button>
      </div>
    </section>
  </figure>
</template>

<script setup>
import { defineProps } from 'vue';
import { useStore } from 'vuex';

const store = useStore();
const props = defineProps({
  product: Object,
  showRating: Boolean,
});

function handleButtonClick() {
  store.commit({
    type: 'cart/addToCart',
    value: props.product,
  });
}
</script>

<style scoped lang="scss">
  @import '@/styles/variables';

  @import '@/styles/colors';
  * {
    color: white;
  }
  .card {
    display: flex;
    flex-direction: column;
    width: 300px;
    background-color: white;
    justify-content: space-between;
    &__image {
      margin-top: auto;
      margin-bottom: 10px;
      object-fit: contain;
      height: 240px;
    }
  }
  .card-details {
    flex-wrap: wrap;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    padding: 10px;
    color: white;
    background-color: black;
    &__title {
      font-weight: $bold;
      max-width: 260px;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    }
    &__rate {
      display: flex;
      justify-content: space-between;
      color: green;
      font-size: 0.8rem;
      mark {
        font-weight: $bold;
      }
    }
    &__price {
      font-weight: $thin;
      mark {
        font-weight: $bold;
        font-size: 2rem;
      }
    }
  }
  .card-details__button {
    padding: 5px 10px;
    font-weight: $bold;
    color: $base-purple;
    background-color: yellow;
    transition: 200ms;
    &:hover {
      background-color: $base-purple;
      color: yellow;
    }
  }
  .c-price-button {
    align-items: center;
    width: 100%;
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
  }
</style>
