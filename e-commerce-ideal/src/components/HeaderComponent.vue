<template>
  <header>
    <nav>
      <a class="nav-link" href="/">Petit Fashion </a>
    </nav>
  </header>
</template>

<script>
export default {
  name: "HeaderComponent",
  data() {
    return {
      nome: "home",
    };
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poiret+One&display=swap");
header {
  width: 100vw;
  background-color: var(--grey-scale-1);
  z-index: 1;
  height: 18vh;
  position: fixed;
}

nav {
  display: flex;
  justify-content: start;
  transform: translateY(70%);
}
.nav-link {
  font-family: "Poiret One", cursive;
  font-weight: 900;
  font-size: 7vw;
  letter-spacing: 5px;
  line-height: 50px;
  color: var(--grey-scale-4);
  padding: 0 5%;

}
.nav-link:hover {
  color: var(--grey-scale-3);
}
@media (max-width: 900px) {
  .nav-link {
    font-size: 10vw;
  }
}
</style>
