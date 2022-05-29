<template>
  <nav>
    <router-link to="/">Home</router-link>
    <router-link to="/cart"
      ><span>{{ this.getCart.length }}</span
      ><img src="./assets/cart.png" alt="carrinho de compras"
    /></router-link>
  </nav>
  <router-view />
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "App",

  computed: {
    ...mapGetters(["getCart"]),
  },
  watch: {
    getCart: {
      handler() {
        this.$store.commit("calculateTotalPrice");
      },
      deep: true,
    },
  },
  created() {
    this.$store.dispatch("fetchProducts");
  },
};
</script>

<style>
body {
  margin: 0;
  padding: 0;
  font-family: "Ubuntu", "Arial", "Sans-serif";
  background-color: whitesmoke;
}
nav {
  padding: 30px;
  width: 100vh - 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #6444f2;
  border-radius: 0 0 20px 20px;
}

a {
  text-decoration: none;
  margin: 0 10rem;
  color: bisque;
  font-size: 1.5rem;
}

a:visited {
  color: bisque;
}
span {
  font-size: 0.8rem;
  color: bisque;
}
img {
  height: 50px;
  width: auto;
}
</style>
