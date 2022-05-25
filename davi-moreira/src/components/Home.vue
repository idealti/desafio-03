<template>
  <div class="home">
    <Header/>
    <div class="grid_container">
        <section class="categories_section">
            <label class="input_container">
              <input
              type="checkbox" checked
              id="mens clothing" 
              value="mens clothing" 
              v-model="categoriesSelected"
              @click="emitCategories('mens clothing')">
              Men's clothing
            </label>
            <label class="input_container">
              <input 
              type="checkbox" checked
              id="womens clothing"
              value="womens clothing" 
              v-model="categoriesSelected"
              @click="emitCategories('womens clothing')">
              Women's clothing
            </label>
            <label class="input_container">
              <input 
              type="checkbox"  checked
              id="jewelery" 
              value="jewelery" 
              v-model="categoriesSelected"
              @click="emitCategories('jewelery')">
              Jewelery
            </label>
            <label class="input_container">
              <input 
              type="checkbox" checked
              id="electronics"
              value="electronics" 
              v-model="categoriesSelected"
              @click="emitCategories('electronics')">
              Electronics
            </label>
        </section>
          <section class="products_section">
            <ProductCard :products='products' v-for="product in product" :key="product"/>
          </section>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import Header from '../components/Header.vue'
import ProductCard from '../components/ProductCard.vue'

export default defineComponent( {
  name: 'Main-home',
  components: {
    Header,
    ProductCard
  },
  props: {
    products: Array
  },
  methods: {
    emitCategories(category) {
      this.$emit('emit-categories',category)
       console.log(this.products)
    }
  }
})
</script>

<style scoped>
@import '../styles/colors.css';

.home {
  width: 100vw;
}

.grid_container {
  display: grid;
  grid-template-columns: 1fr 3fr;
  margin-top: 19px;
}

 
.input_container {
  display: block;
  margin: auto 15px 32px 15px;
  font-size: 22px;
  cursor: pointer;
}

.input_container input {
  width: 20px;
  height: 20px;
}

.products_section {
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(3, 1fr);
} 

@media only screen and (max-width: 1135px) {
  .grid_container {
    display: block;
    margin-left: 1em;
  }

  .categories_section {
    display: flex;
    flex-wrap: wrap
  }

  .products_section {
    display: flex;
    justify-content: center;
    flex-wrap: wrap
  } 
}


</style>