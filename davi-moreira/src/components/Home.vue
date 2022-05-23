<template>
 <div>
   <Header/> 
    <label class="input_container">
      <span class="checkmark">sapn</span>
      <input
      type="checkbox" 
      id="mens clothing" 
      value="mens clothing" 
      v-model="categoriesSelected"
      @click="emitCategories('mens clothing')">
      Men's clothing
    </label>
    <label class="input_container">
      <span class="checkmark"></span>
      <input 
      type="checkbox" 
      id="womens clothing"
      value="womens clothing" 
      v-model="categoriesSelected"
      @click="emitCategories('womens clothing')">
      Women's clothing
    </label>
    <label class="input_container">
      <span class="checkmark"></span>
      <input type="checkbox" 
      id="jewelery" 
      value="jewelery" 
      v-model="categoriesSelected"
      @click="emitCategories('jewelery')">
      Jewelery
    </label>
    <label class="input_container">
      <span class="checkmark"></span>
      <input 
      type="checkbox" 
      id="electronics"
      value="electronics" 
      v-model="categoriesSelected"
      @click="emitCategories('electronics')">
      Electronics
    </label>
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

.input_container {
  position: relative;
  padding-left: 35px;
  margin-bottom: 12px;
  cursor: pointer;
  font-size: 22px;
}

.input_container input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

.checkmark {
  top: 0;
  left: 0;
  height: 25px;
  width: 205px;
  background-color: blue;
  border-radius: 2px;
}

</style>