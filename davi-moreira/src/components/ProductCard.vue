<template>
  <div class="card_body">
    <div class="container">
      <img src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" alt="" class="product_img">
    </div>
    <div class="container">
      <h2 class="product_name">Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops</h2>
    </div>
    <div class="container">
      <p class="product_desc">Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday</p>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Product-card',
  props: {
    
  },
})
</script>

<style scoped>
@import '../styles/colors.css';

.card_body {
  display: inline-block;
  border: solid 0.1px black;
  border-radius: 20px;  
  padding: 15px;
  margin-right: 1em;
  margin-bottom: 1em;
  width: 18em;
}

.container {
  display: flex;
  justify-content: center;
  text-align: center;
  margin-bottom: 10px;
  font-size: 17px;
}

.product_img {
  width: 200px;
}

.product_name {
  font-size: 1em;
}
</style>