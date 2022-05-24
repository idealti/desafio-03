<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';

const store = useStore();
const query = computed(() => store.state.search.query);
</script>

<template>
  <section class="c-hero">
    <div class="hero">
      <h1>{{ query }}</h1>
    </div>
  </section>
</template>

<style scoped lang="scss">
  .c-hero {
    background-color: black;
    height: 522px;
  }
</style>
