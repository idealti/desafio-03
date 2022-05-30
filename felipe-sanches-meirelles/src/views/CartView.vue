<script>
import './cartView.css';
import { defineComponent } from "@vue/runtime-core";
import {useProductsStore} from '../stores/product';
import { storeToRefs } from "pinia";

export default defineComponent({
  name: 'cartView',
  setup() {
    const store = useProductsStore();
    const {getCart, getPrice} = storeToRefs(store);
    const handleClick = (id) => {
      store.removeToCart({data: {id}});
      store.updatePrice();
    }
    const insertMore = (obj) => {
      store.insertMoreQuantity(obj);
      store.updatePrice();
    }
    const insertLess = (obj) => {
      store.insertLessQuantity(obj);
      store.updatePrice();
    }
    return {getPrice, handleClick, getCart, insertMore, insertLess };
  }
})
</script>

<template>
  <div class="total">
    <h2>Total: $ {{Number(getPrice).toFixed(2)}}</h2>
  </div>
  <div class="cart-father">
    <div v-if="getCart.length === 0">
      <h3>
      Empty
      </h3>
      </div>
    <div v-for="product in getCart" v-bind:key="product.data.title" v-else class="cart-children">
      <img v-bind:src="product.data.image" alt="product.title">
      <div class="cart-description">
        <h3>{{product.data.title}}</h3>
        <p>{{product.data.description}}</p>
      </div>
      <h4>$ {{product.data.price}}</h4>
      <div class="btns">
        <button type="button" v-on:click="handleClick(product.data.id)" class="cart-btn">Remove</button>
        <div class="toggle-quantity">
          <button type="button" v-on:click="insertLess(product)" class="cart-btn"> - </button>
          <h4>{{product.quantity}}</h4>
          <button type="button" v-on:click="insertMore(product)" class="cart-btn"> + </button>
        </div>
      </div>
    </div>
  </div>
</template>