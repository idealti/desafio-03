<template>
  <section>
    <div>
      <!-- <input type="text" placeholder="Pesquise pelo nome" /> -->
      <select name="options" id="product-filter">
        <option value="electronics">Eletronicos</option>
        <option value="jewelery">Jóis</option>
        <option value="men's clothing">Roupas Masculinas</option>
      </select>
    </div>
  </section>
</template>

<script>
export default {
  name: "myFilter",
};
</script>

<style scoped>
section {
  width: 100%;
  height: 100%;
}

div {
  width: 80%;
  margin: 2.5rem auto;
}

input {
  margin: 0 3rem 0 0;
  width: 16rem;
  height: 2rem;
  border-radius: 9px;
  border: 1px solid rgb(146, 146, 146);
  padding: 0 1rem;
}

select {
  width: 16rem;
  height: 2rem;
  border-radius: 9px;
  border: 1px solid rgb(146, 146, 146);
  padding: 0 1rem;
}
input:focus,
select:focus {
  outline: 2px solid #a33954;
  box-shadow: 0 0 0 0;
  border: 0;
}
</style>
