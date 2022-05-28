<template>
  <Header />
  <router-view />
  <Footer />
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";

export default {
  components: {
    Header,
    Footer,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap");

* {
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
}

ul {
  list-style: none;
}

body {
  font-family: "Roboto", sans-serif;
}

.container {
  max-width: 1220px;
  margin: 0 auto;
}

/** animations */
@keyframes animeZoom {
  from {
    opacity: 0;
    transform: scale(0.5);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
</style>
