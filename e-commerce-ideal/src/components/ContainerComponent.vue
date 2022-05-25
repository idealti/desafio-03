<template>
  <div>
    <div class="container-text">
      <img class="container-image" src="~@/assets/4.png" />
    </div>
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
  height: 30rem;
  background-color: #e7eaef;
  background: linear-gradient(
    180deg,
    rgb(231, 234, 239) 80%,
    rgb(255, 255, 255) 100%
  );
}
.container-text img {
  width: 100%;
  height: 500px;
}
</style>
