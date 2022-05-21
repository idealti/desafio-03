<script>
import { defineComponent } from "@vue/runtime-core";
import {useProductsStore} from '../stores/product';
import { storeToRefs } from "pinia";

export default defineComponent({
  name: 'cartView',
  setup() {
    const store = useProductsStore();
    const {getCart, getPrice} = storeToRefs(store)
    const handleClick = (id) => {
      store.removeToCart({data: {id}})
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
    return {getPrice, handleClick, getCart, insertMore, insertLess }
  }
})
</script>

<template>
  <div>
    <div v-if="getCart.length === 0">Empty</div>
    <div v-for="product in getCart" v-bind:key="product.data.title" v-else>
      <p>{{product.data.title}}</p>
      <img v-bind:src="product.data.image" alt="product.title">
      <p>{{product.data.price}}</p>
      <button type="button" v-on:click="handleClick(product.data.id)">remove to cart</button>
      <button type="button" v-on:click="insertLess(product)"> - </button>
      <p>{{product.quantity}}</p>
      <button type="button" v-on:click="insertMore(product)"> + </button>
    </div>
    <p>Total: $ {{getPrice}}</p>
  </div>
</template>
