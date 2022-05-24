<script setup>
import { useStore } from 'vuex';
import { computed } from 'vue';
import storeLogo from '../assets/store_logo.png';

const store = useStore();
const query = computed(() => store.state.search.query);

function handleSubmit(event) {
  store.commit({
    type: 'search/updateQuery',
    value: event.target.value,
  });
}
</script>

<template>
  <header class="c-header">
    <section class="header">
      <img
        alt="Logotipo da ideal store"
        :src="storeLogo"
        class="header__logo"
      >
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
      <router-link class="nav__link" to="/home">Joalheria</router-link>
      <router-link class="nav__link" to="/home">Roupa masculina</router-link>
      <router-link class="nav__link" to="/home">Roupa feminina</router-link>
      <router-link class="nav__link" to="/home">Acessorios</router-link>
    </nav>
  </header>
</template>

<style scoped lang="scss">
  @import '../styles/colors';
  @import '../styles/variables';
  .c-header {
    padding-inline: 351px;
    height: 145px;
    justify-content: center;
    display: flex;
    flex-direction: column;
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
      background-color: $input-color;
    }
  }
  .header__search {
    background-color: $input-color;
    width: $input-search-width;
    border-radius: 50px;
    height: 39px;
    margin-left: auto;
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
