<template>
  <header class="header">
    <div class="logo_container">
      <h1>SHEIN</h1>
    </div>
    <button class="cart_container">
      <fa icon="cart-shopping" />
    </button>
  </header>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Main-header',
})
</script>

<style scoped>
@import '../styles/colors.css';

.header {
  width: 100vw;
  background-image: linear-gradient(to right, #c0c0c0, #bbb6b6);
  height: 90px;
  display: flex;
  align-items: center;
}

.logo_container {
  font-size: 2em;
  margin-left: auto;
  margin-right: auto;
  letter-spacing: 4px;
}

.cart_container {
  color: var(--text-color);
  margin-right: 1em;
  background-color: transparent;
  border: none;
  font-size: 1.5em;
}

.cart_container:hover {
  color: var(--text-color-hover);
}

@media only screen and (max-width: 310px) {
  .logo_container {
    font-size: 1em;
  }
  
  .header {
    height: 70px;
  }
}
</style>
