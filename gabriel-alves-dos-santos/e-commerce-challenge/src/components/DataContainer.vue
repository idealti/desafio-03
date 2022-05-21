<template>
    <section>
        <div v-if="state.turnToLoad">
            <loading-component />
        </div>
        <section v-else class="data-container"
            v-for="item in state.data" :key="item.id"
        >
            <h3 class="title">{{ item.title }}</h3>
            <h3>Avaliação: {{ item.rating.rate }} </h3>
            <img :src="item.image" alt="item.title">
            <h2 class="price"> ${{ item.price }} </h2>
            <small class="description"> {{ item.description }} </small>
            <button @click="cartAdd(item)">Adicionar ao carrinho</button>
        </section>
    </section>
</template>

<script>
import { reactive } from '@vue/reactivity'
import { computed, onMounted, watch } from '@vue/runtime-core'
import { useStore } from 'vuex'
import LoadingComponent from './LoadingComponent.vue'
export default {
  name: 'DataContainer',
  components: {
      LoadingComponent
  },
  setup () {
    const state = reactive({
        data: null,
        allUrl: 'https://fakestoreapi.com/products',
        category: null,
        turnToLoad: true
    })
    const store = useStore()
    

    function cartAdd (item) {
      const dados = {
        id: item.id,
        quantidade: 0,
        price: item.price,
        totalPrice: item.price,
        title: item.title,
        description: item.description,
        category: item.category,
        image: item.image,
        rating: {
          rate: item.rating.rate,
          count: item.rating.count
        }	
      }
      store.commit('ADD_TO_CART', dados)
    }
    async function getCategory (category) {
      store.commit('CLEAN_DATA')
      state.turnToLoad = true
      const req = await fetch(`https://fakestoreapi.com/products/category/${category}`)
      const res = await req.json()
      store.commit('ADD_TO_DATA_CONTAINER', res)
      state.turnToLoad = false
      state.data = computed(() => store.state.dataContainer)
    }
    async function getAll (url) {
      const req = await fetch(url)
      const res = await req.json()
      store.commit('ADD_TO_DATA_CONTAINER', res)
      state.turnToLoad = false
      state.data = computed(() => store.state.dataContainer)
    }
    watch(() => store.state.selectedCategory,
        () => getCategory(store.state.selectedCategory),
        {
            deep: true
        }
    )
    onMounted(() => {
      getAll(state.allUrl)
    })
    return {
        state,
        cartAdd
    }
  }

}
</script>

<style lang="scss" scoped>
@import '../variaveis/variaveis.scss';
    section.data-container{
        border-radius: 8px;
        border: 2px solid $brown-var;
        width: 300px;
        min-height: 500px;
        background-color: white;
        padding: 20px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        margin: 0 auto;
        & img{
            width: 100px;
            border-radius: 8px;
        }
        & button{
            border-radius: 8px;
            cursor: pointer;
            padding: 5px 7px;
            background-color: green;
            color: white;
            font-weight: bold;
            border: 2px solid darkgreen;
            text-transform: uppercase;
            transition: .5s;
            &:hover{
            background-color: darken($color: green, $amount: 10);
            }
        }
        & .price{
          color:green;
        }
        & .title{
          color: $brown-var;
        }
        & .description{
          text-align: justify;
        }
    }

</style>