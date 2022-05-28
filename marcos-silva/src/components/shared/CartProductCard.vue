<!-- this whole component is too messy -->
<template>
  <li class="cart-product cart_element">
    <img
      class="cart-product__image cart_element"
      :alt="`Image of an ${props.product.title}`"
      :src="props.product.image"
    >
    <h1 class="cart-product__title cart_element">{{ props.product.title }}</h1>
    <p class="cart-product__description cart_element">{{ props.product.description }}</p>
    <div class="cart-product__quantity cart_element">
      <button class="cart_element" @click.stop="increaseQuantity">
        <img alt="Plus icon" class="icon" :src="plusIcon">
      </button>
      <span class="cart_element cart-product__quantity-input">
        {{ props.product.quantity }}
      </span>
      <button class="cart_element" @click.stop="decreaseQuantity">
        <img alt="Minus icon" class="icon" :src="minusIcon">
      </button>
    </div>
    <button class="cart-product__remove cart_element" @click.stop="removeProduct">
      <img alt="Remove item" class="icon" :src="trashCan">
    </button>
    <h3 class="cart-product__subtotal cart_element">
      R$ {{ subtotal }}
    </h3>
  </li>
</template>

<script setup>
import { computed, defineProps } from 'vue';
import { useStore } from 'vuex';
import minusIcon from '@/assets/minus_icon.png';
import plusIcon from '@/assets/plus_icon.png';
import trashCan from '@/assets/trash_can.png';

const props = defineProps({
  product: Object,
});

const store = useStore();
const subtotal = computed(() => (props.product.price * props.product.quantity).toFixed(2));

function increaseQuantity() {
  store.commit({
    type: 'cart/INCREASE_QUANTITY',
    value: props.product.id,
  });
}

function decreaseQuantity() {
  store.commit({
    type: 'cart/DECREASE_QUANTITY',
    value: props.product.id,
  });
}

function removeProduct() {
  store.commit({
    type: 'cart/REMOVE_PRODUCT',
    value: props.product.id,
  });
}

</script>

<style scoped lang="scss">
  .cart-product {
    padding: 10px;
    display: grid;
    grid-template-columns: 20% 55% 10% 10%;
    /*total row height has to be the same size as image height */
    grid-template-rows: 75px 75px;
    column-gap: 10px;
    background-color: white;
    transition: 200ms;
    box-shadow: 3px 3px 2px -3px rgba(0,0,0,0.56);
    &:hover {
      filter: brightness(90%);
    }
    &__image {
      grid-area: 1 / 1 / 2 / 2;
      object-fit: contain;
      width: 100%;
      height: 150px;
    }
    &__description {
      grid-area: 2 / 2 / 3 / 3 ;
      display: flex;
      align-items: center;
      justify-content: center;
      overflow-y: auto;
      font-size: 0.8rem;
    }
    &__title{
      display: flex;
      align-items: center;
      grid-area: 1 / 2 / 2 / 2;
      font-size: 1.2rem
    }
    &__subtotal {
      display: flex;
      align-items: center;
      font-size: 0.8rem;
      justify-content: center;
      grid-area: 2 / 4;
    }
    &__quantity-input {
      pointer-events: none;
      width: 50px;
      background-color: white;
      font-size: 1.5rem;
      text-align: center;
    }
    &__remove {
      width: 100%;
      grid-area: 1 / 4;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
  .cart-product__quantity {
    grid-area: 1 / 3 / 3 / 4;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  .icon {
    max-width: 25px;
    transition: 200ms;
    &:hover {
      transform: scale(1.1);
    }
  }

</style>
