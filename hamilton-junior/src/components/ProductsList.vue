<template>
  <main class="container">
    <ul v-if="allProductsData" class="productsList">
      <li v-for="product in allProductsData" :key="product.id">
        <div>
          <div>
            <img :src="product.image" :alt="product.title" />
          </div>
          <h2>{{ product.title }}</h2>
          <span>{{ product.price }}</span>
          <button>Adicionar ao carrinho</button>
        </div>
      </li>
    </ul>
  </main>
</template>

<script>
export default {
  name: "ProductsList",
  data() {
    return {
      allProductsData: null,
    };
  },
  methods: {
    getAllProducts() {
      fetch("https://fakestoreapi.com/products")
        .then((res) => res.json())
        .then((data) => (this.allProductsData = data));
    },
  },
  created() {
    this.getAllProducts();
  },
};
</script>

<style scoped>
.productsList {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
}
</style>
