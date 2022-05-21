<template>
    <div>
        <loading-component v-if="state.categoryList.length === 0"/>
        <div v-else>
            <label  for="categoria">Categoria: </label>
            <select name="categoria" id="categoria">
                <option value="">Selecione</option>
                <option :value="category" @click.prevent="sendOpt(category)"
                    v-for="category in state.categoryList" :key="category"
                > {{ category }} </option>
            </select>
        </div>
    </div>
</template>

<script>
import { reactive } from '@vue/reactivity'
import { onMounted } from '@vue/runtime-core'
import LoadingComponent from './LoadingComponent.vue'
import { useStore } from 'vuex'
export default {
  name: 'SelectCategoryComponent',
  components: {
    LoadingComponent
  },
  setup () {
    const state = reactive({
      categoryList: []
    })

    const store = useStore()

    async function getCategory () {
      const req = await fetch('https://fakestoreapi.com/products/categories')
      const res = await req.json()
      state.categoryList = [...res]
    }

    function sendOpt (category) {
      store.commit('ADD_CATEGORY', category)
    }
    onMounted(() => {
      getCategory()
    })
    return {
      state,
      sendOpt
    }
  }
}
</script>

<style>

</style>
