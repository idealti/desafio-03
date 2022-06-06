<script setup lang="ts">
   import { useRouter } from 'vue-router';

   // Defining component emit
   const emit = defineEmits(['close'])

   // Close modal and back to home
   const router = useRouter();
   function backToHome (){
      router.push('/')
      emit('close')
   }
</script>

<template>
   <div class="modalBackground" @click="backToHome">
      <div class="modal" ref="modal">
         <h1>Congratulations, your order was successfully submitted!!</h1>
         <router-link to="/">
            <button @click="backToHome">
               Back to shopping
            </button>
         </router-link>
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

      button {
         height: 3rem;

         border: none;
         border-radius: 0.5rem;
         padding: 1rem 2rem;

         color: #ffffff;
         background-color: #121414;
      }
   }
}
</style>