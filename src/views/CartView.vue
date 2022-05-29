<template>
  <div class="container">
    <div class="cart-empty" v-if="getCart.length < 1">
      <h2>Não possui produtos no carrinho de compras</h2>
      <router-link to="/"
        ><button class="button-return-home">Fazer Compras</button></router-link
      >
    </div>
    <div v-else>
      <div class="product-in-cart" v-for="product in getCart" :key="product.id">
        <div class="thumb"><img :src="product.image" alt="" /></div>
        <div class="text-products">
          <h3>{{ product.title }}</h3>
          <p>{{ product.description }}</p>
        </div>
        <div class="quantity">
          <button @click="handleRemoveProduct(product)">
            <img
              class="arrow arrow-left"
              src="../assets/seta.png"
              alt="retirar produto"
            />
          </button>
          <input type="text" disabled :value="product.quantity" />
          <button @click="handleAddProduct(product)">
            <img
              class="arrow"
              src="../assets/seta.png"
              alt="adicionar produto"
            />
          </button>
        </div>
        <div class="prices">
          <p>Unitário</p>
          <p>R${{ product.price.toFixed(2) }}</p>
        </div>
        <div class="prices">
          <p>Subtotal</p>
          <p>R${{ this.decimal(product.price, product.quantity) }}</p>
        </div>
      </div>
      <div class="total">
        <div><h2>Valor Total:</h2></div>
        <div>
          <h2>R${{ getTotalPrice.toFixed(2) }}</h2>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  strict: true,
  name: "CartView",

  data() {
    return {
      products: [],
    };
  },
  computed: {
    ...mapGetters(["getCart", "getTotalPrice"]),
  },
  created() {
    this.$store.dispatch("fetchProducts");
    this.products = this.$store.getters.getProducts;
    this.cart = this.$store.getters.getCart;
  },
  methods: {
    handleAddProduct(value) {
      this.$store.commit("addCart", value);
      console.log(this.getCart);
    },
    handleRemoveProduct(value) {
      this.$store.commit("removeCart", value);
    },
    decimal(value, valueTwo) {
      const result = value * valueTwo;
      return result.toFixed(2);
    },
  },
};
</script>

<style scoped>
.container {
  width: 80%;
  margin: 20px auto 0;
}
.cart-empty {
  width: 80%;
  height: 90vh;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.button-return-home {
  background-color: #4954db;
  color: bisque;
  padding: 16px;
  font-size: 1.2rem;
  border: none;
  cursor: pointer;
  margin-right: 20px;
  border-radius: 20px;
  width: auto;
  height: auto;
}
.product-in-cart {
  height: 300px;
  width: 80%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: white;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  margin: 50px auto;
  padding: 20px;
  border-radius: 20px;
}
.thumb {
  height: 200px;
  width: 250px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 50px;
}
.thumb img {
  width: auto;
  max-width: 200px;
  height: 150px;
}
.text-products {
  width: 60%;
}
.quantity {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20%;
}
.quantity input {
  width: 10px;
  text-align: center;
  border: none;
  color: #4954db;
  font-size: 1rem;
  margin: 0 5px;
}
.arrow {
  height: 10px;
  width: auto;
}
.arrow-left {
  transform: scaleX(-1);
}
button {
  border: none;
  width: 25px;
  height: 25px;
  background-color: #4954db;
  border-radius: 10px;
  cursor: pointer;
}
.prices {
  margin-right: 20px;
  text-align: center;
}
.total {
  width: 80%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 30vh;
  max-height: 300px;
}
.total h2 {
  margin-right: 0.6rem;
}
</style>