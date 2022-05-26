<template>
  <ProductsListVue />
</template>

<script>
import ProductsListVue from "./components/ProductsList.vue";
export default {
  name: "App",
  components: {
    ProductsListVue,
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
html {
  font-size: 62.5%;
}
img {
  display: block;
  max-width: 100%;
}
a {
  text-align: none;
}
ul {
  list-style: none;
}
.container {
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
}
</style>
