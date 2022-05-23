<template>
  <nav>
    <router-link to="/">Home</router-link>
    <router-link to="/cart">Cart</router-link>
  </nav>
  <router-view />
</template>

<style>
nav {
  padding: 30px;
  width: 80%;
  margin: auto;
  max-width: 1920px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: violet;
}

a {
  text-decoration: none;
}

a:visited{
  color: black;
}
</style>
