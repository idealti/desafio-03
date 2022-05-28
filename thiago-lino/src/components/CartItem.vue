<template>
  <div class="item">
      <div class="item--quantity">
          <button class="buttons" @click="decreaseQuantity(item.id)" :disabled="item.quantity == 0">-</button>
          <span class="number">{{ item.quantity }}</span>
          <button class="buttons" @click="increaseQuantity(item.id)">+</button>
      </div>
      <div class="item--img-container">
          <img class="item--img" :src="item.image" alt="imagem do produto">
      </div>
      <div class="item--container">
          <h3 class="item--title">{{ item.title }}</h3>
          <p class="item--price">{{ item.price | currency }}</p>
      </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
name: 'CartItem',
    filters:{
        currency(value){
            return `$${value.toFixed(2)}`
        }
    },
props:{
    item:{}
},
methods:{
...mapActions([
    'decreaseQuantity',
    'increaseQuantity'
])
}
}
</script>

<style lang="less" scoped>
.item{
    display: flex;
    align-items: center;
    padding: 20px 0;
    border-bottom: 1px solid @light-grey;
    &--quantity{
        display: flex;
        align-items: center;
        padding-right: 40px;
        
        .number{
            font-weight: 500;
            font-size: 18px;
            color:@yellow;
            width:28px;
            text-align: center;
        }
        .buttons{
            font-weight: 600;
            font-size: 18px;
            cursor: pointer;
            background: none;
            border: 0;
        }
    }
    &--container{
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 600px;
    }
    &--img{
        width: 50px;
        height: 50px;
        //display:block;
        margin: auto;
        border: 1px solid @light-yellow;
        border-radius: 8px;
        padding: 4px;
    }
    &--title{
        font-weight: 600;
        font-size: 14px;
        margin: 0;
        padding: 0;   
        padding-left: 20px ;
        /////
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;  
        overflow: hidden;
    }
    &--price{
        font-weight: 600;
        font-size: 18px;
        color: @yellow;
    }
}

</style>