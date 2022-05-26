<script setup lang="ts">
import { onClickOutside } from '@vueuse/core';
import { ref } from 'vue';

const emit = defineEmits(['close'])
const modal = ref(null)

onClickOutside(modal, () => {
  emit('close')
})
</script>

<template>
      <div class="modalBackground">
         <div class="modal" ref="modal">
            <h1>Congratulations, the item was successfully added to cart!!</h1>
            <div>
               <button @click="$emit('close')">
                  Back to shopping
               </button>
               <router-link to="/cart" class="goToCartButton">
                  Go to cart
               </router-link>
            </div>
         </div>
      </div>
</template>

<style scoped lang="scss">
.modalBackground {
   position: fixed;
   top: 0;
   left: 0;
   width: 100vw;
   height: 100vh;
   background-color: rgba(0, 0, 0, 0.5);

   display: flex;
   justify-content: center;
   align-items: center;
   z-index: 10;

   .modal {
      position: relative;

      background-color: #fff;
      padding: 3rem 6rem;
      border-radius: 0.5rem;
      box-shadow: 0 0 30px 10px rgba(0,0,0, 0.1);

      h1 {
         font-size: 2rem;
         font-weight: 900;
         margin-bottom: 2rem;
      }
      
      div {
         display: flex;
         justify-content: space-around;
         align-items: center;

         button {
            height: 3rem;
            font-size: 1rem;
   
            border: none;
            border-radius: 0.5rem;
            padding: 1rem 2rem;
   
            color: #ffffff;
            background-color: #121414;
         }
   
         .goToCartButton {
            height: 3rem;
            font-size: 1rem;
   
            border: none;
            border-radius: 0.5rem;
            padding: 1rem 2rem;
   
            color: #ffffff;
            background-color: #121414;
         }
      }
   }
}

@media (max-width: 512px) {
   .modal {
      div {
         flex-direction: column;

         button {
            margin-bottom: 1rem;
         }
      }
   }
}
</style>