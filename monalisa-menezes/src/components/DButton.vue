<template>
  <button>
    <slot />
  </button>
</template>

<script>
export default {};
</script>

<style scoped>
button {
  width: 120px;
  height: 30px;
  background: #2e245e;
  border: 2px solid #2e245e;
  color: #f5f5f5;
  margin-bottom: 12px;
  align-self: flex-start;
  margin-left: 20px;
  transition: 500ms;
  cursor: pointer;
}

button:hover {
  background-color: #7364bb;
  transition: 500ms;
}
</style>
