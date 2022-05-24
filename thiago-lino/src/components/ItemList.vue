<template>
  <div class="item-list">
      <LoadingList v-if="isLoading"/>
      <ProductsList
      v-for="item in itemsList" :key="item.id" :item="item"
      />

  </div>
</template>

<script>
import axios from 'axios';
import ProductsList from './ProductsList';
import LoadingList from './LoadingList.vue';


export default {
    name:'ItemList',
    components:{
    ProductsList,
    LoadingList,
    },
    data(){
        return{
            itemsList: [],
            isLoading: false
        }
    },
    created(){
    this.getItemList();
  },
  computed: {
    selectedCategory:{
      get(){
        return this.$store.state.selectedCategory;
      }
    }
  },
  methods:{
    getItemList(){
      this.isLoading = true;
      this.itemsList = [];
      axios.get(`https://fakestoreapi.com/products/category/${this.selectedCategory}`, {params: { category: "women's clothing" }}).then(response => {
      this.itemsList = response.data;
      this.isLoading = false;
    })
    }
  },
  watch:{
    selectedCategory() {
      this.getItemList();      
    }
  }
}
</script>

<style lang="less" scoped>
  .item-list{
    margin: 50px;
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    align-content: flex-start;

    @media @tablets {
      flex-wrap: wrap;
      margin: 0;
      padding: 20px;
      
    }
  }
</style>