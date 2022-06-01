<template>
  <Header />
  <Products />
</template>

<script>
import Header from "../components/Header.vue";
import Products from "../components/Products.vue";

export default {
  name: "myHome",
  components: {
    Header,
    Products,
  },
};
</script>
