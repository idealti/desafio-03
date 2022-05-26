<script setup>
import TheNavbar from './components/TheNavbar.vue';
import {useRouter} from 'vue-router';
const router = useRouter();
const DEFAULT_TITLE = 'Loja';
router.beforeEach((to) => {
  document.title = to.meta.title || DEFAULT_TITLE;
});
</script>

<template>
<TheNavbar />
<router-view/>
</template>

<style>
/* Import Open Sans - Google Fonts */
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700&display=swap');
:root {
  --main-black: #303030;
  --main-white: #f6f6f6;
  --main-blue: #4677bb;
  --main-green: #00A000;
  --dark-blue: #426eac;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  width: 100%;
  min-height: 100vh;
  background-color: var(--main-white);
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
