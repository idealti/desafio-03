<template>
  <main>
    <ul v-if="productsList" class="productsList">
      <li v-for="product in productsList" :key="product.id" class="product">
        <div class="productImage">
          <img :src="product.image" :alt="product.title" />
        </div>
        <div class="productContent">
          <h2>{{ product.title }}</h2>
          <span>{{ product.price }}</span>
          <button class="btn">Adicionar ao carrinho</button>
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
  gap: 3rem;
  margin-top: 4rem;
}
.product {
  box-shadow: 0 4px 8px rgba(30, 60, 90, 0.5);
  padding: 1rem;
  background: #fff;
  border-radius: 4px;
  transition: all 0.2s;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 2rem;
}
.product:hover {
  box-shadow: 0 6px 12px rgba(30, 60, 90, 0.9);
}
.productImage {
  align-self: center;
}
.productImage img {
  max-width: 300px;
  max-height: 300px;
}
.productContent {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
h2 {
  font-size: 2rem;
}
span {
  color: #e80;
  font-weight: bold;
  font-size: 2.4rem;
}
</style>
