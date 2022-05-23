<template>
  <div class="card">
    <div>Cards</div>
  </div>
</template>

<script>
export default {
  name: "CardComponent",
  data() {
    return {
      nome: "teste",
    };
  },
};
</script>

<style>
.card {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin: 10% auto;
  max-width: 800px;
  background-color: rgb(0, 0, 0);
  width: 60%;
  height: 20rem;
}
</style>
