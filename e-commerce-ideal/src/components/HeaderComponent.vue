<template>
  <header>
    <nav>
      <ul>
        <li>
          <a class="nav-link" href="/">Petit Fashion </a>
        </li>
      </ul>
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
  width: 100%;
  background-color: #e7eaef;
  z-index: 1;
  padding: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: auto;
  height: 18vh;
  position: fixed;
}

nav ul {
  display: flex;
  justify-content: center;
  align-self: center;
  padding: 3%;
}
.nav-link {
  display: inline-flex;
  text-decoration: none;
  font-family: "Poiret One", cursive;
  font-weight: 900;
  font-size: 120px;
  letter-spacing: 5px;
  line-height: 50px;
  color: #333333;
}
.nav-link:hover {
  color: black;
}
</style>
