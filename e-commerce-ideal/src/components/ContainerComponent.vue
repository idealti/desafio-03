<template>
  <div>
    <div class="image-below-header">
      <img src="~@/assets/4.png" />
    </div>
    <Cards />
  </div>
</template>

<script>
import Cards from "./CardComponent.vue";

export default {
  name: "ContainerComponent",
  components: {
    Cards,
  },
};
</script>

<style>
.image-below-header {
  width: 100%;
  height: 25rem;
  background-color: #e7eaef;
  background: linear-gradient(#e7eaef 50%, var(--primary-color) 100%);
}
.image-below-header img {
  width: 100%;
  height: 400px;
}
</style>
