<script setup lang="ts">
import { onMounted, ref } from 'vue';

import { useRoute } from 'vue-router';

import ProductsAPI from '../services/ProductsAPI';

import { useCart } from '../stores/useCart';
import { storeToRefs } from 'pinia';

import { Product } from '../utilities/types';
import { formatPrice } from '../utilities/format';

import cartIcon from '../assets/shopping-cart.svg';

import Loading from '../components/Loading.vue';
import ItemModal from '../components/modals/ItemModal.vue';

const { addProduct } = useCart()
const { getCartItemsAmount } = storeToRefs(useCart())

// Modal component
const modalIsOpen = ref(false)

// Loading component
const loading = ref(true)

// Fetching product by id
const product = ref({} as Product)
const route = useRoute()
const fetchProduct = async () => {
   const id = route.params.id
   const { data } = await ProductsAPI.getProduct(id)
   product.value = data
   loading.value = false
}
onMounted(() => {
   fetchProduct()
})

// Adding product to cart and openning modal
function handleAddProduct (product: Product) {
   addProduct(product)
   modalIsOpen.value = true
}
</script>

<template>
   <div class="container">
      <div v-if="loading">
         <Loading />
      </div>
      <div v-else class="product">
         <div class="productImage">
            <img :src="product.image" />
         </div>
         <div class="productInfo">
            <h1>{{ product.title }}</h1>
            <p>{{ product.description }}</p>
            <div>
               <h3>{{ formatPrice(product.price) }}</h3>
               <button
                  type="button"
                  @click="handleAddProduct(product)"
               >
                  <img :src="cartIcon" alt="icone de Carrinho de compras">
                  <div>
                     {{getCartItemsAmount[product.id] || 0}}
                  </div>
                  <span>ADD TO CART</span>
               </button>
               <Teleport to="#modal">
                  <Transition name="modal">
                     <ItemModal v-if="modalIsOpen" @close="modalIsOpen = false" />
                  </Transition>
               </Teleport>
            </div>
         </div>
      </div>
   </div>
</template>

<style scoped lang="scss">
.container {
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   height: 100%;
   margin: 0 auto;
   max-width: 1020px;
   padding: 2rem 2rem 5rem;

   background-color: #fff;
   box-shadow: 0 0 30px 10px rgba(0,0,0, 0.5);

   .product {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      padding-top: 8rem;

      .productImage {
         display: flex;
         align-items: center;
         justify-content: center;

         img {
            max-width: 400px;
            max-height: 400px;
            margin: 0 auto 2rem;
         }
      }

      .productInfo {
         text-align: center;

         h1 {
            font-size: 2rem;
            font-weight: 900;
            margin-bottom: 2rem;
         }

         p {
            font-size: 1rem;
            margin-bottom: 2rem;
         }

         div {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
            margin: 2rem 0;

            h3 {
               font-size: 2rem;
               font-weight: 900;
               margin-right: 2rem;
            }

            button {
               display: flex;
               justify-content: center;
               align-items: center;
               margin-left: 2rem;

               height: 3rem;
               border: none;
               border-radius: 0.5rem;
               background-color: #121414;
               color: #fff;
               font-size: 0.8rem;
               font-weight: 600;
               cursor: pointer;
               padding: 0.5rem 1rem;

               &:hover {
                  background: #535a5a;
               }

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
   }
}
.modal-enter-active, .modal-leave-active {
   transition: all 300ms ease;
}
.modal-enter-from, .modal-leave-to {
   opacity: 0;
   transform: scale(1.1);
}
</style>