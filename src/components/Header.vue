<template>
  <header>
    <div class="main">
      <div class="identidade">
        <img
          src="https://avatars.githubusercontent.com/u/32362019?s=200&v=4"
          alt="Ide@lti Logo"
          class="logo"
        />
        <span>Ide@lti</span>
      </div>
      <img
        src="src\assets\pngaaa.com-3531901.png"
        alt="Carrinho de compras"
        class="cart"
      />
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

.identidade {
  display: flex;
  align-items: center;
}
.logo {
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
  justify-content: space-between;
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

.cart {
  width: 50px;
  height: 50px;
}
</style>
