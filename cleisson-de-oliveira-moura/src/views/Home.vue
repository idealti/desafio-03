<script setup lang="ts">
import { ref } from 'vue'
import api from '../services/api'
// import ProductsFilter from '../components/ProductsFilter.vue';
import { formatPrice } from '../util/format';

interface Product {
   id: number;
   title: string;
   price: number;
   description: string;
   image: string;
   category: string;
   rating: {
      rate: number;
      count: number;
   }
}

const products = ref([] as Product[]);
const loading = ref(true)

const fetchProducts = async () => {
   const response = await api.get('/products', {
      headers: {
         'content-type' : 'application/json',
         'accept':'application/json'
      }
   })
   products.value = response.data
   loading.value = false
}

fetchProducts()

</script>

<template>
   <div class="wrapProducts">
      <div v-if="loading">
         Loading...
      </div>
      <div class="product" v-else v-for="product in products" :key="product.id">
         <img :src="product.image" :alt="product.title" />
         <section>
            <h4>{{ product.title }}</h4>
            <div>
               <h6>{{product.rating.count}} avaliações de {{product.rating.rate}}/5</h6>
               <h5>{{ formatPrice(product.price) }}</h5>
            </div>
         </section>
         <p>{{ product.description }}</p>
      </div>
   </div>
</template>


<style scoped lang="scss">
.wrapProducts {
   display: grid;
   grid-template-columns: repeat(3, 1fr);
   padding-top: 8rem;
   padding-bottom: 2rem;
   margin: 0 auto;
   max-width: 1020px;

   .product {
      display: flex;
      flex-direction: column;

      margin: 2rem 2rem 1rem;
      padding: 1rem;
      border-radius: 1rem;

      background-color: #fff;
      box-shadow: 0 0 30px 10px rgba(0,0,0, 0.5);

      img {
         max-height: 150px;
         object-fit: contain;
         margin-bottom: 2rem;
      }

      section {
         h4 {
            font-size: 1rem;
            font-weight: 600;
            margin-bottom: 1rem;
         }

         div {
            display: flex;
            justify-content: space-between;

            margin-bottom: 0.75rem;

            h6 {
               font-size: 0.8rem;
               font-weight: 400;
               color: gray;
            }

            h5 {
               font-size: 1rem;
               font-weight: 600;
               margin-bottom: 0.75rem;
               text-align: right;
            }
         }
      }

      p {
         font-size: 0.8rem;
         margin-bottom: 0.5rem;
         max-height: 5rem;
         overflow-y: scroll;
      }
   }
}

@media (max-width: 768px) {
   .wrapProducts {
      grid-template-columns: repeat(2, 1fr);
   }
}

@media (max-width: 548px) {
   .wrapProducts {
      grid-template-columns: 1fr;
   }
}
</style>