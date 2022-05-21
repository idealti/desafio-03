<script>
import {defineComponent, ref} from 'vue';
import {useProductsStore} from '../stores/product'


export default defineComponent({
  name: "ProductsView",
  data() {
   const filterProducts = ref(null);
   const filterState = ref('');
   const selectFilter = [5, 4, 3, 2, 1];
   const filtersApply = ref([]);
  return { filterProducts, filterState, selectFilter, filtersApply}
  },
  async setup() {
    const store = useProductsStore();
    const addToStore = (obj) => {
      store.insertSelectedProduct(obj);
    }
    const products = ref(null);
    const productsResponse = await fetch('https://fakestoreapi.com/products');
    products.value = await productsResponse.json();

    return { products, addToStore }
  },
  mounted() {
    this.setCategoryFilter({target: {value:'all'}});
  },
  methods: {
    setCategoryFilter({target}) {
      if(target.value === 'all') {
        this.filterProducts = this.products
      } else {
        this.filterProducts = this.products.filter((i) => i.category === target.value);
      }
    },
    setRateFilter({target}) {
      if(target.value === 'all') {
        this.filterProducts = this.products
      } else {
        this.filterProducts = this.products.filter((i) => Math.trunc(Number(i.rating.rate)) === Number(target.value));


      }
    },
     handleChange({target}) {
       this.filterState = target.value
    },
    handleClick() {
       if(this.filterState === '') {
          this.filterProducts = this.products
       } else {
         this.filterProducts = this.products.filter((i) => i.title.toLowerCase().includes(this.filterState.toLowerCase()));
       }
    },
    sendToRoute(id, obj) {
      this.addToStore(obj);
      this.$router.push({
        name: 'product',
        params: {
          id,
          data: obj
 },
});
    }
  }
})
</script>

<template>
  <suspense>
    <template #default>
        <main>
          <section>
            <label>Name: 
              <input type="text" placeholder="Search" v-bind:value="filterState" v-on:change.prevent="handleChange">
            </label>
            <button type="button" v-on:click="handleClick">Search</button>
            <span>Category: </span>
            <select name="categoryFilter" id="categoryFilter" v-on:change="setCategoryFilter">
              <option value="all">all</option>
              <option v-bind:value="item" v-for="item in new Set(products.map((i) => i.category))" v-bind:key="item">{{ item }}</option>
            </select>
            <span>Rate: </span>
            <select name="categoryFilter" id="categoryFilter" v-on:change="setRateFilter">
              <option value="all">all</option>
              <option v-bind:value="rate" v-for="rate in selectFilter" v-bind:key="rate">{{ rate }}</option>
            </select>
            <span>Filters: </span>
            <div v-for="item in filtersApply" v-bind:key="item">
              <p>{{item}}</p>
              <button type="button"> X </button>
            </div>
          </section>
          <div v-for="item in filterProducts" v-bind:key="item.id">
            <div v-on:click="() => sendToRoute(item.id, item)">
              <p>{{item.title}}</p>
              <img v-bind:src="item.image" alt="item.title">
            </div>
            {{ item }}
          </div>
        </main>
    </template>
    <template #fallback>
      <h1>Loading...</h1>
    </template>
  </suspense>
</template>

<style>
img {
  width: 10%
}
</style>