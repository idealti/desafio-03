<template>
  <div class="item" @click="addToCart">
          <div class="container" >
            <p class="item--rate">{{ item.rating.rate }}</p>
          <img class="item--img" :src="item.image" alt="">
          </div>
      <div class="content">
          <h2 class="item--title">{{item.title}}</h2>
          <p class="item--description"> {{ item.description }}</p>
        <p class="item--price">{{ item.price | currency }}</p>
      </div>
  </div>
</template>

<script>

export default {
    name: 'ProductsList',
    filters:{
        currency(value){
            return `$ ${value.toFixed(2)}`
        }
    },
    props:{
        item: {}
    },
    methods:{
        addToCart() {
            this.$store.dispatch('addToCart', this.item)
        }
    },
}
</script>

<style lang="less" scoped>
.item{
    width: 215.95px;
    height: 400px;
    border-radius: 8px;
    background: white;
    margin: 20px;
    padding: 20px;
    position: relative;
    display: flex;
    flex-direction: column;
    cursor: pointer;

    &--rate{
        position: absolute;
        background: @pink;
        width: 40px;
        height: 20px;
        border-radius: 10px;
        color: white;
        top: 15px;
        right: 15px;
        padding: 3px 8px;
        font-size: 12px;
        text-align: center;    
    }
    &--img{
        display: block;
        margin: auto;
        width: 50%;
    }
    &--title{
        font-weight: 400;
        font-size: 13px;
        padding-top: 20px;
        margin-top: 20px;
    }
    &--description{
        color: @dark-grey;
        font-weight: 300;
        font-size: 12px;    
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;  
        overflow: hidden;
    }
    &--price{
    font-weight: 600;
    font-size: 18px;
    color: @yellow;
    margin: 0;
    text-align: right;
    }
    .content{
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content:flex-start;
    }

 @media @tablets {
     width: 100%;
     height: fit-content;
     border: 1px solid @light-grey;
     margin: 10px 0;
     padding: 5px 10px;

     &--title{
         text-align: center;
     }
     &--description{
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;  
        overflow: hidden;
     }
     }
 }
</style>