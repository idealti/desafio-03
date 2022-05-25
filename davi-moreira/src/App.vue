<template>
  <div class="body">
    <Home
    v-bind:products='products'
    @emit-categories="fillCategoriesArray"
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
      categoriesSelected: ['mens clothing', 'womens clothing', 'jewelery', 'electronics']
    }
  },
  mounted() {
    products.list().then(response => {
      console.log(response.data)
      this.products = response.data
    })
  },
  methods: {
    fillCategoriesArray(category) {
      if(this.categoriesSelected.includes(category)) {
        for( var i = 0; i < this.categoriesSelected.length; i++){ 
          if ( this.categoriesSelected[i] === category) { 
              this.categoriesSelected.splice(i, 1); 
          }
        }
      }
      else {
        this.categoriesSelected.push(category)
      }
      // console.log(this.categoriesSelected)
    }
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
