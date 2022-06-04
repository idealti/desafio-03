<template>
  <div class="filtro">
      <div class="nav-filtro">
          <ul class="lista-filtro">
            <li @click="getCategory('')">All</li>
            <li @click="getCategory('electronics')">Electronics</li>
            <li @click="getCategory('jewelery')">Jewelery</li>
            <li @click="getCategory(`men's clothing`)">Men's clothing</li>
            <li @click="getCategory(`women's clothing`)">Women's clothing</li>
          </ul>
      </div>
  </div>
</template>

<script>
export default {
     props:{'getCategory' : Function}
}
</script>

<style>

.lista-filtro{
  cursor: pointer;
  display: flex;
  flex-direction: row;
 /*  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.25); */
  border-radius: 25px;

}

.lista-filtro li{
    padding: 1em;
}

.lista-filtro{
  color: #fff;
  background-color: #9BB6FA;
}

.lista-filtro li:hover{
/*   color: #e0d8ea; */
 transform: scale(1.1);
}

@media (max-width: 700px) {
  
  .lista-filtro{
    font-size: x-small;
    
  }
}

</style>