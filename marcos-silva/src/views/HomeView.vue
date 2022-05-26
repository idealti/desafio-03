<template>
  <Suspense>
    <main>
      <h1 v-if="error">Ocorreu um erro com sua requisicao</h1>
      <div>
        <home-hero />
        <home-suggested />
      </div>
    </main>

    <template #fallback>
      <LoadingComponent />
    </template>
  </Suspense>
</template>

<script setup>
import HomeHero from '@/components/home/HomeHero.vue';
import HomeSuggested from '@/components/home/HomeSuggested.vue';
import LoadingComponent from '@/components/LoadingComponent.vue';
import { onErrorCaptured, ref } from 'vue';

const error = ref(null);
onErrorCaptured(() => {
  error.value = error;
});
</script>

<style lang="scss">
  * {
    color: black;
  }
</style>
