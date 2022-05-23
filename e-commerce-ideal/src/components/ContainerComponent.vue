
<template>
  <div class="container">
    <h1>Main</h1>
  </div>
</template>

<script>
export default {
  name: "ContainerComponent",
  data() {
    return {
      nome: "teste",
    };
  },
};
</script>

<style>
.container {
  width: 100%;
  min-height: 100vh;
  background-color: #f97f51;
}
</style>