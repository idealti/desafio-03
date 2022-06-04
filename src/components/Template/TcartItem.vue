<template>
  <div class="cart-item">
    <div class="card-item-container">
      <img :src="item.image" alt="image-produto">
      <div class="container-description">
        <p>{{item.title}}</p>
        <p class="price">${{item.price}}</p>
      </div>
    </div>
        
  </div>
</template>

<script>
export default {
    props: ['item']
}
</script>

<style>
.card-item-container{
  height: 10em;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  
}

.card-item-container img{
  width: 10%;
  height: 15vh;
}

.card-item-container p{
  text-align: center;
  padding: 3%;
}
.price{
  color:#8A8BDE;
    font-size: 1.8em;
}


</style>