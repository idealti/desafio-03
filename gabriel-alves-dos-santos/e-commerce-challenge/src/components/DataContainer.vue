<template>
    <section>
        <div v-if="state.turnToLoad">
            <loading-component />
        </div>
        <section v-else class="data-container"
            v-for="item in state.data" :key="item.id"
        >
            <img :src="item.image" alt="item.title">
            <h3 class="title">{{ item.title }}</h3>
            <h2 class="price"> <small>Preço: </small>{{ turnToPrice(item.price) }} </h2>
            <small class="description"> {{ item.description }} </small>
            <small>Avaliação: {{ item.rating.rate }} </small>
            <button @click="cartAdd(item)">Adicionar ao carrinho</button>
        </section>
    </section>
</template>

<script>
import { reactive } from '@vue/reactivity'
import { computed, onMounted, watch } from '@vue/runtime-core'
import { useStore } from 'vuex'
import { types } from '../store/mutationTypes'
import LoadingComponent from './LoadingComponent.vue'
export default {
  name: 'DataContainer',
  components: {
      LoadingComponent
  },
  setup () {
    const state = reactive({
      data: null,
      category: null,
      turnToLoad: true
    })
    const store = useStore()
    const { CLEAN_DATA, ADD_TO_CART } = types
    state.data = computed(() => store.state.dataContainer)

    
    function turnToPrice(num){
      num.toFixed(2).replace('.',',')
      return num.toLocaleString('eua', {style: 'currency', currency: 'USD'})
    }
    function cartAdd (item) {
      const dados = {
        id: item.id,
        amount: 0,
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
      store.commit(ADD_TO_CART, dados)
    }
    function getCategory (category) {
      store.commit(CLEAN_DATA)
      state.turnToLoad = true
      if(category === 'tudo'){
        store.dispatch('getAllData')
      } 
      store.dispatch('getSpecificCategory', category)
    }

    function getAll () {
      state.turnToLoad = true
      store.dispatch('getAllData')
    }

    watch(() => state.data,
      () => {
        if(state.data.length !== 0){
          state.turnToLoad = false
        }
      }  
    )
    watch(() => store.state.selectedCategory,
        () => getCategory(store.state.selectedCategory),
        {
          deep: true
        }
    )
    onMounted(() => {
      getAll()
    })
    return {
      state,
      cartAdd,
      turnToPrice
    }
  }

}
</script>

<style lang="scss" scoped>
@import '../variaveis/variaveis.scss';
    section.data-container{
        border-radius: 8px;
        box-shadow: 1px 1px 10px black;
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
            background-color: green;
            color: white;
            font-weight: bold;
            border: 2px solid darkgreen;
            text-transform: uppercase;
            transition: .5s;
            width: 100%;
            height: 40px;
            &:hover{
            background-color: darken($color: green, $amount: 10);
            }
        }
        & .price{
          color:black;
        }
        & .title{
          color: black;
          text-transform: uppercase;
          font-size:17px;
        }
        & .description{
          text-align: justify;
          font-size:10px;
        }
    }

</style>