<template>
  <figure class="card">
    <img
      alt=""
      :src="image"
      class="card__image"
    >
    <section class="card-details">
      <div class="c-rate-title">
        <h2 class="card-details__title">{{ title }}</h2>
        <p class="card-details__rate">{{rating.count}} avaliacoes</p>
      </div>
      <div class="c-price-button">
        <p class="card-details__price">R$ <mark>{{ price.toString().replace('.', ',') }}</mark></p>
        <button class="card-details__button">Comprar</button>
      </div>
    </section>
  </figure>
</template>
<script setup>
import { defineProps, reactive } from 'vue';

const props = defineProps({
  product: Object,
});

const {
  title,
  price,
  rating,
  image,
} = reactive(props.product);

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
    width: 290px;
    height: 390px;
    background-color: white;
    justify-content: space-between;
    &__image {
      object-fit: contain;
      width: 100%;
      height: 250px;
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
      color: green;
      font-size: 0.8rem;
    }
    &__price {
      font-weight: $thin;
      mark {
        font-weight: $bold;
        background-color: transparent;
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
