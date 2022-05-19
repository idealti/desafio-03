<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/carrinho"><img :src="cartIcon" alt="Carrinho" /></router-link>
  </nav>
</template>

<script>
export default {
  name: "Header",

  data(){
    return{
       cartIcon:"/assets/cart.svg"
    }
  }
 
};
</script>

<style scoped>
</style>