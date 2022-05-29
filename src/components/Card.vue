<template>
  <div class="card" v-for="product in products" :key="product.id">
    <div class="image">
      <img :src="product.image" alt="" />
    </div>
    <div>
      <h3>{{ product.title }}</h3>
    </div>
    <div>
      <p>R${{ product.price.toFixed(2) }}</p>
    </div>
    <button
      class="btn-default button-add-cart"
      @click="handleAddCartAndQuantity(product)"
    >
      Add to Cart
    </button>
  </div>
</template>

<script>
export default {
  props: {
    products: {
      type: [],
      required: true,
    },
    handleAddCartAndQuantity: {
      type: Function,
      required: true,
    },
  },
};
</script>

<style scoped>
.card {
  width: 100%;
  max-width: 420px;
  height: 600px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  text-align: center;
  margin: 30px;
  overflow: hidden;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  background: white;
  padding: 0 0 20px 0;
  border-radius: 20px;
}
.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}

.image {
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
  width: 100%;
  height: 350px;
  display: flex;
  justify-content: center;
  align-items: center;
}
img {
  width: auto;
  height: auto;
  max-width: 250px;
  max-height: 350px;
}
h3 {
  padding: 10px;
}
.button-add-cart {
  background-color: #4954db;
  font-size: 1rem;
  color: bisque;
  padding: 16px;
  font-size: 1.2rem;
  border: none;
  cursor: pointer;
  border-radius: 20px;
}

.button-add-cart:hover {
  background-color: #4480f2;
}
</style>