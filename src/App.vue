<template>
  <Header />
  <Filter />
</template>

<script>
import Header from "./components/Header.vue";
import Filter from "./components/Filter.vue";

export default {
  name: "App",
  components: {
    Header,
    Filter,
  },
};
</script>

<style>
@import "./global.css";
</style>
