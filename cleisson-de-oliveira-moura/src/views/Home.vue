<script setup lang="ts">
import { ref } from 'vue'
import api from '../services/api'
import { formatPrice } from '../util/format';
import { Product } from '../types';
import { useCart } from '../stores/useCart';
import cartIcon from '../assets/shopping-cart.svg';

interface CartItemsAmount {
  [key: number]: number;
}

const products = ref([] as Product[]);
const loading = ref(true);
const { cart, addProduct} = useCart();

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

const cartItemsAmount = cart.reduce((sumAmount, product) => {
   sumAmount[product.id] = product.amount;
   return sumAmount;
}, {} as CartItemsAmount)

const handleAddProduct = (id: number) => {
   addProduct(id)
}


</script>

<template>
   <div class="wrapProducts">
      <div v-if="loading">
         Loading...
      </div>
      <div class="product" v-else v-for="product in products" :key="product.id">
         <img class="productImage" :src="product.image" :alt="product.title" />
         <section>
            <h4>{{ product.title }}</h4>
            <div>
               <h6>{{product.rating.count}} avaliações de {{product.rating.rate}}/5</h6>
               <h5>{{ formatPrice(product.price) }}</h5>
            </div>
         </section>
         <p>{{ product.description }}</p>
         <button
            type="button"
            @click="handleAddProduct(product.id)"
         >
            <img :src="cartIcon" alt="icone de Carrinho de compras">
            <div>
               {{cartItemsAmount[product.id] || 0}}
            </div>
            <span>ADICIONAR AO CARRINHO</span>
         </button>
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

      .productImage {
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

      button {
         display: flex;
         justify-content: center;
         align-items: center;

         height: 2rem;
         border: none;
         border-radius: 0.5rem;
         background-color: #121414;
         color: #fff;
         font-size: 0.8rem;
         font-weight: 600;
         cursor: pointer;
         padding: 0.5rem 1rem;

         img {
            height: 1rem;
            margin-right: 0.5rem;
         }

         span {
            margin-left: 1rem;
            font-size: 0.75rem;
            font-weight: 600;
         }
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