<script setup lang="ts">
import { onMounted, ref } from 'vue'
import api from '../services/api'
import { formatPrice } from '../util/format';

interface Products {
   id: number;
   title: string;
   price: number;
   description: string;
   image: string;
}

const products = ref([] as Products[]);

async function fetchProducts(){
   const response = await api.get('/products', {
      headers: {
         'content-type' : 'application/json',
         'accept':'application/json'
      }
   })
   products.value = response.data
}

onMounted(fetchProducts)

const count = ref(0)
</script>

<template>
   <div v-for="product in products" :key="product.id">
      <h4>{{ product.title }}</h4>
      <p>{{ formatPrice(product.price) }}</p>
      <img :src="product.image" :alt="product.title" />
   </div>

  <button type="button" @click="count++">count is: {{ formatPrice(count) }}</button>
</template>


<style scoped lang="scss">
a {
  color: #42b983;
}

img {
   max-height: 100px;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}
</style>