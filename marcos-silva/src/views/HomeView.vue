<template>
  <Suspense>
    <template #default>
      <main>
        <home-hero />
        <home-categories />
        <home-best-sellers />
      </main>
    </template>
    <template #fallback>
      <loading-component />
    </template>
  </Suspense>
</template>

<script setup>
import HomeHero from '@/components/home/HomeHero.vue';
import HomeCategories from '@/components/home/HomeCategories.vue';
import HomeBestSellers from '@/components/home/HomeBestSellers.vue';
import LoadingComponent from '@/components/shared/LoadingComponent.vue';
import {
  onErrorCaptured,
  ref,
} from 'vue';

const error = ref(false);

onErrorCaptured(() => {
  error.value = error;
});

</script>

<style lang="scss">
  * {
    color: black;
  }
  footer {
    text-align: center;
  }
</style>
