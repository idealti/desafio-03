<template>
  <div class="card_body">
    <div class="container">
      <img :src='product.image' alt="" class="product_img">
    </div>
    <div class="container">
      <h2 class="product_name"> {{ product.title }} </h2>
    </div>
    <div class="container">
      <p class="product_categ">{{ product.category }}</p>
    </div>
    <div class="container">
      <p class="product_desc">{{ product.description }}</p>
    </div>
    <div class="product_price_container">
      <p class="product_price">${{ product.price }}</p>
    </div>
    <div class="rating_product_container">
      <p class="product_rating">Rating: {{ product.rating.rate }}</p>
    </div>
    <div class="btn_cart_container">
      <button class="btn_cart" @click="$emit(product.id)">Add to cart</button>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Product-card',
  props: {
    product: Object
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
  font-size: 18px;
}

.product_img {
  width: 200px;
}

.product_name {
  font-size: 1.2em;
}

.product_categ {
  font-size: 1.2em;
}

.product_price {
  font-size: 25px;
  font-weight: bold;
  margin-bottom: 5px;
}

.product_rating {
  font-size: 20px;
}

.btn_cart {
  margin-top: 7px;
  width: 95px;
  font-size: 18px;
  border: transparent;
  border-radius: 5px;
  background: #000;
  color: #FFF;
  text-align: center;
  cursor: pointer;
}
</style>