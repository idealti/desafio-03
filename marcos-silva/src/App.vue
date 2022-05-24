<script setup>
import MainHeader from './components/MainHeader.vue';
</script>

<template>
  <MainHeader/>
  <router-view/>
</template>

<style lang="scss">
@import './styles/globals';
@import './styles/variables';

#app {
  font-family: $base-font;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
