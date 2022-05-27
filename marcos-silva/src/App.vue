<script setup>
import LoadingComponent from '@/components/LoadingComponent.vue';
import MainHeader from '@/components/HeaderComponent.vue';
</script>

<template>
  <Suspense>
    <div>
      <MainHeader/>
      <router-view/>
    </div>
    <template #fallback>
      <LoadingComponent />
    </template>
  </Suspense>
</template>

<style lang="scss">
@import './styles/variables';
@import './styles/colors';

* {
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: none;
  text-decoration: none;
  color: $base-white;
}

body {
  font-family: $base-font;
  background-color: #F9F9F9;
}

</style>
