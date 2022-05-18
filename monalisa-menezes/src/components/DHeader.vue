<template>
  <section class="header">
    <h1 class="header__tittle">TechShop</h1>
    <nav class="header__nav">
      <span id="nav__category">All</span>
      <span>Men's Clothing</span>
      <span>Women's Clothing</span>
      <span>Electronics</span>
      <span>Jewelery</span>
    </nav>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
.header {  
  display: flex;
    margin: 0;
  justify-content: space-between;
  align-items: center;
  height: 70px;
  padding: 0 50px;
  font-family: "Inter";
  box-shadow: 0px 4px 30px -10px rgba(0, 0, 0, 0.25);
}
.header__tittle {
  font-weight: 700;
  font-size: 30px;
  color: #292929;
}
.header__nav span {
  margin-left: 12px;
  font-weight: 400;
  font-size: 16px;
  color:#242424;
  cursor: pointer;
  transition: 1s;
}
.header__nav span:hover {
    color: #37268C;
    transition: 1s;
    text-decoration: underline;
}
#nav__category {
  font-weight: 600;
}
</style>