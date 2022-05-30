<template>
  <div class="header">
    <div class="nav">
      <Cart :showCart="showCart" :cartClass="cartClass"/>
      <h1><b class="mark-letter">F</b>ake<b class="mark-letter">S</b>tore</h1>
      <div class="search">
        <input type="text" class="nav-busca text-nav-busca">
        <button class="nav-busca btn-nav-busca"><img height="60%" src="../assets/search.svg" alt="search"></button>
      </div>
      <img @click="showCart()" height="100%" src="../assets/smiling-shop-bag.svg" alt="">
    </div>

  </div>
</template>

<script>
import Cart from "./Template/Tcart.vue"
export default {
  data(){
    return{
      cartVisibility: false,
      cartClass: "hidden-cart"
    }
  },
  components:{
    Cart
  },
  methods:{
    showCart(){

        this.cartVisibility = !this.cartVisibility
        if(this.cartVisibility){
          this.cartClass = 'show-cart'
        }else{
          this.cartClass = 'hidden-cart'
        }


    }
  }
};
</script>

<style scoped>
.header{
 width:100% ;
   color: #fff;
 /*  background-color: #868686; */
background: rgb(138,139,222);

  font-size: .5em ;
}
.nav {
  position: relative;
  padding: 2em;
  padding-bottom: 4em;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
.nav img{
  cursor: pointer;
}

.nav img:hover{
      -ms-transform: scale(1.08); /* IE 9 */
  transform: scale(1.08);
}

.search{
  display: flex;
  width: 50%;
}

 .nav-busca{
  height: 100%;
  
}
 .btn-nav-busca {
  width: 5%;
  border-radius: 0 5px 5px 0;
  background-color: #fff ;
}
 .text-nav-busca {
  width: 85%;
  padding: 0 2%;
  border-radius: 5px 0 0 5px;
}
.mark-letter{
  font-size: 1.2em;
}

@media (max-width: 700px) {
  
  .nav {
  
  padding: 2em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.nav img{
  padding: 5%;
}
.search{
  padding: 5%;
  width: 90%;
  height: 4em;
}
.btn-nav-busca{
  width:10%;
}

}

</style>