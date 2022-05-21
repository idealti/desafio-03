<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/cart">Cart</RouterLink>
      </nav>
    </div>
  </header>
  <suspense>
    <RouterView />
  </suspense>
</template>
