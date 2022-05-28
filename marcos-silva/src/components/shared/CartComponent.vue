<template>
  <transition name="cart">
    <div v-if="showCart" class="cart" id="cart">
      <h2 class="cart__total">Total: R$ {{ totalPrice }}</h2>
      <button @click="hideCart">
        <img alt="X icon" class="cart__close" :src="closeIcon">
      </button>
      <transition-group name="cart_item" tag="ul">
        <cart-product-card
          v-for="product in cart"
          :key="product.id + product.title"
          :product="product"
        />
      </transition-group>
    </div>
  </transition>
</template>
<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';
import closeIcon from '@/assets/close_icon.png';
import CartProductCard from './CartProductCard.vue';

const store = useStore();
const showCart = computed(() => store.getters['cart/showCart']);
const cart = computed(() => store.getters['cart/products']);
const totalPrice = computed(() => store.getters['cart/totalPrice']
  .toFixed(2)
  .toString()
  .replace('.', ','));

function hideCart() {
  store.commit({
    type: 'cart/TOGGLE_CART',
  });
}

</script>
<style scoped lang="scss">
  .cart {
    top: 0;
    right: 0;
    position: fixed;
    width: 50vw;
    display: flex;
    flex-direction: column;
    gap: 10px;
    overflow-y: scroll;
    height: 100vh;
    padding-bottom: 80px;
    background-color: white;
    z-index: 100;
    &__total {
      position: fixed;
      padding: 5px;
      border-radius: 2px;
      background-color: green;
      font-size: 2rem;
      bottom: 0;
      width: 50%;
      color: white;
      text-align: center;
      z-index: 1000;
    }
    &__close {
      width: 30px;
    }
  }
  .cart-enter-active,
  .cart-leave-active {
    transition: 200ms ease-in;
  }
  .cart-leave-active {
    position: absolute;
  }
  .cart-enter-from {
    width: 0;
    opacity: 0.5;
  }
  .cart-leave-to {
    width: 0;
  }
  /* cart item */
  .cart_item-leave-active {
    position: absolute;
  }
  .cart_item-leave-from {
    opacity: 1;
  }
  .cart_item-leave-to {
    opacity: 0;
    transform: translateX(-50px);
  }
  .cart_item-move {
    transform: 1s ease;
  }
</style>
