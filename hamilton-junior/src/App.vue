<template>
  <div>
    <select v-if="allCategories && allProductsData" v-model="categoryFilter">
      <option disabled value="">Selecione uma categoria</option>
      <option
        v-for="category in allCategories"
        :value="category"
        :key="category"
      >
        {{ category }}
      </option>
    </select>
    <select v-if="allProductsData" v-model="sortBy">
      <option disabled value="">Deixar produtos em ordem:</option>
      <option value="asc">Ascendente</option>
      <option value="desc">Descendente</option>
    </select>

    <ProductsListVue :productsList="allProductsData" />
  </div>
</template>

<script>
import ProductsListVue from "./components/ProductsList.vue";
export default {
  name: "App",
  components: {
    ProductsListVue,
  },
  data() {
    return {
      allProductsData: null,
      allCategories: null,
      categoryFilter: null,
      sortBy: null,
    };
  },
  methods: {
    async getAllCategories() {
      const req = await fetch("https://fakestoreapi.com/products/categories");
      const res = await req.json();
      this.allCategories = res;
    },
    async getAllProducts() {
      this.allProductsData = null;
      const req = await fetch("https://fakestoreapi.com/products");
      const res = await req.json();
      this.allProductsData = res;
    },
    async chooseProductsByCategory() {
      this.allProductsData = null;
      const req = await fetch(
        `https://fakestoreapi.com/products/category/${this.categoryFilter}`
      );
      const res = await req.json();
      this.allProductsData = res;
    },
    async showProductsByOrder() {
      const req = await fetch(
        `https://fakestoreapi.com/products?sort=${this.sortBy}`
      );
      const res = await req.json();
      this.allProductsData = res;
    },
  },
  watch: {
    categoryFilter() {
      this.chooseProductsByCategory();
    },
    sortBy() {
      this.showProductsByOrder();
    },
  },
  created() {
    this.getAllProducts();
    this.getAllCategories();
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
html {
  font-size: 62.5%;
}
img {
  display: block;
  max-width: 100%;
}
a {
  text-align: none;
}
ul {
  list-style: none;
}
.container {
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
}
</style>
