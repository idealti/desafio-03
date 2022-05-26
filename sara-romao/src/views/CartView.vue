<template>
  <div class="container">
    <h1 class="title">Meu Carrinho</h1>



  <main>
    <table>
  <tr>
    <th>Product</th>
    <th>Price</th>
    <th>Qty</th>
     <th>Total</th>
  </tr>

  <tr v-for="item in cart" :key="item.id">
    <td class="titleProduct"><img :src="item.image" :alt="item.title">{{item.title}}</td>
    <td>$ {{item.price.toFixed(2)}}</td>
    <td class="qtyCount"><div><button>-</button>{{item.qtd}}<button @click="addQty(item.id)">+</button></div></td>
    <td>$ {{item.totalItem.toFixed(2)}}</td>
    <td>Remover</td>
  </tr>
  
 
</table>
  </main>
  </div>
</template>


<script>
export default {
  data(){
    return{
      cart: this.$store.state.cart,
    }
  },
  methods:{
    addQty(product){
     /*  console.log(product) */
      this.$store.commit('incrementProduct', product)
    }
  }
};
</script>


<style scoped>
.container{
  max-width: 900px;
  margin: 0 auto;
}

.title{
  text-align: center;
}

main{
  overflow: auto;
}

table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
  min-width: 500px;
  
}

td, th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: #f8f8f8;
}

td{
  text-align: center;
}

td:first-child{
  text-align: left;
}

.titleProduct{
  display: flex;
  align-items: center;
  gap: 10px;
  
}

.titleProduct img{
  width: 50px;
  height: 100px;
  object-fit: contain;
  
}
.titleProduct{
  max-width: 100%;
}

.qtyCount{
  border: 1px solid red;
  
  
}

.qtyCount div{
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
}
</style>