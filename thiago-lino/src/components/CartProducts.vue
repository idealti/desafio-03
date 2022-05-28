<template>
  <div class="cart">
      <router-link to="/" class="cart--go-back" v-if="isPhone()">← Voltar</router-link>
      <h2 class="cart--title">Seu Pedido &#11088; </h2>
      <p v-if="hasItem">Seu carrinho ainda está vazio</p>
      <transition-group name="list">
          <CartItem v-for="item in cardList" :key="item.id" :item="item"/>
      </transition-group>
      <div class="cart--total" v-if="!hasItem">
          <span>Total:</span>
          <span class="price">{{ getCardTotal | currency }}</span>

          <div v-html="circleIcon"></div>
      </div>
        
        <!-- <button class="cart--button" v-if="!hasItem">Finalizar Compra</button> -->
    </div>
</template>

<script>
import CartItem from './CartItem.vue'
import { mapGetters } from 'vuex';
import Mixin from '@/mixins/mixins'
import feather from 'feather-icons'

export default {
    name: "CartProducts",
    mixins: [Mixin],
    components:{
        CartItem,
    },
    filters:{
        currency(value){
            return `$ ${value.toFixed(2)}`
        }
    },
    computed: {
        ...mapGetters([
            'getCardTotal'
        ]),
        cardList() {
            return this.$store.state.cartList;
        },
        hasItem(){
            return !this.cardList.length;
        },
        circleIcon(){
            return feather.icons.circle.toSvg()
        }
    },
}
</script>


<style lang="less" scoped>
.cart{
    background: white;
    width: 600x;
    min-width: 600px;
    padding: 50px;

    &--go-back{
    font-weight: 600;
    font-size: 24px;
    margin-bottom: 50px;
    text-decoration:none;
    color: black;
    }
    &--title{
        font-weight: 600;
        font-size: 24px;
    }
    &--total{
        font-weight: 600;
        font-size: 18px;
        text-align: right;
        margin-top: 30px ;

        .price{
            color: @yellow;
            padding-left: 10px;
        }
    }
    &--button{
        width: 450px;
        height: 40px;
        background: @pink;
        color: white;
        font-weight: 600px;
        font-size: 18px;
        border-radius: 8px;
        border: 0;
        cursor: pointer;
        margin: 50px;
    }
    .list-enter-active, .list-leave-active{
        transition: all 1s;
    }
    .list-enter, .list-leave-to{
        opacity: 0;
        transform: translateX(-30px);
    }
    @media  @tablets{
        width: 100%;
        min-width: unset;
        padding: 50px 20px 20px;
    }
}
</style>