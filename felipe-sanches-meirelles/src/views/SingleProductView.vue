<script>
import { defineComponent } from "@vue/runtime-core";
import {useProductsStore} from '../stores/product';


export default defineComponent({
  name: 'singleProductView',
  setup() {
    const store = useProductsStore();
    const product = store.selectedProduct;
    const btnValue = store.cart.some(i => i.data.id === product.id) ? 'add one more to cart' : 'add product to cart';
    const handleClick = () => {
      if(btnValue === 'add one more to cart') {
        store.insertMoreQuantity({data: product, quantity: 1})
        store.updatePrice()
      } else {
        store.addToCart({data: product, quantity: 1})
        store.updatePrice()
      }
    }
    return { product, handleClick, btnValue }
  }
})
</script>

<template>
  <div>
    <p>{{product.title}}</p>
    <p>{{product.description}}</p>
    <img v-bind:src="product.image" alt="product.title">
    <p>$ {{product.price}}</p>
    <p>Rate: {{product.rating.rate}}</p>
    <RouterLink to="/cart">
    <button type="button" v-on:click="handleClick">{{btnValue}}</button>
    </RouterLink>

  </div>
</template>
