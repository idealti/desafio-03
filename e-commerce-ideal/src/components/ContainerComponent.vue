<template>
  <div>
    <div class="container-text">blablabla</div>
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
};
</script>

<style>
body {
  font-family: "Bodoni Moda", serif;
}
.container-text {
  width: 100%;
  height: 20rem;
  background-color: #e7eaef;
}
</style>
