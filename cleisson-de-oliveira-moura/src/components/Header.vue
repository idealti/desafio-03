<script setup lang="ts">
import { storeToRefs } from 'pinia';
import cartIcon from '../assets/shopping-cart.svg'
import { useCart } from '../stores/useCart'

const { getCart } = storeToRefs(useCart())
console.log(getCart.value)
const cartSize = getCart.value.length

</script>

<template>
   <header class="container">
      <router-link to="/" class="logo">
         IdealTI
      </router-link>
      <router-link to="/cart" class="cartButton">
         <div>
            <strong>Carrinho</strong>
            <span v-if="cartSize === 1">{{cartSize}} Item</span>
            <span v-else>{{cartSize}} Itens</span>
         </div>
         <img :src="cartIcon" alt="Carrinho de compras">
      </router-link>
   </header>
</template>


<style scoped lang="scss">
.container {
   display: flex;
   justify-content: space-between;
   align-items: center;

   position: fixed;
   width: 100vw;

   padding: 2rem 4rem;
   background-color: #121414;

   .logo {
      color: #fff;
      font-size: 3rem;
      font-weight: 900;
      letter-spacing: 1px;

      transition: opacity 0.2s;

     &:hover {
       opacity: 0.7;
     }
   }

   .cartButton {
      display: flex;
      align-items: center;
      text-decoration: none;

      transition: opacity 0.2s;

      &:hover {
         opacity: 0.7;
      }
   
      div {
         text-align: right;
         margin-right: 10px;
   
         strong {
            display: block;
            color: #fff;
         }
   
         span {
            font-size: 12px;
            color: #999;
         }
      }
      img {
         color: white;
      }
   }
}
</style>