<template>
  <div class="body">
    <Home
    @emit-categories="fillCategoriesArray"
    />
  </div>
</template>

<script>
import { defineComponent, onMounted } from 'vue'
import Home from './components/Home.vue'
import api from './services/api'

export default defineComponent({
  name: 'App',
  components: {
    Home
  },
  data() {
    return {
      categoriesSelected: []
    }
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
      console.log(this.categoriesSelected)
    }
  },
  setup() {
    let products
    const fetchProducts = () =>
      api.get('https://fakestoreapi.com/products').then(response => {
        products = response.data
        console.log(products)
      })
    onMounted(fetchProducts)
  }
})
</script>

<style>
body {
  margin: 0;
}
</style>
