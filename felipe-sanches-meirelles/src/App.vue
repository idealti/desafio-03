<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
import './App.css';
</script>

<template>
  <header>
    <div class="wrapper">
      <h1>Shopping Cart</h1>
      <div>
        <nav class="navbar-app">
        <RouterLink to="/">
          <p>
            Home
          </p>
        </RouterLink>
        <RouterLink to="/cart">
          <p>
            Cart
          </p>
        </RouterLink>
      </nav>
      </div>
    </div>
  </header>
  <suspense>
    <RouterView />
  </suspense>
</template>