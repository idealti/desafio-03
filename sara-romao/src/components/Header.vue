<template>
  <header>
    <nav>
      <router-link class="logo" to="/"
        ><img src="/assets/logo.svg" alt="logo style Store"
      /></router-link>
      <router-link class="cartIcon" to="/carrinho">
        <img src="/assets/cart.svg" alt="Carrinho" />
        <p class="inCart">{{ $store.getters.qtdCart }}</p>
      </router-link>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Header",

  data() {
    return {};
  },
};
</script>

<style scoped>
header {
  max-width: 100%;
  box-shadow: 0px 4px 4px #f9f9f9;
}

nav {
  max-width: 1200px;
  margin: 0 auto;
  padding: 5px 20px 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

@media screen and (max-width: 425px) {
  nav {
    padding: 5px 10px 0px;
  }
}

.cartIcon {
  display: flex;
  transform: scale(0.9);
  text-decoration: none;
  position: relative;
  transition: 0.3s;
  width: 50px;
}

.logo {
  animation: animeZoom 0.8s ease-in-out forwards;
}

.cartIcon:hover {
  transform: scale(1);
}

.inCart {
  height: auto;
  text-align: center;
  background: #aff8ce;
  font-size: 14px;
  padding: 5px;
  border-radius: 50%;
  position: absolute;
  right: 0;
  top: 10px;
}
</style>