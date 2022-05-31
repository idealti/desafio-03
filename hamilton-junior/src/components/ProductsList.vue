<template>
  <main>
    <ul v-if="productsList" class="products_list">
      <li v-for="product in productsList" :key="product.id" class="product">
        <div class="product_image">
          <img :src="product.image" :alt="product.title" />
        </div>
        <div class="product_content">
          <h2>{{ product.title }}</h2>
          <span>{{ product.price }}</span>
          <button
            class="btn"
            @click="
              addItem(
                product.id,
                product.title,
                product.description,
                product.image,
                product.price
              )
            "
          >
            Adicionar ao carrinho
          </button>
        </div>
      </li>
    </ul>
  </main>
</template>

<script>
export default {
  name: "ProductsList",
  props: ["productsList"],
  methods: {
    addItem(id, name, description, image, price) {
      let product = {
        id,
        name,
        description,
        image,
        price,
        amount: 1,
      };
      this.$emit("addProduct", product);
    },
  },
};
</script>

<style scoped>
.products_list {
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
.product_image {
  align-self: center;
}
.product_image img {
  max-width: 300px;
  max-height: 300px;
}
.product_content {
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
