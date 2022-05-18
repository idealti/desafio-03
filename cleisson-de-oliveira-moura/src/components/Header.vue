<script setup lang="ts">

const props = defineProps({
   msg: {
      type: String,
      default: 'Header'
   }
})

</script>

<template>
   <div>
      <h1>{{ msg }}</h1>
      <router-link to="/">Home</router-link> | 
      <router-link to="/cart">Cart</router-link>
   </div>
</template>


<style scoped lang="scss">

</style>