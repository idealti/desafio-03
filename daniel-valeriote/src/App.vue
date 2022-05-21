<script setup>
import TheNavbar from './components/TheNavbar.vue';
</script>

<template>
<TheNavbar />
<router-view />
</template>

<style>
/* Import Open Sans - Google Fonts */
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;700&display=swap');
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  width: 100%;
  min-height: 100vh;
  background-color: #f6f6f6;
}
a {
  text-decoration: none;
  color: unset;
}
ul {
  list-style: none;
}
#app {
  font-family: "Open Sans", sans-serif, Arial, Helvetica;
}
</style>
