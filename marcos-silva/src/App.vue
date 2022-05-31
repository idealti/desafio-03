<template>
  <Suspense>
    <template #default>
      <div @click="watchClickOutsideCart" @keydown="watchClickOutsideCart">
        <CartComponent/>
        <div :id="showCart && 'blurry'">
          <MainHeader/>
          <router-view/>
          <footer>Made by Marcos</footer>
        </div>
      </div>
    </template>
    <template #fallback>
      <LoadingComponent />
    </template>
  </Suspense>
</template>

<script setup>
import { useStore } from 'vuex';
import { computed } from 'vue';
import LoadingComponent from '@/components/shared/LoadingComponent.vue';
import MainHeader from '@/components/shared/HeaderComponent.vue';
import CartComponent from './components/shared/CartComponent.vue';

const store = useStore();
const showCart = computed(() => store.getters['cart/showCart']);

// not sure if this is the best approach but hey, it looks pretty
function watchClickOutsideCart(event) {
  if (showCart.value && !event.target.classList.contains('cart_element')) {
    store.commit({
      type: 'cart/hideCart',
    });
  }
}

</script>

<style lang="scss">
@import '@/styles/variables';
@import '@/styles/colors';

* {
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: none;
  text-decoration: none;
  color: $base-white;
}

body {
  font-family: $base-font;
}

main {
  background-color: #F9F9F9;
}

button, mark {
  background-color: transparent;
}

#blurry {
  pointer-events: none;
  transition: 200ms;
  filter: brightness(50%) blur(1px);
  border: 0;
}

footer {
  height: 50px;
  display: grid;
  place-items: center;
}

</style>
