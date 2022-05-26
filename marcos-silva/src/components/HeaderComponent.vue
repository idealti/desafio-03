<template>
  <header class="c-header">
    <section class="header">
      <router-link
        to="/home"
      >
        <img
          alt="Logotipo da ideal store"
          :src="storeLogo"
          class="header__logo"
        >
      </router-link>
      <input
        class="header__search"
        type="text"
        :value="query"
        @keyup.stop.enter="handleSubmit"
      />
      <div
        class="header__cart-link"
      />
    </section>
    <nav class="nav">
      <router-link class="nav__link" to="/men-clothing">Roupa masculina</router-link>
      <router-link class="nav__link" to="/jewelery">Joalheria</router-link>
      <router-link class="nav__link" to="/women-clothing">Roupa feminina</router-link>
      <router-link class="nav__link" to="/electronics">Acessorios</router-link>
    </nav>
  </header>
</template>

<script setup>
import { useStore } from 'vuex';
import { computed } from 'vue';
import storeLogo from '@/assets/store_logo.png';

const store = useStore();
const query = computed(() => store.state.search.query);

function handleSubmit(event) {
  store.commit({
    type: 'search/updateQuery',
    value: event.target.value,
  });
}
</script>

<style scoped lang="scss">
  @import '@/styles/colors';
  @import '@/styles/variables';
  h2 {
    background-color: red;
  }
  .c-header {
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
    }
    &__cart-link {
      margin-left: $cart-link-margin;
      width: $cart-link-width;
      height: 39px;
      border-radius: 50%;
      background-color: $base-white;
    }
  }
  .header__search {
    background-color: $base-white;
    width: $input-search-width;
    border-radius: 50px;
    height: 39px;
    margin-left: auto;
    color: black;
    &:focus {
      outline: none;
      font-size: 1.5rem;
      padding-inline: 40px;
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
    font-weight: $regular;
    font-size: 19px;
    &:hover {
      color: aqua;
    }
  }
</style>
