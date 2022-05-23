
<template>
  <div>
    <Header />
    <Container />
    <Footer />
  </div>
</template>

<script>
import Header from "./components/HeaderComponent.vue";
import Footer from "./components/FooterComponent.vue";
import Container from "./components/ContainerComponent.vue";

export default {
  name: "App",
  components: {
    Header,
    Footer,
    Container,
  },
};
</script>

<style>
</style>