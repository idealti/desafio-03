<template>
  <div>
    <Header/>
    <div class="grid_container">
        <section class="left_side_section">
            <label class="input_container">
              <input
              type="checkbox" 
              id="mens clothing" 
              value="mens clothing" 
              v-model="categoriesSelected"
              @click="emitCategories('mens clothing')">
              Men's clothing
            </label>
            <label class="input_container">
              <input 
              type="checkbox" 
              id="womens clothing"
              value="womens clothing" 
              v-model="categoriesSelected"
              @click="emitCategories('womens clothing')">
              Women's clothing
            </label>
            <label class="input_container">
              <input type="checkbox" 
              id="jewelery" 
              value="jewelery" 
              v-model="categoriesSelected"
              @click="emitCategories('jewelery')">
              Jewelery
            </label>
            <label class="input_container">
              <input 
              type="checkbox" 
              id="electronics"
              value="electronics" 
              v-model="categoriesSelected"
              @click="emitCategories('electronics')">
              Electronics
            </label>
        </section> 
        <section class="products_section">
          <div>
            ...
          </div>
          <div>
            ola davi
          </div>
          <div>
            ...
          </div>
        </section>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import Header from '../components/Header.vue'

export default defineComponent({
  name: 'Main-home',
  components: {
    Header
  },
  methods: {
    emitCategories(category) {
      this.$emit('emit-categories',category)
    }
  }
})
</script>

<style scoped>
@import '../styles/colors.css';

.grid_container {
  display: grid;
  grid-template-columns: 1fr 2fr;
  margin-top: 9px;
}

 .left_side_section {
  display: grid;
} 

.input_container {
  padding-left: 35px;
  margin-bottom: 12px;
  font-size: 22px;
  cursor: pointer;
}

.input_container input {
  width: 20px;
  height: 20px;
}

</style>