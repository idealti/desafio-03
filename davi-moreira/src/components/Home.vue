<template>
  <div class="home">
    <Header/>
    <div class="grid_container">
        <section class="categories_section">
            <label class="input_container">
              <input
              type="checkbox" checked
              id="men's clothing"
              value="men's clothing"
              v-model="categoriesSelected"
              >
              Men's clothing
            </label>
            <label class="input_container">
              <input
              type="checkbox" checked
              id="women's clothing"
              value="women's clothing"
              v-model="categoriesSelected"
              >
              Women's clothing
            </label>
            <label class="input_container">
              <input
              type="checkbox"  checked
              id="jewelery"
              value="jewelery"
              v-model="categoriesSelected"
              >
              Jewelery
            </label>
            <label class="input_container">
              <input
              type="checkbox" checked
              id="electronics"
              value="electronics"
              v-model="categoriesSelected"
              v-on:click="matchCategoryAndProduct"
              >
              Electronics
            </label>
        </section>
        <section class="products_section">
          <ProductCard
          v-for="product in productsInCategorySelected"
          v-bind:product='product'
          :key="product.id"/>
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
  data() {
    return {
      categoriesSelected: ["men's clothing", "women's clothing", 'jewelery', 'electronics'],
      productsInCategorySelected: [],
    }
  },
  props: {
    products: Object,
  },
  methods: {
    //  fillCategoriesArray(category) {
    //    if(this.categoriesSelected.includes(category)) {
    //      for( var i = 0; i < this.categoriesSelected.length; i++){
    //        if ( this.categoriesSelected[i] === category) {
    //            this.categoriesSelected.splice(i, 1);
    //        }
    //      }
    //    }
    //    else {
    //      this.categoriesSelected.push(category)
    //    }
    //  this.products.forEach(this.checkCategory)
    //  },
    matchCategoryAndProduct(product) {
     
        if(this.categoriesSelected.includes(product.category) && !this.productsInCategorySelected.includes(product.category)) {
          this.productsInCategorySelected.push(product)
        }
      
    }
  }
})
// se o product.category esta na categoriesSelected empurre-o p a productsInCategorySelected
// caso
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