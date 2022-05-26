<template>
  <nav>
    <router-link to="/">Home</router-link>
    <router-link to="/cart">Cart <span>{{cart.length}}</span></router-link>
  </nav>
  <router-view />
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      cart: [],
    };
  },

  created() {
    this.cart = this.$store.getters.getCart
  }
};
</script>

<style>
nav {
  padding: 30px;
  width: 80%;
  margin: auto;
  max-width: 1920px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: violet;
}

a {
  text-decoration: none;
}

a:visited {
  color: black;
}
span {
  font-size: 0.8rem;
  color: aqua;
}
</style>
