<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import Header from './components/Header.vue'
</script>

<template>
  <Header />
  <router-view />
</template>

<style lang="scss">
* {
   margin: 0;
   padding: 0;
   box-sizing: border-box;
   font-family: 'Roboto', Arial, Helvetica, sans-serif;
   -webkit-font-smoothing: antialiased;
}

body {
   background-color: #333;
}

@media (max-width: 1279px) {
   html {
      font-size: 93.75%; //15px
   }
}
@media (max-width: 1080px) {
   html {
      font-size: 87.5%; //14px
   }
}
@media (max-width: 768px) {
   html {
      font-size: 81.25%; //13px
   }
}
@media (max-width: 480px) {
   html {
      font-size: 75%; //12px
   }
}

body, input, textarea, button {
   font-family: 'Roboto', Arial, Helvetica, sans-serif;
   font-weight: 400;
}

h1, h2, h3, h4, h5, h6, strong {
   font-weight: 600;
}

button, a {
   cursor: pointer;
}

[disabled] {
   opacity: 0.6;
   cursor: not-allowed;
}

a {
   text-decoration: none;
   color: inherit;
}
</style>
