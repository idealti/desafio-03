<template>
  <div class="container">
    <Header
      :cartTotal="cartTotal"
      :cartItems="cartAllItems"
      :cartItemLength="cartAllItems.length"
      :finalizePurchase="finalizePurchase"
      @removeItem="removeProductItem"
      @finalizePurchaseEvent="finalizePurchaseEvent"
    />
    <div v-if="allProductsData">
      <div class="select_container">
        <label for="categories">Categorias</label>
        <select
          v-if="allCategories && allProductsData"
          v-model="categoryFilter"
        >
          <option disabled value="">Selecione uma categoria</option>
          <option
            v-for="category in allCategories"
            :value="category"
            :key="category"
          >
            {{ category }}
          </option>
        </select>
        <label for="sort">Ordenação</label>
        <select v-if="allProductsData" v-model="sortBy">
          <option disabled value="">Deixar produtos em ordem:</option>
          <option value="asc">Ascendente</option>
          <option value="desc">Descendente</option>
        </select>
      </div>

      <ProductsListVue
        :productsList="allProductsData"
        @addProduct="addProductToCart"
      />
    </div>

    <Loading v-else />
    <div
      class="alert"
      :class="{ active: finalizePurchase }"
      v-if="finalizePurchase"
    >
      <p class="alert_message">Compra finalizada!</p>
    </div>
  </div>
</template>

<script>
import ProductsListVue from "./components/ProductsList.vue";
import Header from "./components/Header.vue";
import Loading from "./components/Loading.vue";

export default {
  name: "App",
  components: {
    ProductsListVue,
    Header,
    Loading,
  },
  data() {
    return {
      allProductsData: null,
      allCategories: null,
      categoryFilter: null,
      sortBy: null,
      cartAllItems: [],
      finalizePurchase: false,
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
    addProductToCart(product) {
      this.cartAllItems.push(product);
    },
    removeProductItem(index) {
      this.cartAllItems.splice(index, 1);
    },
    finalizePurchaseEvent() {
      this.finalizePurchase = true;
      this.cartAllItems = [];
      setTimeout(() => {
        this.finalizePurchase = false;
      }, 1500);
    },
  },
  computed: {
    cartTotal() {
      let total = 0;
      if (this.cartAllItems.length) {
        this.cartAllItems.forEach((product) => {
          console.log(product);
          total += Number(product.price);
        });
      }
      return total;
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
  font-family: "Roboto", sans-serif;
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
  margin: 2rem auto;
}
.btn {
  background: #000;
  cursor: pointer;
  color: #fff;
  border: none;
  font-size: 1.6rem;
  font-family: "Roboto", sans-serif;
  padding: 1rem 2.5rem;
  border-radius: 4px;
}
.btn:hover {
  background: #e80;
}
.select_container {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 1rem;
  margin-top: 3rem;
}
.select_container select {
  border: 1px solid #000;
  box-shadow: 0 4px 8px rgba(30, 60, 90, 0.5);
  margin-bottom: 2rem;
}
.select_container label {
  font-size: 1.8rem;
}
.alert {
  position: absolute;
  top: 2rem;
  left: 0px;
  z-index: 10;
  width: 100%;
  text-align: center;
  display: none;
}
.alert.active {
  display: block;
  animation: fadeInDown 0.3s forwards;
}
.alert_message {
  background: #fff;
  display: inline-block;
  padding: 20px 40px;
  border: 2px solid #000;
  box-shadow: 0px 3px 4px rgba(0, 0, 0, 0.1), 0px 4px 10px rgba(0, 0, 0, 0.2);
  font-size: 1.6rem;
}
@keyframes fadeInDown {
  from {
    transform: translate3d(0, -30px, 0);
    opacity: 0;
  }
  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
}

@media screen and (max-width: 768px) {
  .container {
    padding: 0 1rem;
  }
}
</style>
