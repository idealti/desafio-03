<template>
  <main class="container">
    <ul v-if="productsList" class="productsList">
      <li v-for="product in productsList" :key="product.id">
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
  props: ["productsList"],
};
</script>

<style scoped>
.productsList {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
}
</style>
