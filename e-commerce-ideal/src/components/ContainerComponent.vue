<template>
  <div class="container">
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
  </div>
</template>

<script>
import Card from "./CardComponent.vue";
export default {
  name: "ContainerComponent",
  components: {
    Card,
  },
  data() {
    return {
      nome: "teste",
    };
  },
};
</script>

<style>
.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 100%;
  min-height: 100vh;
  background-color: #ecb39e;
}
</style>
