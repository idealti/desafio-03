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
.container-text {
  width: 100%;
  background-color: #f97f51;
}
</style>
