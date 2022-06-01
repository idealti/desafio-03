<script setup lang="ts">


let localStorageContent: any[];

localStorageContent = JSON.parse(localStorage.getItem("products")!);

</script>

<template>
  <div class="cart">
    <h1>Seu Carrinho:</h1>
    <div v-if="localStorageContent === null" class="cartEmpty">
      <h2>Ainda não a itens no carrinho</h2>
    </div>

    <div v-else class="cartBox" v-for="product in localStorageContent" :key="product.id">
      <div class="cartImage">
        <img :src="product.image" />
      </div>
      <div>{{ product.title }}
      </div>
      <div>R$ {{ product.price }}</div>

     
    </div>
    
  </div>
</template>

<style>

  .cart {
   
    min-height: 35rem;
  } 

  .cartBox {
    margin: 0 auto;
    width: 90%;
    display: flex;
  }

  .cartBox div { 
    width: 20rem;
    border-top: 1px solid rgb(207, 207, 255);
  }

  .cartImage {
    width: 15rem;
  }

  .cartImage img {
    max-width: 50%;
  }

  

</style>