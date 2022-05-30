<script>
import './SingleProductView.css';
import { defineComponent } from "@vue/runtime-core";
import {useProductsStore} from '../stores/product';


export default defineComponent({
  name: 'singleProductView',
  setup() {
    const store = useProductsStore();
    const product = store.selectedProduct;
    const btnValue = store.cart.some(i => i.data.id === product.id) ? 'Add one more to cart' : 'Add to cart';
    const handleClick = () => {
      if(btnValue === 'Add one more to cart') {
        store.insertMoreQuantity({data: product, quantity: 1});
        store.updatePrice();
      } else {
        store.addToCart({data: product, quantity: 1});
        store.updatePrice();
      }
    }
    return { product, handleClick, btnValue };
  }
})
</script>

<template>
  <div class="single-element-father">
    <img v-bind:src="product.image" alt="product.title">
    <div class="element-infos">
      <h2>{{product.title}}</h2>
      <p>{{product.description}}</p>
      <h3>$ {{product.price}}</h3>
      <p>Rate: {{product.rating.rate}}</p>
      <RouterLink to="/cart">
        <button type="button" v-on:click="handleClick" class="button-insert">{{btnValue}}</button>
      </RouterLink>
    </div>
  </div>
</template>