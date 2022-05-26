<template>
    <div>
        <loading-component v-if="state.categoryList.length === 0"/>
        <div v-else>
            <label  for="categoria">Categoria: </label>
            <select name="categoria" id="categoria" v-model="state.selectedCategory">
                <option value="">Selecione</option>
                <option value="tudo">Tudo</option>
                <option :value="category"
                    v-for="category in state.categoryList" :key="category"
                > {{ category }} </option>
            </select>
        </div>
    </div>
</template>

<script>
import { reactive } from '@vue/reactivity'
import { onMounted, watch } from '@vue/runtime-core'
import LoadingComponent from './LoadingComponent.vue'
import { useStore } from 'vuex'
import { types } from '../store/mutationTypes'
export default {
  name: 'SelectCategoryComponent',
  components: {
    LoadingComponent
  },
  setup () {
    const state = reactive({
      categoryList: [],
      selectedCategory: null
    })
    

    const store = useStore()
    const { ADD_CATEGORY } = types

    async function getAllCategories () {
      const req = await fetch('https://fakestoreapi.com/products/categories')
      const res = await req.json()
      state.categoryList = [...res]
    }

    function sendOpt (category) { // send option
      store.commit(ADD_CATEGORY, category)
    }
    watch(
      () => state.selectedCategory,
      () => {
        sendOpt(state.selectedCategory)
      }
    )
    onMounted(() => {
      getAllCategories()
    })
    
    return {
      state,
      sendOpt
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
