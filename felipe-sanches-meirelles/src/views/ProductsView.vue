<script>
import './ProductsView.css'
import {defineComponent, ref} from 'vue';
import {useProductsStore} from '../stores/product'


export default defineComponent({
  name: "ProductsView",
  data() {
   const filterProducts = ref(null);
   const filterState = ref('');
   const selectFilter = [5, 4, 3, 2, 1];
   const selectCategory = [];
   const filtersApply = ref([]);
  return { filterProducts, filterState, selectFilter, filtersApply, selectCategory};
  },
  async setup() {
    const store = useProductsStore();
    const addToStore = (obj) => {
      store.insertSelectedProduct(obj);
    }
    const products = ref(null);
    const productsResponse = await fetch('https://fakestoreapi.com/products');
    products.value = await productsResponse.json();

    return { products, addToStore };
  },
  mounted() {
        this.insertElementsFiltred();
        this.insertAllCategory();
  },
  methods: {
    setCategoryFilter({target}) {
      if(target.checked === true) {
        this.insertNewCategory(target.value);
      }
      if(target.checked === false) {
        this.removeCategory(target.value);
      }
      this.insertElementsFiltred();
    },
    setRateFilter({target}) {
      if(target.value === 'all') {
        this.filterProducts = this.products;
      } else {
        this.filterProducts = this.products.filter((i) => Math.trunc(Number(i.rating.rate)) === Number(target.value));


      }
    },
     handleChange({target}) {
       this.filterState = target.value;
    },
    handleClick() {
       if(this.filterState === '') {
          this.filterProducts = this.products;
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
    },
    insertNewCategory(value) {
      this.filtersApply.push(value);
    },
    removeCategory(value) {
      const index = this.filtersApply.findIndex((i) => i === value);
      this.filtersApply.splice(index, 1);
    },
    insertElementsFiltred() {
      if(this.filtersApply.length === 0) {
        this.filterProducts = this.products;
      } else {
          this.filterProducts = [];
          this.filtersApply.forEach(i => {
            this.filterProducts = [...this.filterProducts, ...this.products.filter((item) => item.category === i)]
        });
      }
    },
    setSortSearch({target}) {
      switch (target.value) {
        case 'name':
          this.filterProducts = this.products.sort((a,b) => a.title.localeCompare(b.title) );
          break;
        case 'name dsc':
          this.filterProducts = this.products.sort((a,b) => b.title.localeCompare(a.title) );
          break;
        case 'rate':
          this.filterProducts = this.products.sort((a,b) => a.rating.rate - b.rating.rate );
          break;
        case 'rate dsc':
          this.filterProducts = this.products.sort((a,b) => b.rating.rate - a.rating.rate );
          break;
        case 'category dsc': 
          this.filterProducts = this.products.sort((a,b) => b.category.localeCompare(a.category));
          break;
        default:
          this.filterProducts = this.products.sort((a,b) => a.category.localeCompare(b.category));
          break;
      }
    },
    insertAllCategory() {
      this.selectCategory = new Set(this.products.map((i) => i.category));
    }
  }
})
</script>

<template>
  <suspense>
        <main>
          <section class="filterSection">
            <div class="div-allSearch">
              <div class="search-input">
                <input type="text" placeholder="Search by name" v-bind:value="filterState" v-on:change.prevent="handleChange">
                <button type="button" v-on:click="handleClick">Search</button>
              </div>
              <div class="rateFilter">
                <span>Rate: </span>
                <select name="rateFilter" id="rateFilter" v-on:change="setRateFilter">
                  <option value="all">all</option>
                  <option v-bind:value="rate" v-for="rate in selectFilter" v-bind:key="rate">{{ rate }}</option>
                </select>
              </div>
              <div class="div-category">
                <span>Category: </span>
                <div name="categoryFilter" id="categoryFilter">
                  <label v-for="item in selectCategory" v-bind:key="item" v-on:change="setCategoryFilter">
                  <input id="radioItem" type="checkbox" v-bind:value="item">{{item}}
                  </label>
                </div>
              </div>
              <div class="sort">
                <span>Sort:</span>
                <select name="sortProducts" id="sortProducts" v-on:change="setSortSearch">
                  <option value="name">name</option>
                  <option value="name dsc">name dsc</option>
                  <option value="category">category</option>
                  <option value="category dsc">category dsc</option>
                  <option value="rate">rate</option>
                  <option value="rate dsc">rate dsc</option>
                </select>
                </div>
            </div>
          </section>
          <div class="elements-father" >
            <div v-for="item in filterProducts" v-bind:key="item.id" class="element-children">
              <div v-on:click="() => sendToRoute(item.id, item)">
              <img v-bind:src="item.image" alt="item.title">
              <p>{{item.title}}</p>
              </div>
            </div>
          </div>
        </main>
  </suspense>
</template>
