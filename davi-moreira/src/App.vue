<template>
  <div class="body">
    <Home
    :products='products'
    />
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import Home from './components/Home.vue'
import products from './services/products'

export default defineComponent({
  name: 'App',
  components: {
    Home
  },
  data() {
    return {
      products: [],
    }
  },
  mounted() {
    products.list().then(response => {
      this.products = response.data
      console.log(response.data)
    })
  },
})
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro&display=swap');
* {
  padding: 0;
  margin: 0;
  font-family: 'Source Sans Pro', sans-serif;
}

body {
  width: 100vw;
  height: 100vh;
}
</style>
