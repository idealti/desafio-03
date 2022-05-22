<template>
  <div class="home__container">
    <d-header />

    <div class="container">
      <section class="section__card">
        <d-card
          v-for="product in products"
          :key="product.id"
          :list="product"
        />
      </section>

      <div class="container__cart">
        <div class="container--input">
          <input type="text" />
          <button>Search</button>
        </div>

        <d-cart />
      </div>
    </div>
  </div>
</template>

<script>
import DHeader from "../components/DHeader.vue";
import DCard from "../components/DCard.vue";
import DCart from "../components/DCart.vue";
import { http } from "../services/config";
export default {
  components: {
    DHeader,
    DCard,
    DCart,
  },
  data() {
    return {
      productList: "",
    };
  },
  computed: {
    products() {
      return this.$store.state.products.products;
    },
  },
};
</script>

<style scoped>
.section__card {
  max-width: 900px;
  display: flex;
  flex-wrap: wrap;
  /* justify-content: space-between; */
  margin-bottom: 12px;
}

.container {
  display: flex;
  justify-content: space-around;
  width: 100%;
  align-self: flex-start;
}

.container--input {
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-self: flex-end;
}

.container input {
  box-sizing: border-box;
  width: 200px;
  height: 50px;
  background: #f5f5f5;
  border: 1px solid #f5f5f5;
  margin-top: 20px;
  margin-right: 8px;
}

.container button {
  width: 76px;
  height: 50px;
  background: #37268c;
  border: 2px solid #37268c;
  margin-top: 20px;
  color: #f5f5f5;
  transition: 500ms;
  cursor: pointer;
}

.container button:hover {
  background-color: #7364bb;
  transition: 500ms;
}

.container__cart {
  display: flex;
  flex-direction: column;
  align-self: initial;
}
</style>
