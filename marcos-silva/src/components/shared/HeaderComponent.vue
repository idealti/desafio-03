<template>
  <header class="c-header">
    <section class="header">
      <a
        @click="handleHomeRedirect"
        @keydown="handleHomeRedirect"
      >
        <img
          alt="Logotipo da ideal store"
          :src="storeLogo"
          class="header__logo"
        >
      </a>
      <input
        class="header__search"
        type="text"
        :value="query"
        @keyup.stop.enter="handleSubmit"
        placeholder="Buscar produtos"
      />
      <button
        class="cart-link"
        :key="store.getters['cart/cartSize']"
      >
        <img alt="Cart icon" :src="cartIcon" class="cart-link__icon">
        <!-- set key to force animation reset -->
        <span class="cart-link__counter">
          {{ store.getters['cart/cartSize'] }}
        </span>>
      </button>
    </section>
    <nav class="nav">
      <a
        class="nav__link"
        v-for="(category, index) in categories"
        @click="handleSearchRedirect(category)"
        @keydown="handleSearchRedirect(category)"
        :key="`${category}-${index}`"
      >
        {{ category }}
      </a>
    </nav>
  </header>
</template>

<script setup>
import { useStore } from 'vuex';
import { computed, ref } from 'vue';
import storeLogo from '@/assets/store_logo.png';
import cartIcon from '@/assets/cart_icon.svg';
import { useRouter } from 'vue-router';
import productsService from '@/services/products';

const categories = ref(await productsService.fetch.getCategories());

const store = useStore();
const router = useRouter();
const query = computed(() => store.state['search/query']);

function handleSubmit(event) {
  store.commit({
    type: 'search/updateQuery',
    value: event.target.value,
  });

  router.push('/search');
}
function handleHomeRedirect() {
  store.commit({
    type: 'search/updateQuery',
    value: '',
  });

  router.push('/home');
}
function handleSearchRedirect(category) {
  store.commit({
    type: 'search/updateCategory',
    value: category,
  });

  router.push('/search');
}
</script>

<style scoped lang="scss">
  @import '@/styles/colors';
  @import '@/styles/variables';
  @import '@/styles/animations';
  .c-header {
    z-index: 2;
    position: sticky;
    top: 0;
    width: 100%;
    padding-inline: $page-padding;
    height: $header-height;
    justify-content: center;
    display: flex;
    flex-direction: column;
    background-color: black;
  }
  .header {
    align-items: center;
    display: flex;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    &__logo {
      width: 294px;
      cursor: pointer;
    }
  }
  .header__search {
    background-color: $base-white;
    width: $input-search-width;
    border-radius: 50px;
    height: 39px;
    margin-left: auto;
    padding-inline: 40px;
    color: black;
    font-size: 1.2rem;
    &:focus {
      outline: none;
    }
  }
  .cart-link {
    -webkit-animation: wobble-hor-bottom 0.8s both;
    animation: wobble-hor-bottom 0.8s both;
    position: relative;
    margin-left: $cart-link-margin;
    border-radius: 50%;
    background-color: transparent;
    &__counter {
      display: flex;
      justify-content: center;
      align-items: center;
      font-weight: $bold;
      text-align: center;
      position: absolute;
      width: 23px;
      height: 23px;
      border-radius: 50%;
      top: 0;
      right: -5px;
      background-color: white;
      border: 2px solid green;
      z-index: 2;
    }
  }
  .nav {
    display: flex;
    margin-top: 5px;
    margin-left: auto;
    justify-content: space-between;
    width: $input-search-width;
    margin-right: $cart-link-margin + $cart-link-width;
  }
  .nav__link {
    &::first-letter {
      text-transform: uppercase;
    }
    font-weight: $extra-thin;
    font-size: 1.2rem;
    color: white;
    &:hover {
      color: aqua;
    }
  }
</style>
