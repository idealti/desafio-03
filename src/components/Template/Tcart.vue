<template>
    <div class="cart" :class="cartClass">

        <div class="cart-container">
            <div class="lista-cart">
                <ul>
                    <li  v-for="item in cartList" :key="item.id"><TcardItem :item="item"/><hr></li>
                    <li v-if="cartList.length >= 1" id="total">Total: ${{total}}</li>
                </ul>
                <br>
                <button v-if="cartList.length >= 1" class="btn-cart-order">confirm order</button>
                <h1 v-else > carrinho vazio</h1>
            </div>
        </div>

    </div>
</template>

<script>
import TcardItem from "./TcartItem.vue"
export default {
    props: ['showCart', 'cartClass'],
      computed: {
  
    cartList() {
      return this.$store.state.carrinho.carrinho;
    },
     total() {
      return this.cartList
        .map(item => item.price)
        .reduce((preventValue, currentValue) => preventValue + currentValue, 0)
    }
  }, 
  components: {
      TcardItem
  }

}
</script>

<style>
.cart {
    overflow: hidden;
    top: 50px;
    z-index: 1;
    position: fixed;
    width: 80%;
    transition: all 1s;
}

.cart-container {
    
    border: .1em;
    border-style: solid;
    border-color: #8A8BDE;
    border-radius: 5px;
    background-color: rgba(106, 106, 106, 0.67);
    height: 100%;


}

.lista-cart{
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;
    overflow-y: scroll ;
}
.lista-cart {
    scrollbar-width: none; /* ParaFirefox */
    -ms-overflow-style: none; /* Para Internet Explorer e Edge */
}

.lista-cart::-webkit-scrollbar {
    width: 0px; /* Para Chrome, Safari, e Opera */
}

.cart-container ul {
   display: flex;
   flex-direction: column;
   justify-content: space-between;
   align-items: center;
    margin-top: 2%;
    color: #000;
    width: 90%;
   
}
.cart-container li {
     width: 95%;
     border-radius: 10px;
     margin: 3% 0;
    padding: 3em;
   text-align: center;
    background-color: #fff;
   
}

.cart-container li {
    padding: 1em;
   font-size: 2em;
}

.show-cart {
    height: 90vh;
}

.hidden-cart {
    height: 0;
    transition: all 1s;
}

.btn-cart-order{
    width: 50%;
    margin-bottom: 5em;
    padding: 1.5em;
    border-radius: 10px;
    color: #fff;
    background-color: #9BB6FA;
}

.btn-cart-order:hover{

    transform: scale(1.01);
      background-color: #8fadf7;
}

#total{
    width: 80%;
    font-size: 3.5em;
    color:  #6d70f1;
}


@media (max-width: 700px) {
    .cart {
        top: 150px;
    }

    .show-cart {
        height: 70vh;
    }
}
</style>