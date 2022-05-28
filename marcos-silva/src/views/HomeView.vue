<template>
  <Suspense>
    <template #default>
      <main>
        <h1 v-if="error">Ocorreu um erro com sua requisicao</h1>
        <div>
          <home-hero />
          <home-categories />
          <home-best-sellers />
        </div>
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
