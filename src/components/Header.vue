<template>
  <header>
    <div class="main">
      <img
        src="https://avatars.githubusercontent.com/u/32362019?s=200&v=4"
        alt=""
      />
      <span>Ide@lti</span>
      <!-- <div id="nav">
        <router-link to="/" class="link"> Home</router-link>
        <router-link to="/products/category/electronics" class="link"
          >Eletronicos</router-link
        >
        <router-link to="/products/category/jewelery" class="link"
          >Jóias</router-link
        >
        <router-link to="/products/category/men's clothing" class="link"
          >Roupas Masculinas</router-link
        >
      </div> -->
    </div>
  </header>
</template>

<script>
export default {
  name: "myHeader",
};
</script>

<style scoped>
header {
  background-color: #461723;
  width: 100%;
}
header img {
  width: 5rem;
  height: 5rem;
}

#nav {
  display: flex;
  justify-content: center;
  width: 100%;
  margin: 0 auto;
}

.link {
  text-decoration: none;
  color: white;
  margin: 0 auto;
}
.main {
  display: flex;
  align-items: center;
  width: 80%;
  margin: 0 auto;
}

span {
  margin-left: 2rem;
  font-weight: bold;
  font-size: 3rem;
  color: white;
}

label {
  color: white;
  font-size: 1.5rem;
  margin-left: 50px;
}

select {
  width: 16rem;
  height: 2rem;
  border-radius: 9px;
  border: 1px solid rgb(146, 146, 146);
  padding: 0 1rem;
  margin-left: 1.2rem;
}

select:focus {
  outline: 2px solid #a33954;
  box-shadow: 0 0 0 0;
  border: 0;
}
</style>
